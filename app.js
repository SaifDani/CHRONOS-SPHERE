/* ============================================================
   app.js — dipakai bareng semua halaman CHRONOS-SPHERE
   Isinya 3 hal:
     1) Karakter pemandu: bubble di atas karakter + suara saat diklik
     2) Perilaku tombol "kembali" (#backLink)
     3) ambilJSON(): fetch dengan batas waktu, supaya halaman tidak
        menggantung kalau internet/Apps Script lambat

   CARA KERJA karakter pemandu:
     - Saat halaman dibuka, bubble TIDAK muncul. Karakter menunggu dipencet.
     - Pencet karakter  -> bubble muncul + kalimat dibacakan.
     - Pencet lagi      -> kalimat berikutnya (kalau halaman punya lebih dari satu).
     - Pencet saat suara sedang jalan -> suara berhenti.
     - Ketuk bubble     -> bubble ditutup. Pencet karakter lagi kapan pun
                           untuk memunculkannya kembali.
     - Lama bubble tampil diatur di PENGATURAN BUBBLE di bawah.

   CARA PAKAI di sebuah halaman (taruh di akhir <body>):
     <script src="app.js"></script>
     <script>
       window.Pemandu && Pemandu.set([
         'Kalimat pertama.',
         'Kalimat kedua (muncul kalau karakter dipencet lagi).'
       ]);
     </script>
   Memanggil Pemandu.set() lagi (misal saat layar berganti) mengganti
   kalimatnya dan menutup bubble yang sedang terbuka.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     PENGATURAN BUBBLE — silakan ubah angkanya di sini
     --------------------------------------------------------- */
  var GAMBAR_KARAKTER = 'karakter-pemandu.png';   // ganti kalau nama file karaktermu beda

  // true  = bubble hilang sendiri setelah BUBBLE_DURASI
  // false = bubble tetap tampil sampai pengguna mengetuknya untuk menutup
  var BUBBLE_TUTUP_OTOMATIS = true;

  // Lama bubble tampil dalam milidetik (8000 = 8 detik). Kalau kalimatnya panjang atau
  // sedang dibacakan, bubble menunggu sampai suara selesai dulu. Dipakai hanya kalau
  // BUBBLE_TUTUP_OTOMATIS = true.
  var BUBBLE_DURASI = 8000;

  /* ---------------------------------------------------------
     1) KARAKTER PEMANDU
     --------------------------------------------------------- */
  // Pelafalan khusus untuk suara (hanya dipakai saat dibacakan, teks di bubble tetap asli)
  var LAFAL = [
    [/CHRONOS-SPHERE/gi, 'Kronos Sfir'],
    [/Out of/gi, 'Aut of'],
    [/Yunnan/gi, 'Yunan'],
    [/Homo erectus/gi, 'Homo erektus'],
    [/360°/g, 'tiga ratus enam puluh derajat']
  ];

  var daftar = [];          // kalimat untuk halaman/layar saat ini
  var idx = 0;              // kalimat yang sedang/terakhir tampil
  var sudahKlik = false;    // klik pertama = kalimat pertama; klik berikutnya = kalimat berikutnya
  var giliran = 0;          // penanda ucapan terbaru (supaya event ucapan lama diabaikan)
  var sedangBicara = false;
  var pembungkus = null, bubble = null, teksEl = null, tombol = null;
  var timerSembunyi = null;
  var mulaiTampil = 0;
  var suaraId = null;

  var synth = ('speechSynthesis' in window) ? window.speechSynthesis : null;

  function pilihSuara() {
    if (!synth) return;
    var semua = synth.getVoices() || [];
    suaraId = null;
    for (var i = 0; i < semua.length; i++) {
      var l = String(semua[i].lang || '').replace('_', '-').toLowerCase();
      if (l === 'id-id' || l === 'in-id' || l.indexOf('id') === 0) { suaraId = semua[i]; break; }
    }
  }
  if (synth) {
    pilihSuara();
    // Daftar suara sering baru tersedia sesaat setelah halaman dibuka
    if (synth.addEventListener) synth.addEventListener('voiceschanged', pilihSuara);
    else synth.onvoiceschanged = pilihSuara;
  }

  function untukSuara(teks) {
    var t = String(teks);
    LAFAL.forEach(function (p) { t = t.replace(p[0], p[1]); });
    // buang emoji & simbol panah supaya tidak dibacakan aneh
    try { t = t.replace(/[\u{1F000}-\u{1FFFF}\u{2190}-\u{2BFF}️]/gu, ''); } catch (e) {}
    return t.replace(/\s+/g, ' ').trim();
  }

  function bangun() {
    if (pembungkus) return;

    pembungkus = document.createElement('div');
    pembungkus.className = 'pemandu-wrap';
    pembungkus.id = 'pemanduWrap';

    bubble = document.createElement('div');
    bubble.className = 'pemandu-bubble';
    bubble.id = 'pemanduBubble';
    bubble.hidden = true;                       // menunggu karakter dipencet
    bubble.setAttribute('role', 'status');
    bubble.setAttribute('aria-live', 'polite');
    bubble.title = 'Ketuk untuk menutup';
    bubble.addEventListener('click', function () {
      berhenti();
      sembunyikanBubble();
    });

    teksEl = document.createElement('span');
    teksEl.className = 'pemandu-bubble-teks';
    var tutupEl = document.createElement('span');
    tutupEl.className = 'pemandu-bubble-tutup';
    tutupEl.textContent = '✕';
    tutupEl.setAttribute('aria-hidden', 'true');
    bubble.appendChild(teksEl);
    bubble.appendChild(tutupEl);

    tombol = document.createElement('button');
    tombol.type = 'button';
    tombol.className = 'pemandu-avatar-btn';
    tombol.id = 'pemanduAvatar';
    tombol.setAttribute('aria-label', 'Dengarkan penjelasan pemandu');

    var img = new Image();
    img.alt = 'Karakter pemandu';
    img.onerror = function () {
      var ph = document.createElement('div');
      ph.className = 'pemandu-avatar-placeholder';
      ph.textContent = '🧑‍🏫';
      if (img.parentNode) img.parentNode.replaceChild(ph, img);
    };
    img.src = GAMBAR_KARAKTER;
    tombol.appendChild(img);

    tombol.addEventListener('click', saatKarakterDiklik);

    pembungkus.appendChild(bubble);
    pembungkus.appendChild(tombol);
    document.body.appendChild(pembungkus);
  }

  function jadwalSembunyi(ms) {
    clearTimeout(timerSembunyi);
    if (!BUBBLE_TUTUP_OTOMATIS) return;         // mode "tetap tampil sampai ditutup pengguna"
    timerSembunyi = setTimeout(sembunyikanBubble, ms);
  }

  // Sisa waktu supaya total bubble tampil kira-kira BUBBLE_DURASI (minimal 1,5 detik)
  function sisaWaktu() {
    return Math.max(1500, BUBBLE_DURASI - (Date.now() - mulaiTampil));
  }

  function sembunyikanBubble() {
    clearTimeout(timerSembunyi);
    if (bubble) bubble.hidden = true;
  }

  function tampilkanBubble(teks, ms) {
    teksEl.textContent = teks;
    bubble.hidden = false;
    mulaiTampil = Date.now();
    jadwalSembunyi(ms || BUBBLE_DURASI);
  }

  function berhenti() {
    giliran++;                       // abaikan event dari ucapan yang dibatalkan
    sedangBicara = false;
    if (tombol) tombol.classList.remove('bicara');
    if (synth) { try { synth.cancel(); } catch (e) {} }
  }

  function bicara(teks) {
    if (!synth || typeof SpeechSynthesisUtterance === 'undefined') return false;
    var saya = ++giliran;
    var mulai = function () {
      if (saya !== giliran) return;  // sudah ada klik yang lebih baru
      var u = new SpeechSynthesisUtterance(untukSuara(teks));
      u.lang = 'id-ID';
      if (suaraId) u.voice = suaraId;
      u.rate = 0.95;
      u.onstart = function () {
        if (saya !== giliran) return;
        sedangBicara = true;
        tombol.classList.add('bicara');
      };
      var selesai = function () {
        if (saya !== giliran) return;
        sedangBicara = false;
        tombol.classList.remove('bicara');
        jadwalSembunyi(sisaWaktu());
      };
      u.onend = selesai;
      u.onerror = selesai;
      try { synth.speak(u); } catch (e) { selesai(); }
    };
    // Chrome kadang macet kalau cancel() langsung disusul speak()
    if (synth.speaking || synth.pending) {
      try { synth.cancel(); } catch (e) {}
      setTimeout(mulai, 80);
    } else {
      mulai();
    }
    return true;
  }

  function saatKarakterDiklik() {
    if (!daftar.length) return;

    // Klik saat sedang bicara = hentikan suara (bubble tetap tampil sesuai pengaturan)
    if (sedangBicara) {
      berhenti();
      jadwalSembunyi(sisaWaktu());
      return;
    }

    if (sudahKlik) idx = (idx + 1) % daftar.length;
    sudahKlik = true;

    var teks = daftar[idx];
    // Batas pengaman: kalau suara tidak pernah memberi tanda "selesai", bubble tetap hilang.
    // Tanpa dukungan suara, beri waktu baca sesuai panjang kalimat.
    var lama = Math.max(BUBBLE_DURASI, teks.length * (synth ? 90 : 60) + (synth ? 4000 : 0));
    tampilkanBubble(teks, lama);
    bicara(teks);
  }

  window.Pemandu = {
    // Ganti kalimat pemandu (dan tutup bubble yang sedang terbuka).
    // Bubble baru muncul setelah pengguna memencet karakter.
    set: function (teks) {
      var baru = (Array.isArray(teks) ? teks : [teks])
        .filter(function (t) { return t !== undefined && t !== null && String(t).trim() !== ''; })
        .map(String);
      if (!baru.length) return;
      bangun();
      berhenti();
      sembunyikanBubble();
      daftar = baru;
      idx = 0;
      sudahKlik = false;
    },
    diam: function () { berhenti(); sembunyikanBubble(); }
  };

  // Hentikan suara kalau halaman ditutup / pindah
  window.addEventListener('pagehide', berhenti);

  /* ---------------------------------------------------------
     2) TOMBOL KEMBALI
     Pakai history.back() hanya kalau halaman sebelumnya memang
     halaman web ini sendiri. Kalau dibuka lewat link dari luar
     (WhatsApp, Google, dsb.), ikuti tujuan di href supaya murid
     tidak "terlempar" keluar dari situs.
     --------------------------------------------------------- */
  function pasangTombolKembali() {
    var a = document.getElementById('backLink');
    if (!a) return;
    a.addEventListener('click', function (e) {
      var dariSitusIni = false;
      try {
        dariSitusIni = !!document.referrer &&
          new URL(document.referrer).origin === window.location.origin;
      } catch (err) {}
      if (dariSitusIni && window.history.length > 1) {
        e.preventDefault();
        window.history.back();
      }
    });
  }
  pasangTombolKembali();

  /* ---------------------------------------------------------
     3) AMBIL JSON DENGAN BATAS WAKTU
     --------------------------------------------------------- */
  window.ambilJSON = function (url, opsi, ms) {
    opsi = opsi || {};
    var ctrl = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var timer = null;
    if (ctrl) {
      opsi.signal = ctrl.signal;
      timer = setTimeout(function () { ctrl.abort(); }, ms || 12000);
    }
    return fetch(url, opsi)
      .then(function (res) { return res.json(); })
      .then(
        function (data) { clearTimeout(timer); return data; },
        function (err) { clearTimeout(timer); throw err; }
      );
  };
})();