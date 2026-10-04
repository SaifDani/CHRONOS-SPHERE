/* ============================================================
   nav.js — menu bawah CHRONOS-SPHERE (satu sumber untuk semua halaman)
   Cara pakai di tiap halaman:
     1. Taruh kerangka kosong:  <nav class="bottom-nav"></nav>
     2. Sebelum </body> tambahkan: <script src="nav.js"></script>
   Mengubah menu (nama, ikon, tujuan) cukup di daftar MENU di bawah ini.
   Halaman tanpa <nav class="bottom-nav"> (misalnya index.html) tidak
   terpengaruh.
   Opsi: <body data-nav-aktif="peta"> untuk menandai menu aktif secara
   manual, berguna di halaman anak seperti jalur-sutra.html.

   Tombol kembali: teks <a class="back-link"> disesuaikan otomatis dari
   tujuannya. Kalau mengarah ke beranda (index.html) tulisannya "Kembali
   ke Beranda", selain itu "Kembali ke Halaman Sebelumnya". Jadi halaman
   yang hanya punya tombol kembali (tanpa menu bawah) juga cukup memuat
   nav.js.

   Animasi: pil emas meluncur ke menu yang ditekan lalu halaman berpindah;
   di halaman baru pil melanjutkan dari posisi sebelumnya, jadi terasa
   seperti satu menu yang bergerak. Otomatis mati kalau perangkat
   meminta gerakan dikurangi (prefers-reduced-motion).
   ============================================================ */
(function () {
  var MENU = [
    { id: 'peta',       href: 'peta.html',        ikon: '🗺️', label: 'Peta Interaktif' },
    { id: 'panduan',    href: 'panduan.html',     ikon: '📖', label: 'Panduan' },
    { id: 'progres',    href: 'papan_skor.html',  ikon: '📊', label: 'Progres' },
    { id: 'pengaturan', href: 'pengaturan.html',  ikon: '⚙️', label: 'Pengaturan' }
  ];
  var KUNCI_POSISI = 'chronos_nav_idx';
  var JEDA_PINDAH = 230;   // ms, waktu pil meluncur sebelum halaman berpindah

  var bersih = function (t) { return String(t).toLowerCase().replace(/\.html$/, ''); };
  var kurangiGerak = function () {
    return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  };

  /* ---------- Tombol kembali: teks mengikuti tujuan ---------- */
  function labelKembali(a) {
    var href = a.getAttribute('href') || '';
    var nama = href.split(/[?#]/)[0].split('/').pop();
    var beranda = bersih(nama) === 'index' || href === '/' || href === './';
    return beranda ? 'Kembali ke Beranda' : 'Kembali ke Halaman Sebelumnya';
  }

  function terapkanKembali(a) {
    var teks = labelKembali(a);
    var ikon = a.querySelector('.back-icon');
    // buang semua isi selain ikon panah, lalu pasang teks yang sesuai
    Array.prototype.slice.call(a.childNodes).forEach(function (n) {
      if (n !== ikon) a.removeChild(n);
    });
    a.appendChild(document.createTextNode((ikon ? ' ' : '') + teks));
  }

  function sesuaikanKembali() {
    var daftar = document.querySelectorAll('.back-link');
    Array.prototype.forEach.call(daftar, function (a) {
      terapkanKembali(a);
      // kalau halaman mengubah tujuan lewat JavaScript, teks ikut berubah
      if (window.MutationObserver) {
        new MutationObserver(function () { terapkanKembali(a); })
          .observe(a, { attributes: true, attributeFilter: ['href'] });
      }
    });
  }

  function pasang() {
    var nav = document.querySelector('.bottom-nav');
    if (!nav) return;

    var berkas = bersih(location.pathname.split('/').pop() || 'index');
    var manual = document.body.getAttribute('data-nav-aktif');

    nav.textContent = '';
    nav.setAttribute('aria-label', 'Navigasi utama');

    var indikator = document.createElement('span');
    indikator.className = 'nav-indikator';
    indikator.setAttribute('aria-hidden', 'true');
    nav.appendChild(indikator);

    var butir = [];
    var aktif = -1;
    var kini = -1;   // posisi pil saat ini

    MENU.forEach(function (m, i) {
      var item = document.createElement('div');
      item.className = 'nav-item';
      item.style.setProperty('--i', i);

      var a = document.createElement('a');
      a.className = 'nav-link';
      a.href = m.href;

      var ikon = document.createElement('span');
      ikon.className = 'nav-ikon';
      ikon.textContent = m.ikon;
      var label = document.createElement('span');
      label.textContent = m.label;
      a.appendChild(ikon);
      a.appendChild(label);

      if (manual ? manual === m.id : berkas === bersih(m.href)) {
        aktif = i;
        item.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }

      item.appendChild(a);
      nav.appendChild(item);
      butir.push({ item: item, a: a });

      a.addEventListener('click', function (e) {
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (kurangiGerak() || i === aktif) return;   // biarkan tautan bekerja normal
        e.preventDefault();
        try { sessionStorage.setItem(KUNCI_POSISI, String(i)); } catch (x) {}
        butir.forEach(function (b, j) { b.item.classList.toggle('active', j === i); });
        taruh(i, true);
        setTimeout(function () { location.href = a.href; }, JEDA_PINDAH);
      });
    });

    function taruh(idx, animasi) {
      kini = idx;
      if (idx < 0) { indikator.style.opacity = '0'; return; }
      var it = butir[idx].item;
      if (!animasi) indikator.style.transition = 'none';
      indikator.style.width = it.offsetWidth + 'px';
      indikator.style.transform = 'translateX(' + it.offsetLeft + 'px)';
      indikator.style.opacity = '1';
      if (!animasi) {
        void indikator.offsetWidth;          // paksa render sebelum transisi dinyalakan lagi
        indikator.style.transition = '';
      }
    }

    // Mulai dari posisi menu sebelumnya (kalau ada), lalu meluncur ke menu aktif
    var awal = aktif;
    try {
      var tersimpan = parseInt(sessionStorage.getItem(KUNCI_POSISI), 10);
      if (aktif >= 0 && tersimpan >= 0 && tersimpan < MENU.length) awal = tersimpan;
    } catch (x) {}

    if (kurangiGerak() || awal === aktif) {
      taruh(aktif, false);
    } else {
      taruh(awal, false);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { taruh(aktif, true); });
      });
    }
    try { sessionStorage.setItem(KUNCI_POSISI, String(aktif)); } catch (x) {}

    var susun = function () { taruh(kini, false); };
    window.addEventListener('resize', susun);
    window.addEventListener('load', susun);
    window.addEventListener('pageshow', function (e) {
      if (e.persisted) {   // kembali lewat tombol Back: pil harus ikut menu aktif halaman ini
        butir.forEach(function (b, j) { b.item.classList.toggle('active', j === aktif); });
        taruh(aktif, false);
      }
    });
  }

  function mulai() {
    sesuaikanKembali();
    pasang();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mulai);
  } else {
    mulai();
  }
})();