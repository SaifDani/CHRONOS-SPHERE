const KUNCI = 'chronos_misi_v1';
const MISI = [
  { ikon:'🗺️', judul:'Lost Map', penuh:'Misi 1 – Lost Map (Peta Migrasi)', tag:'Technology & Mathematics', xp:100, tipe:'peta',
    // Pin: [huruf, top%, left%]. Geser angka ini agar pas dengan gambar petamu.
    peta:{ gambar:'map-uji-coba.jpeg', pin:[['A',20,64],['B',42,60],['C',60,50]] },
    tanya:'Susun jalur perpindahan manusia berdasarkan informasi yang tersedia.',
    opsi:['A → B → C','A → C → B','B → A → C'], benar:0,
    petunjuk:'Pelaut zaman dulu belum punya kompas modern, jadi mereka berlayar dari pulau ke pulau terdekat dan jarang melompati jarak yang jauh. Amati letak A, B, dan C di peta, lalu bandingkan jarak antar titik. Titik mana yang paling logis jadi persinggahan pertama, dan mana yang baru dicapai belakangan?',
    caption:'Siswa menentukan jalur migrasi berdasarkan peta, jarak, dan kondisi geografis (Technology & Mathematics).',
    jelas:'Menurut teori Out of Taiwan, penutur Austronesia bergerak dari Taiwan ke Filipina, lalu menyebar ke pulau-pulau Nusantara kira-kira 4.000 tahun lalu.',
    bukti:'🗺️ Peta jalur Austronesia' },
  { ikon:'⛏️', judul:'Archaeology Lab', penuh:'Misi 2 – Archaeology Lab', tag:'Science', xp:100, tipe:'lab',
    caption:'Mengamati dan menganalisis artefak, fosil, dan situs arkeologi (Science).',
    jelas:'Kamu sudah memindai, mengamati, menganalisis, dan mengklasifikasikan keempat temuan. Begitulah cara arkeolog bekerja: mulai dari pengamatan teliti, bukan dari dugaan.',
    bukti:'🦴 Catatan laboratorium arkeologi' },
  { ikon:'🔎', judul:'History Detective', penuh:'Misi 3 – History Detective', tag:'Science & Mathematics', xp:100, tipe:'detektif', toleransi:2,
    cerita:'Kata untuk "mata" nyaris sama di Melayu, Tagalog, dan Maori. Menarik, tapi satu petunjuk belum menyelesaikan kasus. Saring Kartu Bukti, rangkai buktimu, lalu uji seberapa kuat hipotesisnya.',
    caption:'Mencocokkan bukti, informasi, dan hipotesis. Terdapat peringatan bahwa satu bukti saja tidak cukup (Science + Mathematics).',
    jelas:'Kemiripan kata "mata" hanyalah satu petunjuk. Hipotesis menjadi kuat bila bahasa, artefak, genetika, dan peta persebaran saling menguatkan. Fosil Wajak juga mengingatkan bahwa Nusantara sudah dihuni jauh sebelum penutur Austronesia datang.',
    bukti:'🗣️ Data perbandingan bahasa' },
  { ikon:'🧭', judul:'Digital Explorer', penuh:'Misi 4 – Digital Explorer', tag:'Technology', xp:100, tipe:'ekspedisi', toleransi:3,
    caption:'Menjelajahi peta digital dan menemukan situs sejarah (Technology).',
    jelas:'Kamu sudah membaca peta digital, menyusun urutan waktu, dan memakai koordinat seperti penjelajah sungguhan. Peta, garis lintang, dan garis bujur membantu arkeolog menemukan dan mencatat situs dengan tepat.',
    bukti:'📍 Paspor situs sejarah Indonesia' },
  { ikon:'🛠️', judul:'Voyage Challenge', penuh:'Misi 5 – Voyage Challenge (Perahu Antarpulau)', tag:'Engineering', xp:100, tipe:'perahu', toleransi:2,
    cerita:'Berlayar antarpulau butuh perahu yang ringan, stabil, dan kuat. Kerjakan seperti insinyur: Design, Build, Test, lalu Improve sampai perahumu layak berlayar.',
    caption:'Merancang alat transportasi antarpulau dan mengujinya (Engineering).',
    jelas:'Kamu sudah menjalani siklus rekayasa: merancang, membangun, menguji, lalu memperbaiki. Cadik yang ringan dan mengapung menjaga perahu tidak terbalik, lambung yang kuat memuat bekal, tali mengikat tanpa paku, dan layar anyaman daun menangkap angin. Insinyur selalu menguji rancangannya dan memperbaiki bagian yang lemah.',
    bukti:'⛵ Rancangan perahu bercadik' },
  { ikon:'📈', judul:'Data Hunter', tag:'Mathematics', xp:100, tipe:'pilih',
    data:[['A → B',500],['B → C',750],['C → D',1000],['D → E',1250]],
    cerita:'Kamu mencatat jarak tiap etape perjalanan kelompok migran.',
    tanya:'Berapa total jarak dari A sampai E?',
    opsi:['2.500 km','3.000 km','3.500 km','4.000 km'], benar:2,
    jelas:'500 + 750 + 1.000 + 1.250 = 3.500 km. Grafik batang membantu membandingkan tiap etape sekilas.',
    bukti:'📊 Grafik jarak perjalanan' },
  { ikon:'🧩', judul:'Migration Puzzle', tag:'Integrasi STEM', xp:100, tipe:'urut',
    cerita:'Sejarawan bekerja dengan alur berpikir yang runtut, dari bukti sampai kesimpulan.',
    tanya:'Susun urutan proses bernalar secara sejarah.',
    item:['Bukti','Data','Analisis','Hipotesis','Argumentasi','Kesimpulan'],
    jelas:'Kesimpulan kuat berdiri di atas bukti dan data yang dianalisis, bukan tebakan.',
    bukti:'🧩 Alur bernalar sejarah' },
  { ikon:'🏁', judul:'Final Mission: The Last Evidence', tag:'Semua kemampuan STEM', xp:100, tipe:'pilih',
    cerita:'Sebuah alat batu serpih ditemukan di gua pada pulau yang belum pernah diteliti.',
    tanya:'Apa langkah terkuat sebelum menyimpulkan siapa pembuatnya?',
    opsi:['Langsung menyimpulkan itu buatan Homo sapiens','Catat lokasi dan lapisan, tentukan usianya, lalu bandingkan dengan fosil, bahasa, dan genetika','Pilih satu teori favorit lalu cari bukti yang cocok saja','Simpan alat itu tanpa mencatat apa pun'], benar:1,
    jelas:'Kesimpulan yang kuat memakai banyak bukti yang saling menguatkan, dan tetap terbuka jika ada temuan baru.',
    bukti:'🔍 Kasus alat batu serpih' }
];
const LENCANA = {1:['⛏️','Archaeologist'],2:['🔎','History Detective'],3:['🧭','Digital Explorer'],4:['🛠️','Young Engineer'],5:['📈','Data Analyst']};
const TOTAL = MISI.length * 100;

let S = { i:0, xp:{}, bukti:[], ref:['',''], akhir:false };
try { Object.assign(S, JSON.parse(localStorage.getItem(KUNCI)) || {}); } catch (e) {}
const simpan = () => { try { localStorage.setItem(KUNCI, JSON.stringify(S)); } catch (e) {} };
const $ = id => document.getElementById(id);
const selesai = () => Object.keys(S.xp).length;
const totalXP = () => Object.values(S.xp).reduce((a, b) => a + b, 0);

try { const n = (JSON.parse(localStorage.getItem('chronos_kuis_v1')) || {}).nama; if (n) $('pNama').textContent = n; } catch (e) {}

let salah = 0, pilihan = [], urutan = [], ditolak = [];   // keadaan misi yang sedang dikerjakan

function acak(a) {
  let b;
  do { b = a.slice().sort(() => Math.random() - .5); } while (a.length > 1 && b.join() === a.join());
  return b;
}

function renderAtas() {
  $('pXP').textContent = totalXP() + ' / ' + TOTAL + ' XP';
  $('xpBar').style.width = (totalXP() / TOTAL * 100) + '%';
  $('rail').innerHTML = '';
  MISI.forEach((m, k) => {
    const b = document.createElement('button');
    b.className = 'm-node' + (S.xp[k] != null ? ' done' : '') + (!S.akhir && k === S.i ? ' now' : '');
    b.textContent = k + 1;
    b.title = m.judul;
    b.setAttribute('aria-label', 'Misi ' + (k + 1) + ': ' + m.judul);
    b.disabled = k > selesai();
    b.onclick = () => { S.i = k; S.akhir = false; simpan(); mulai(); };
    $('rail').appendChild(b);
  });
  const t = document.createElement('button');
  t.className = 'm-node' + (S.akhir ? ' now' : '');
  t.textContent = '🏆'; t.title = 'Hasil akhir'; t.setAttribute('aria-label', 'Hasil akhir');
  t.disabled = selesai() < MISI.length;
  t.onclick = () => { S.akhir = true; simpan(); mulai(); };
  $('rail').appendChild(t);

  $('bag').innerHTML = S.bukti.length
    ? S.bukti.map(x => '<span class="b">' + x + '</span>').join('')
    : '<p>Kosong. Selesaikan misi untuk mengumpulkan bukti.</p>';
}

function mulai() { salah = 0; pilihan = []; urutan = []; ditolak = []; lab = { sel:-1, step:0, hot:[], msg:'' }; det = baruDet(); ex = baruEx(); vy = baruVy(); render(); }

function render() {
  renderAtas();
  if (S.akhir) return renderAkhir();
  const m = MISI[S.i], sudah = S.xp[S.i] != null;
  let h = m.penuh ? '<h2>' + m.penuh + '</h2>' + (m.cerita ? '<p class="m-cerita">' + m.cerita + '</p>' : '') :
          '<span class="m-tag">' + m.tag + '</span><h2>' + m.ikon + ' Misi ' + (S.i + 1) + ': ' + m.judul + '</h2>' +
          '<p class="m-cerita">' + m.cerita + '</p>';
  if (m.data) {
    const mx = Math.max(...m.data.map(d => d[1]));
    h += '<table class="m-data"><tr><th>Etape</th><th>Jarak</th><th></th></tr>' +
      m.data.map(d => '<tr><td>' + d[0] + '</td><td>' + d[1].toLocaleString('id-ID') + ' km</td><td style="width:40%"><div class="bar" style="width:' + (d[1] / mx * 100) + '%"></div></td></tr>').join('') + '</table>';
  }
  h += (m.tipe === 'peta' || m.tipe === 'lab' || m.tipe === 'detektif' || m.tipe === 'ekspedisi' || m.tipe === 'perahu' ? '' : '<p class="m-tanya">' + m.tanya + '</p>') + '<div id="area"></div><div id="fb"></div><div id="aksi"></div>' +
       (m.caption ? '<p class="m-cap">' + m.caption + '</p>' : '');
  $('stage').innerHTML = h;
  if (sudah) { if (m.tipe === 'peta') gambarPeta(m); if (m.tipe === 'lab') { S.labDone = [0,1,2,3]; gambarLab(m); } if (m.tipe === 'detektif') { det = selesaiDet(); gambarDet(m); } if (m.tipe === 'ekspedisi') { ex = selesaiEx(); gambarEx(m); } if (m.tipe === 'perahu') { vy = selesaiVy(); gambarVy(m); } return tampilBenar(m); }
  if (m.tipe === 'urut') { urutan = []; m._pool = m._pool || acak(m.item); }
  gambarArea();
}

function gambarArea() {
  const m = MISI[S.i], a = $('area');
  if (m.tipe === 'peta') return gambarPeta(m);
  if (m.tipe === 'lab') return gambarLab(m);
  if (m.tipe === 'detektif') return gambarDet(m);
  if (m.tipe === 'ekspedisi') return gambarEx(m);
  if (m.tipe === 'perahu') return gambarVy(m);
  if (m.tipe === 'urut') {
    a.innerHTML = '<div class="slots">' + m.item.map((_, k) =>
      '<button class="slot' + (urutan[k] != null ? ' isi' : '') + '" data-k="' + k + '">' + (urutan[k] != null ? urutan[k] : '') + '</button>').join('') +
      '</div><div class="pool">' + m._pool.map((t, k) =>
      '<button class="chip" data-t="' + t + '"' + (urutan.includes(t) ? ' disabled' : '') + '>' + t + '</button>').join('') + '</div>';
    a.querySelectorAll('.chip').forEach(c => c.onclick = () => { urutan.push(c.dataset.t); gambarArea(); });
    a.querySelectorAll('.slot.isi').forEach(s => s.onclick = () => { urutan.splice(+s.dataset.k, 1); gambarArea(); });
    $('aksi').innerHTML = '<button class="m-btn" id="cek"' + (urutan.length < m.item.length ? ' disabled style="opacity:.5"' : '') + '>Cek jawaban</button>';
    $('cek').onclick = () => periksa(urutan.join() === m.item.join());
  } else {
    a.innerHTML = '<div class="m-opsi">' + m.opsi.map((o, k) =>
      '<button class="opt' + (pilihan.includes(k) ? ' pilih' : '') + '" data-k="' + k + '">' + o + '</button>').join('') + '</div>';
    a.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const k = +b.dataset.k;
      if (m.tipe === 'pilih') { pilihan = [k]; return periksa(k === m.benar); }
      pilihan = pilihan.includes(k) ? pilihan.filter(x => x !== k) : pilihan.concat(k);
      gambarArea();
    });
    $('aksi').innerHTML = m.tipe === 'multi' ? '<button class="m-btn" id="cek">Cek jawaban</button>' : '';
    if (m.tipe === 'multi') $('cek').onclick = () =>
      periksa(pilihan.length === m.benar.length && m.benar.every(x => pilihan.includes(x)));
  }
}

/* ===== Misi 2: Archaeology Lab ===== */
const SV = (() => {
  const D = '<defs><filter id="rg" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".05" numOctaves="3" seed="3" result="t"/><feDisplacementMap in="SourceGraphic" in2="t" scale="4"/></filter>' +
    '<filter id="tx"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .45 0 0 0 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>' +
    '<linearGradient id="gB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#cfc8ba"/><stop offset=".55" stop-color="#8d8577"/><stop offset="1" stop-color="#554e43"/></linearGradient>' +
    '<linearGradient id="gF" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f1e6c6"/><stop offset=".55" stop-color="#c9b27f"/><stop offset="1" stop-color="#8f7a4a"/></linearGradient>' +
    '<linearGradient id="gG" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e8a475"/><stop offset=".5" stop-color="#b3633a"/><stop offset="1" stop-color="#6e3818"/></linearGradient>' +
    '<linearGradient id="gS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9ad3ee"/><stop offset="1" stop-color="#d7eef7"/></linearGradient></defs>';
  const batu = 'M52 6C68 22 78 44 70 66C66 80 58 90 48 90C36 88 28 74 30 56C32 36 42 14 52 6Z';
  const fosil = 'M50 8C74 8 88 26 86 46C85 56 80 62 76 66L76 78C76 84 70 88 64 88H36C30 88 24 84 24 78L24 66C20 62 15 56 14 46C12 26 26 8 50 8Z';
  const pot = 'M30 22H70C70 30 68 34 72 42C80 56 78 78 66 88H34C22 78 20 56 28 42C32 34 30 30 30 22Z';
  return {
    batu: D + '<ellipse cx="50" cy="92" rx="26" ry="5" fill="#000" opacity=".35"/><path d="' + batu + '" fill="url(#gB)" filter="url(#rg)"/><path d="' + batu + '" fill="#000" filter="url(#tx)"/>' +
      '<path d="M44 30Q52 38 46 52M56 24Q66 40 60 60M40 62Q50 70 46 82" stroke="#4a443b" stroke-width="1.6" fill="none" opacity=".7"/><path d="M52 10C60 24 66 40 64 56" stroke="#fff" stroke-width="1.5" opacity=".35" fill="none"/>',
    fosil: D + '<ellipse cx="50" cy="93" rx="30" ry="4" fill="#000" opacity=".35"/><path d="' + fosil + '" fill="url(#gF)" filter="url(#rg)"/><path d="' + fosil + '" fill="#000" filter="url(#tx)"/>' +
      '<path d="M22 40Q50 30 78 40" stroke="#6e5a33" stroke-width="5" fill="none" stroke-linecap="round"/><ellipse cx="36" cy="49" rx="8" ry="7" fill="#2b2112"/><ellipse cx="64" cy="49" rx="8" ry="7" fill="#2b2112"/><path d="M50 55L45 69H55Z" fill="#2b2112"/>' +
      '<rect x="34" y="74" width="32" height="9" rx="2" fill="#f4ecd4" stroke="#6e5a33"/><path d="M42 74V83M50 74V83M58 74V83" stroke="#6e5a33"/><path d="M50 8L46 22L54 32L48 40M80 30L70 38L74 48" stroke="#5b4826" stroke-width="1.3" fill="none"/>',
    gerabah: D + '<ellipse cx="50" cy="92" rx="26" ry="4" fill="#000" opacity=".35"/><path d="' + pot + '" fill="url(#gG)" filter="url(#rg)"/><path d="' + pot + '" fill="#000" filter="url(#tx)"/>' +
      '<ellipse cx="50" cy="22" rx="21" ry="6" fill="#8a4a26"/><ellipse cx="50" cy="22" rx="17" ry="4" fill="#3a1d0c"/><path d="M26 48Q50 56 74 48M25 60Q50 68 75 60" stroke="#5a2c12" stroke-width="2.4" fill="none"/>' +
      '<path d="M27 74l5-5 5 5 5-5 5 5 5-5 5 5 5-5 5 5 5-5 5 5" stroke="#3a1d0c" stroke-width="1.8" fill="none"/><path d="M34 34C30 48 30 64 38 80" stroke="#fff" opacity=".3" stroke-width="3" fill="none"/>',
    situs: D + '<rect width="100" height="100" rx="8" fill="url(#gS)"/><rect y="14" width="100" height="86" fill="#6b4f32"/><rect y="12" width="100" height="5" fill="#4f8a3a"/><rect y="30" width="100" height="18" fill="#8d6a44"/><rect y="48" width="100" height="18" fill="#a98458"/><rect y="66" width="100" height="34" fill="#7a5836"/>' +
      '<rect width="100" height="100" fill="#000" filter="url(#tx)" opacity=".6"/><rect x="36" y="36" width="28" height="26" fill="#2a1a0c" opacity=".6"/><path d="M8 36H92M8 62H92M36 36V90M64 36V90" stroke="#f1c453" stroke-width="1.4" stroke-dasharray="3 2" fill="none"/>' +
      '<path d="M42 54Q50 46 58 54" stroke="#efe3c2" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="58" cy="54" r="3" fill="#efe3c2"/><path d="M80 12V4L90 8L80 10" fill="#d8232a" stroke="#d8232a"/>'
  };
})();
function gbr(x, big) {   // gambar temuan: foto di img/ kalau ada, kalau tidak ada pakai ilustrasi SVG
  return '<span class="lb-gbr' + (big ? ' big' : '') + '"><svg viewBox="0 0 100 100" role="img" aria-label="' + x.nama + '">' + x.svg + '</svg>' +
         '<img class="lb-foto" src="' + x.foto + '" alt="" onerror="this.remove()"></span>';
}
const JENIS = ['Buatan manusia','Sisa makhluk hidup','Lokasi temuan'];
const LAB = [
  { nama:'Alat Batu', foto:'img/alat-batu.jpg', jenis:0, hot:[[50,24,'Tepi tajam hasil pemangkasan: dibuat dengan sengaja.'],[50,72,'Permukaan masih kasar: belum diasah atau dihaluskan.']],
    tanya:'Alat ini dipangkas kasar dan belum diasah. Perkiraan tahap budayanya?', opsi:['Paleolitikum (batu tua)','Neolitikum (batu muda)','Zaman logam'], benar:0,
    svg:SV.batu },
  { nama:'Fosil', foto:'img/fosil.jpg', jenis:1, hot:[[50,30,'Tulang sudah mengeras seperti batu (mineralisasi).'],[50,72,'Bentuk rahang dan gigi menunjukkan jenis makhluk hidupnya.']],
    tanya:'Bagaimana tulang ini bisa awet sampai jutaan tahun?', opsi:['Terkubur cepat, lalu mineral menggantikan jaringan tulang','Diawetkan manusia purba dengan balsam','Dibekukan terus-menerus'], benar:0,
    svg:SV.fosil },
  { nama:'Artefak', foto:'img/artefak.jpg', jenis:0, hot:[[50,52,'Pola goresan: hiasan buatan tangan manusia.'],[50,30,'Tanah liat yang dibakar: pembuatnya sudah menguasai api.']],
    tanya:'Gerabah seperti ini menunjukkan bahwa pembuatnya sudah...', opsi:['Hidup menetap dan menyimpan bahan makanan','Hanya berburu dan berpindah-pindah','Belum mengenal api'], benar:0,
    svg:SV.gerabah },
  { nama:'Situs', foto:'img/situs.jpg', jenis:2, hot:[[50,22,'Lapisan tanah bertumpuk: lapisan bawah umumnya lebih tua.'],[50,54,'Kotak galian: posisi tiap temuan dicatat dengan teliti.']],
    tanya:'Mengapa posisi temuan di situs harus dicatat?', opsi:['Agar konteks lapisan dan lokasi bisa dipakai menafsirkan usia temuan','Agar temuan mudah dipindahkan','Agar situs cepat ditutup kembali'], benar:0,
    svg:SV.situs }
];
let lab = { sel:-1, step:0, hot:[], msg:'' };

function gambarLab(m) {
  S.labDone = S.labDone || [];
  const a = lab.sel >= 0 ? LAB[lab.sel] : null, selesaiMisi = S.xp[S.i] != null;
  const kiri = lab.step === 0
    ? '<p class="lb-judul">Pilih artefak untuk dianalisis!</p><div class="lb-grid">' + LAB.map((x, i) =>
        '<button class="lb-kartu' + (i === lab.sel ? ' pilih' : '') + (S.labDone.includes(i) ? ' ok' : '') + '" data-i="' + i + '"' + (selesaiMisi ? ' disabled' : '') +
        '>' + gbr(x) + '<span>' + x.nama + '</span></button>').join('') + '</div>'
    : '<p class="lb-judul">' + a.nama + '</p><div class="lb-zoom' + (lab.step === 1 ? ' scan' : '') + '">' + gbr(a, 1) +
      (lab.step >= 2 ? a.hot.map((h, k) => '<button class="lb-hot' + (lab.hot.includes(k) ? ' on' : '') + '" style="left:' + h[0] + '%;top:' + h[1] + '%" data-k="' + k + '" aria-label="Titik pengamatan ' + (k + 1) + '">' + (k + 1) + '</button>').join('') : '') + '</div>';
  const nm = ['Scan', 'Observe', 'Analyze', 'Classify'];
  let isi = '';
  if (lab.step === 0) isi = '<p class="lb-info">' + (a ? 'Siap menganalisis ' + a.nama + '.' : 'Pilih satu temuan dulu.') + ' Selesai: ' + S.labDone.length + '/4</p><button class="pbtn gold" id="lbMulai"' + (a && !selesaiMisi ? '' : ' disabled') + '>Lihat Bukti</button>';
  if (lab.step === 1) isi = '<p class="lb-info">Memindai ' + a.nama + '…</p>';
  if (lab.step === 2) isi = '<p class="lb-info">Ketuk titik bercahaya pada gambar (' + lab.hot.length + '/' + a.hot.length + ').</p><ul class="lb-temuan">' +
      lab.hot.map(k => '<li>' + a.hot[k][2] + '</li>').join('') + '</ul>' +
      (lab.hot.length === a.hot.length ? '<button class="pbtn gold" id="lbLanjut">Lanjut analisis</button>' : '');
  if (lab.step === 3 || lab.step === 4) {
    const opsi = lab.step === 3 ? a.opsi : JENIS;
    isi = '<p class="lb-info"><b>' + (lab.step === 3 ? a.tanya : 'Klasifikasi: temuan ini termasuk jenis apa?') + '</b></p><div class="m-opsi">' +
      opsi.map((o, k) => '<button class="opt" data-k="' + k + '">' + o + '</button>').join('') + '</div>';
  }
  if (lab.step === 5) isi = '<p class="lb-info">✅ ' + a.nama + ' selesai dicatat sebagai <b>' + JENIS[a.jenis] + '</b>.</p><button class="pbtn gold" id="lbLagi">Pilih temuan lain</button>';
  $('area').innerHTML = '<div class="peta"><div class="lb-kiri">' + kiri + '</div><div class="lb-kanan"><p class="lb-judul">Proses Investigasi</p><ol class="lb-steps">' +
    nm.map((s, k) => '<li class="' + (lab.step === k + 1 ? 'now' : (lab.step > k + 1 ? 'done' : '')) + '">' + s + '</li>').join('') + '</ol>' + isi +
    (lab.msg ? '<p class="lb-msg">' + lab.msg + '</p>' : '') + '</div></div>';
  const A = $('area');
  A.querySelectorAll('.lb-kartu').forEach(b => b.onclick = () => { lab.sel = +b.dataset.i; gambarLab(m); });
  A.querySelectorAll('.lb-hot').forEach(b => b.onclick = () => { if (!lab.hot.includes(+b.dataset.k)) lab.hot.push(+b.dataset.k); gambarLab(m); });
  const klik = (id, f) => { const e = $(id); if (e) e.onclick = f; };
  klik('lbMulai', () => { lab.step = 1; lab.hot = []; lab.msg = ''; gambarLab(m); setTimeout(() => { if (lab.step === 1) { lab.step = 2; gambarLab(m); } }, 1500); });
  klik('lbLanjut', () => { lab.step = 3; lab.msg = ''; gambarLab(m); });
  klik('lbLagi', () => { lab = { sel:-1, step:0, hot:[], msg:'' }; gambarLab(m); });
  A.querySelectorAll('.lb-kanan .opt').forEach(b => b.onclick = () => {
    const k = +b.dataset.k, benar = lab.step === 3 ? k === a.benar : k === a.jenis;
    if (!benar) { salah++; b.classList.add('salah'); b.disabled = true; lab.msg = 'Belum tepat. Baca lagi temuanmu, lalu coba lagi. XP misi jadi setengah.'; return gambarLabKeepOpts(m, b); }
    lab.msg = '';
    if (lab.step === 3) { lab.step = 4; return gambarLab(m); }
    if (!S.labDone.includes(lab.sel)) S.labDone.push(lab.sel);
    simpan();
    if (S.labDone.length === LAB.length) { lab.step = 5; gambarLab(m); return periksa(true); }
    lab.step = 5; gambarLab(m);
  });
}
function gambarLabKeepOpts(m, b) {   // tampilkan pesan salah tanpa menghapus pilihan yang sudah dicoret
  const p = b.closest('.lb-kanan'); let e = p.querySelector('.lb-msg');
  if (!e) { e = document.createElement('p'); e.className = 'lb-msg'; p.appendChild(e); }
  e.textContent = lab.msg;
}

/* ===== Misi 3: History Detective ===== */
/* Alur: (1) Saring bukti -> (2) Pasangkan Bukti-Informasi-Hipotesis -> (3) Uji silang (hitung + kesimpulan).
   Semua isi (bukti, informasi, hipotesis, poin) ada di BUKTI / HIP / VERDIK di bawah ini, jadi mudah kamu ubah. */
const NYAWA = 5;                        // kredibilitas detektif; habis = fase itu diulang
const SYARAT = { jenis:3, poin:50 };    // hipotesis "kuat" bila didukung >= 3 jenis bukti dan >= 50 poin

const HIP = [
  { nama:'Gelombang awal', ikon:'🌅', teks:'Manusia modern sudah menghuni Nusantara puluhan ribu tahun lalu, jauh sebelum penutur Austronesia.' },
  { nama:'Gelombang Austronesia', ikon:'⛵', teks:'Penutur Austronesia dari Taiwan menyebar lewat laut ke Filipina dan Nusantara sekitar 4.000 tahun lalu.' },
  { nama:'Satu gelombang tunggal', ikon:'☝️', teks:'Semua penduduk Nusantara berasal dari satu kelompok yang datang sekali saja, tanpa percampuran.',
    tolak:'Jejak percampuran beberapa kelompok leluhur membuat gagasan satu gelombang tunggal sulit dipertahankan.' }
];

/* info: [teks, indeks hipotesis yang cocok (-1 = jebakan), umpan balik jika salah, poin dukungan] */
const BUKTI = [
  { nama:'Artefak', sah:true, gbr:() => gbr(LAB[2]),
    sumber:'Penggalian situs pesisir, dilaporkan arkeolog',
    temuan:['Gerabah berlapis tanah merah dan beliung persegi ditemukan di situs pesisir Sulawesi dan Kalimantan.','Bentuk dan cara pembuatannya mirip temuan di Filipina dan Taiwan.','Penanggalan: sekitar 3.500 sampai 4.000 tahun lalu.'],
    alasan:'Berasal dari penggalian, punya penanggalan terukur, dan bisa diperiksa ulang.',
    info:[
      ['Gerabah dan beliung bergaya mirip temuan di Filipina dan Taiwan, berusia sekitar 4.000 tahun', 1, '', 15],
      ['Dibuat oleh Homo erectus jutaan tahun lalu', -1, 'Penanggalan pada catatan lup menyebut sekitar 4.000 tahun, bukan jutaan.'],
      ['Gaya dan bahannya tidak berkaitan dengan daerah lain mana pun', -1, 'Catatan lup menyebut kemiripan dengan temuan di Filipina dan Taiwan.'],
      ['Hanya benda hias zaman modern', -1, 'Lapisan tanah dan penanggalan menunjukkan benda ini sangat tua.']
    ] },
  { nama:'Fosil', sah:true, gbr:() => gbr(LAB[1]),
    sumber:'Tengkorak Wajak, Tulungagung, ditemukan 1888 dan diteliti ulang ilmuwan',
    temuan:['Tengkorak manusia modern (Homo sapiens) purba dari Tulungagung.','Penanggalan: puluhan ribu tahun lalu.','Usianya jauh lebih tua daripada gerabah di situs pesisir.'],
    alasan:'Fosil asli yang disimpan dan diteliti ulang dengan metode penanggalan.',
    info:[
      ['Homo sapiens purba berusia puluhan ribu tahun, jauh lebih tua daripada gerabah tadi', 0, '', 20],
      ['Sisa hewan peliharaan penutur Austronesia', -1, 'Catatan lup menyebut tengkorak manusia, bukan hewan.'],
      ['Berusia sekitar 500 tahun', -1, 'Penanggalan pada catatan memberi angka puluhan ribu tahun.'],
      ['Bukti langsung bahwa penutur Austronesia tiba 4.000 tahun lalu', -1, 'Usia fosil ini jauh lebih tua daripada 4.000 tahun, jadi bukan itu yang ditunjukkannya.']
    ] },
  { nama:'Bahasa', sah:true,
    svg:'<rect width="100" height="100" rx="10" fill="#12304f"/><rect x="10" y="20" width="80" height="46" rx="12" fill="#f1c453"/><path d="M30 66L24 86L50 66Z" fill="#f1c453"/><text x="50" y="52" text-anchor="middle" font-family="Cinzel,serif" font-size="25" font-weight="800" fill="#1a1203">mata</text>',
    sumber:'Perbandingan kosakata oleh ahli linguistik',
    temuan:['"mata" sama dalam bahasa Melayu dan Tagalog, dan nyaris sama dalam bahasa Maori.','"lima" sama dalam Melayu dan Tagalog, dan "rima" dalam Maori.','Pola serupa muncul pada banyak kata dasar dari Taiwan sampai Pasifik.'],
    alasan:'Kosakata dasar bisa dibandingkan satu per satu dan diperiksa siapa pun.',
    info:[
      ['Kosakata dasar seperti mata dan lima serupa dari Taiwan hingga Pasifik, tanda satu rumpun Austronesia', 1, '', 20],
      ['Kemiripan itu hanya kebetulan bunyi', -1, 'Kemiripan muncul pada banyak kata dasar di banyak tempat. Kebetulan sulit menjelaskan pola sebanyak itu.'],
      ['Kata-kata itu dibawa pedagang Eropa', -1, 'Kosakata dasar itu sudah dipakai jauh sebelum pelayaran bangsa Eropa.'],
      ['Bukti bahwa Homo erectus sudah berbicara', -1, 'Catatan membahas bahasa penutur modern, bukan Homo erectus.']
    ] },
  { nama:'Genetika', sah:true,
    svg:'<rect width="100" height="100" rx="10" fill="#12304f"/><g stroke="#9fb6cf" stroke-width="2"><path d="M50 18L22 42M50 18L78 42M22 42L36 78M78 42L64 78M36 78L64 78M22 42L78 42M50 18L36 78M50 18L64 78"/></g><circle cx="50" cy="18" r="9" fill="#3ac6b8"/><circle cx="22" cy="42" r="8" fill="#f1c453"/><circle cx="78" cy="42" r="8" fill="#ef6f8c"/><circle cx="36" cy="78" r="8" fill="#5fcf8a"/><circle cx="64" cy="78" r="8" fill="#2f7ce8"/>',
    sumber:'Studi DNA populasi oleh tim peneliti genetika',
    temuan:['Banyak penduduk Indonesia bagian barat membawa jejak leluhur Asia Timur.','Penduduk Indonesia bagian timur membawa lebih banyak jejak leluhur Papua-Melanesia.','Dua jejak itu bercampur dalam banyak populasi.'],
    alasan:'Data DNA bisa diukur, dibandingkan antarpopulasi, dan diuji ulang oleh peneliti lain.',
    info:[
      ['Banyak penduduk Indonesia bagian barat membawa jejak leluhur Asia Timur yang datang bersama penutur Austronesia', 1, '', 15],
      ['Penduduk Indonesia bagian timur membawa jejak leluhur Papua-Melanesia yang sudah ada lebih awal', 0, '', 15],
      ['Semua orang Nusantara punya DNA yang identik', -1, 'Catatan lup menyebut adanya percampuran beberapa kelompok leluhur, jadi tidak identik.'],
      ['DNA tidak bisa dipakai untuk membaca sejarah manusia', -1, 'Justru jejak DNA dipakai untuk menelusuri asal-usul populasi.']
    ] },
  { nama:'Peta Persebaran', sah:true,
    svg:'<rect width="100" height="100" rx="10" fill="#1d5a86"/><path d="M12 22Q20 12 30 20T26 36Q14 38 12 22Z" fill="#6aa86a"/><path d="M34 44Q46 34 56 44T48 62Q34 60 34 44Z" fill="#7ab36f"/><path d="M58 70Q72 60 86 70T76 88Q60 86 58 70Z" fill="#6aa86a"/><path d="M26 32C34 40 42 42 48 50S62 62 72 72" stroke="#f1c453" stroke-width="2.5" stroke-dasharray="4 3" fill="none"/><circle cx="20" cy="26" r="5" fill="#d8232a" stroke="#fff" stroke-width="1.5"/><circle cx="46" cy="50" r="4" fill="#d8232a" stroke="#fff" stroke-width="1.5"/><circle cx="72" cy="74" r="4" fill="#d8232a" stroke="#fff" stroke-width="1.5"/>',
    sumber:'Pemetaan hasil penggalian dari banyak situs',
    temuan:['Situs bergerak dari Taiwan ke Filipina, lalu Sulawesi, Kalimantan, dan pulau-pulau Pasifik.','Semakin jauh dari Taiwan, semakin muda usia situs.','Situs berada di pesisir dan pulau.'],
    alasan:'Peta disusun dari data banyak situs yang masing-masing punya penanggalan.',
    info:[
      ['Semakin jauh dari Taiwan, semakin muda situsnya: pola penyebaran bertahap lewat laut', 1, '', 15],
      ['Semua situs berusia sama persis', -1, 'Catatan lup menyebut usia situs berbeda-beda menurut jaraknya.'],
      ['Situs hanya ada di pegunungan', -1, 'Catatan lup menyebut situs pesisir dan pulau.'],
      ['Peta membuktikan manusia tidak pernah berpindah', -1, 'Pola sebaran justru menunjukkan adanya perpindahan.']
    ] },
  { nama:'Postingan viral', sah:false,
    svg:'<rect width="100" height="100" rx="10" fill="#2b2f3a"/><rect x="30" y="12" width="40" height="76" rx="8" fill="#0b0f16" stroke="#9fb6cf" stroke-width="3"/><text x="50" y="60" text-anchor="middle" font-family="sans-serif" font-size="30" font-weight="800" fill="#ef6f8c">?!</text>',
    sumber:'Tidak jelas: tangkapan layar dari grup obrolan',
    temuan:['"Nenek moyang kita datang dari Atlantis, sudah terbukti dan dikonfirmasi!"','Tidak menyebut peneliti, lokasi penggalian, data, maupun usia.','Tidak ada cara untuk memeriksanya ulang.'],
    alasan:'Tanpa sumber, tanpa data, dan tidak bisa diperiksa, jadi bukan bukti sejarah.',
    info:[] }
];

const VERDIK = [
  { t:'Benar, bahasa paling mudah dibaca dan dibandingkan, jadi jenis bukti lain tidak perlu diperiksa lagi.', ok:false,
    fb:'Satu bukti bisa menyesatkan. Karena itu hipotesis diuji dengan beberapa jenis bukti yang saling menguatkan.' },
  { t:'Gelombang Austronesia paling kuat karena banyak jenis bukti saling menguatkan, tetapi gelombang awal juga nyata dan kesimpulan tetap terbuka untuk temuan baru.', ok:true },
  { t:'Fosil Wajak jauh lebih tua daripada gerabah, jadi hipotesis Austronesia pasti salah dan harus dibuang.', ok:false,
    fb:'Usia yang lebih tua tidak membatalkan gelombang yang datang belakangan. Keduanya bisa terjadi berurutan, lihat jejak genetika.' },
  { t:'Semua hipotesis sama kuatnya, jadi sejarawan tidak bisa menyimpulkan apa pun dari bukti yang ada.', ok:false,
    fb:'Perhatikan meteran: dukungannya jelas tidak sama. Menimbang kekuatan bukti adalah tugas sejarawan.' }
];

let det = null;

function baruDet() {
  return { fase:1, buka:-1, putus:{}, sel:-1, info:-1, hip:-1, rantai:[], nyawa:NYAWA, lup:2, sorot:null, combo:0, msg:'', tipe:'',
    ordK:acak(BUKTI.map((_, i) => i)), ordI:BUKTI.map(b => acak(b.info.map((_, i) => i))),
    q:0, qs:[[], []], vOrd:acak(VERDIK.map((_, i) => i)), hitung:null };
}
function selesaiDet() {   // keadaan "sudah selesai" untuk membuka kembali misi yang sudah dikerjakan
  const d = baruDet(); d.fase = 4; d.q = 2;
  BUKTI.forEach((b, i) => { d.putus[i] = b.sah ? 'simpan' : 'tolak'; b.info.forEach((o, k) => { if (o[1] >= 0) d.rantai.push({ b:i, o:k, h:o[1] }); }); });
  return d;
}
const perluRantai = () => BUKTI.reduce((n, b) => n + b.info.filter(o => o[1] >= 0).length, 0);
const poinHip = d => { const t = HIP.map(() => 0); d.rantai.forEach(r => t[r.h] += BUKTI[r.b].info[r.o][3]); return t; };
const ikon = b => b.gbr ? b.gbr() : '<svg viewBox="0 0 100 100" role="img" aria-label="' + b.nama + '">' + b.svg + '</svg>';
const pesan = d => d.msg ? '<div class="dt-msg ' + d.tipe + '" role="status">' + d.msg + '</div>' : '';
const gulir = () => { try { $('stage').scrollIntoView({ block:'start', behavior:matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth' }); } catch (e) {} };

function kurangiNyawa(d) {   // kembalikan true bila kredibilitas habis dan fase diulang
  d.nyawa--; d.combo = 0;
  if (d.nyawa > 0) return false;
  d.nyawa = NYAWA;
  if (d.fase === 1) { d.putus = {}; d.buka = -1; }
  else { d.rantai = []; d.sel = -1; d.info = -1; d.hip = -1; d.sorot = null; }
  d.tipe = 'no'; d.msg = '🛡️ Kredibilitasmu habis. Dewan Sejarah meminta fase ini diulang dari awal. Kamu masih bisa mendapat XP.';
  return true;
}

function hud(d, m) {
  const fs = ['Saring bukti', 'Pasangkan', 'Uji silang'];
  return '<div class="dt-hud"><ol class="dt-fase" aria-label="Tahap misi">' +
    fs.map((f, k) => '<li class="' + (d.fase === k + 1 ? 'now' : (d.fase > k + 1 ? 'done' : '')) + '"' + (d.fase === k + 1 ? ' aria-current="step"' : '') + '>' + f + '</li>').join('') + '</ol>' +
    '<div class="dt-nyawa" role="img" aria-label="Kredibilitas ' + d.nyawa + ' dari ' + NYAWA + '">🛡️ ' +
    Array.from({ length:NYAWA }, (_, k) => '<i class="' + (k < d.nyawa ? 'on' : '') + '"></i>').join('') + '</div>' +
    '<div class="dt-salah">Salah: <b>' + salah + '</b> (aman sampai ' + m.toleransi + ')</div></div>';
}

function kartuHtml(i, d) {
  const b = BUKTI[i], st = d.putus[i];
  return '<button class="dt-kartu' + (d.buka === i ? ' buka' : '') + (st ? ' ' + st : '') + '" data-i="' + i + '" aria-pressed="' + (d.buka === i) + '">' +
    '<span class="dt-gb">' + ikon(b) + '</span><span class="dt-nm">' + b.nama + '</span>' +
    (st === 'tolak' ? '<span class="dt-cap">DITOLAK</span>' : st === 'simpan' ? '<span class="dt-cap ok" aria-label="Disimpan">✓</span>' : '') + '</button>';
}

function faseSaring(d) {
  const b = d.buka >= 0 ? BUKTI[d.buka] : null, st = b ? d.putus[d.buka] : null;
  let lup = '<div class="dt-lup dt-kosong">🔍 Ketuk sebuah kartu untuk memeriksanya dengan lup. Tidak semua kartu layak dijadikan bukti.</div>';
  if (b) lup = '<div class="dt-lup"><p class="dt-lj">🔍 ' + b.nama + '</p><p class="dt-sumber"><b>Sumber:</b> ' + b.sumber + '</p><ul>' +
    b.temuan.map(t => '<li>' + t + '</li>').join('') + '</ul>' +
    (st ? '<p class="dt-alasan ' + st + '">' + (st === 'simpan' ? '✅ Disimpan. ' : '🚫 Ditolak. ') + b.alasan + '</p>'
        : pesan(d) + '<div class="dt-aksi"><button class="dt-b ok" id="dtSimpan">✅ Simpan sebagai bukti</button><button class="dt-b no" id="dtTolak">🚫 Tolak</button></div>') + '</div>';
  const n = Object.keys(d.putus).length;
  return '<div class="dt-bingkai"><p class="dt-judul">KARTU BUKTI</p><div class="dt-grid">' + d.ordK.map(i => kartuHtml(i, d)).join('') + '</div></div>' + lup +
    '<p class="dt-hit">Diperiksa: ' + n + ' dari ' + BUKTI.length + ' kartu</p>' +
    (b && !st ? '' : pesan(d)) +
    (n === BUKTI.length ? '<button class="m-btn" id="dtLanjut1">Mulai merangkai bukti</button>' : '');
}

function fasePasang(d) {
  const sahI = BUKTI.map((b, i) => i).filter(i => BUKTI[i].sah);
  const butuh = i => BUKTI[i].info.filter(o => o[1] >= 0).length, ada = i => d.rantai.filter(r => r.b === i).length;
  const k1 = sahI.map(i => '<button class="dt-it dt-bk' + (d.sel === i ? ' pilih' : '') + (ada(i) >= butuh(i) ? ' ok' : '') + '" data-b="' + i + '">' +
    '<span class="dt-gb s">' + ikon(BUKTI[i]) + '</span><span><b>' + BUKTI[i].nama + '</b><small>' + ada(i) + ' dari ' + butuh(i) + ' rangkaian</small></span></button>').join('');
  let k2 = '<p class="dt-ph">Pilih satu bukti di kolom kiri.</p>';
  if (d.sel >= 0) k2 = d.ordI[d.sel].map(o => {
    const op = BUKTI[d.sel].info[o], pakai = d.rantai.some(r => r.b === d.sel && r.o === o);
    const sorot = !pakai && d.sorot && d.sorot[0] === d.sel && d.sorot[1] === o;
    return '<button class="dt-it dt-in' + (d.info === o ? ' pilih' : '') + (pakai ? ' pakai' : '') + (sorot ? ' sorot' : '') + '" data-o="' + o + '"' + (pakai ? ' disabled' : '') + '>' + (pakai ? '✓ ' : '') + op[0] + '</button>';
  }).join('');
  const k3 = HIP.map((h, k) => '<button class="dt-it dt-hp' + (d.hip === k ? ' pilih' : '') + '" data-h="' + k + '"><span aria-hidden="true">' + h.ikon + '</span><span><b>' + h.nama + '</b><small>' + h.teks + '</small></span></button>').join('');
  const lengkap = d.rantai.length === perluRantai();
  const siap = d.sel >= 0 && d.info >= 0 && d.hip >= 0;
  const lupOk = d.lup > 0 && d.sel >= 0 && ada(d.sel) < butuh(d.sel);
  const cat = d.sel >= 0 ? '<div class="dt-catatan"><b>Catatan lup: ' + BUKTI[d.sel].nama + '</b><ul>' + BUKTI[d.sel].temuan.map(t => '<li>' + t + '</li>').join('') + '</ul></div>' : '';
  const rt = d.rantai.length ? '<p class="dt-cap2">Papan rangkaian (' + d.rantai.length + ' dari ' + perluRantai() + ')</p>' + rantaiHtml(d) : '';
  return '<p class="dt-bimb">Pasangkan bukti dengan hipotesis yang sesuai!</p>' +
    '<div class="dt-papan"><div class="dt-kol"><h4>BUKTI</h4><div class="dt-list">' + k1 + '</div></div><span class="dt-ar" aria-hidden="true">➜</span>' +
    '<div class="dt-kol"><h4>INFORMASI</h4><div class="dt-list">' + k2 + '</div></div><span class="dt-ar" aria-hidden="true">➜</span>' +
    '<div class="dt-kol"><h4>HIPOTESIS</h4><div class="dt-list">' + k3 + '</div></div></div>' +
    pesan(d) +
    '<div class="dt-kontrol"><button class="m-btn" id="dtRangkai"' + (siap ? '' : ' disabled style="opacity:.5"') + '>Rangkai</button>' +
    '<button class="m-btn alt" id="dtLup"' + (lupOk ? '' : ' disabled style="opacity:.5"') + '>💡 Lup petunjuk (' + d.lup + ')</button></div>' +
    cat + rt +
    (lengkap ? '<button class="m-btn" id="dtLanjut2">Uji silang bukti</button>' : '');
}

function rantaiHtml(d) {
  return '<ul class="dt-rantai">' + d.rantai.map(r => '<li><span class="dt-p b">' + BUKTI[r.b].nama + '</span><span aria-hidden="true">➜</span><span class="dt-p i">' + BUKTI[r.b].info[r.o][0] + '</span><span aria-hidden="true">➜</span><span class="dt-p h">' + HIP[r.h].nama + '</span></li>').join('') + '</ul>';
}

function meteran(d) {
  const t = poinHip(d), sum = t.reduce((a, b) => a + b, 0) || 1;
  return HIP.map((h, k) => {
    const jenis = new Set(d.rantai.filter(r => r.h === k).map(r => r.b)).size;
    const st = t[k] === 0 ? ['tolak', 'Tidak didukung'] : (jenis >= SYARAT.jenis && t[k] >= SYARAT.poin ? ['kuat', 'Kuat'] : ['cukup', 'Belum cukup kuat']);
    return '<div class="dt-bt ' + st[0] + '"><div class="dt-bt-h"><b>' + h.ikon + ' ' + h.nama + '</b><span class="dt-lb">' + st[1] + '</span></div>' +
      '<div class="dt-trk"><i style="width:' + Math.round(t[k] / sum * 100) + '%"></i></div><small>' + t[k] + ' poin dari ' + jenis + ' jenis bukti</small></div>';
  }).join('');
}

function bangunHitung(d) {   // soal hitung persen: dibuat dari poin hasil rangkaian siswa
  const t = poinHip(d), sum = t.reduce((a, b) => a + b, 0) || 1, pc = x => Math.round(x / sum * 100);
  const ok = pc(t[1]), maks = Math.max(...d.rantai.map(r => BUKTI[r.b].info[r.o][3]));
  const salahan = [pc(t[0]), pc(maks), 100, ok + 10, ok - 10].filter((v, i, a) => v !== ok && v > 0 && a.indexOf(v) === i).slice(0, 3);
  const daftar = d.rantai.filter(r => r.h === 1).map(r => BUKTI[r.b].info[r.o][3]);
  d.hitung = { ok:ok + '%', opts:acak([ok].concat(salahan).map(v => v + '%')),
    rumus:daftar.join(' + ') + ' = ' + t[1] + ' poin. Dibagi total ' + sum + ' poin, lalu dikali 100%: ' + ok + '%.' };
}

function faseUji(d) {
  const opts = (arr, sal) => '<div class="m-opsi">' + arr.map((o, k) => '<button class="opt' + (sal.includes(k) ? ' salah' : '') + '" data-k="' + k + '"' + (sal.includes(k) ? ' disabled' : '') + '>' + o + '</button>').join('') + '</div>';
  const q = d.q === 0
    ? '<p class="dt-qn">Tantangan 1 dari 2: hitung</p><p class="m-tanya">Berapa persen dari seluruh poin bukti yang mendukung "' + HIP[1].nama + '"?</p>' + opts(d.hitung.opts, d.qs[0])
    : '<p class="dt-qn">Tantangan 2 dari 2: kesimpulan</p><p class="m-tanya">Temanmu berkata: "Bahasa saja sudah cukup membuktikan semuanya!" Kesimpulan mana yang paling tepat?</p>' + opts(d.vOrd.map(i => VERDIK[i].t), d.qs[1]);
  return '<p class="dt-bimb">Uji silang: seberapa kuat tiap hipotesis?</p><div class="dt-meter">' + meteran(d) + '</div>' +
    '<p class="dt-catat">Poin ini simulasi untuk belajar, bukan angka ilmiah resmi.</p>' +
    '<div class="dt-awas">⚠️ <span><b>Peringatan:</b> satu bukti saja tidak cukup. Hipotesis dianggap kuat bila didukung minimal ' + SYARAT.jenis + ' jenis bukti dan ' + SYARAT.poin + ' poin.</span></div>' +
    pesan(d) + '<div class="dt-q">' + q + '</div>';
}

function faseAkhir(d) {
  return '<div class="dt-selesai"><span class="dt-stempel">KASUS TERPECAHKAN</span></div><div class="dt-meter">' + meteran(d) + '</div>' +
    '<p class="dt-cap2">Rangkaian buktimu</p>' + rantaiHtml(d);
}

function gambarDet(m) {
  const d = det;
  $('area').innerHTML = '<div class="dt">' + (d.fase < 4 ? hud(d, m) : '') + (d.fase === 1 ? faseSaring(d) : d.fase === 2 ? fasePasang(d) : d.fase === 3 ? faseUji(d) : faseAkhir(d)) + '</div>';
  ikatDet(m);
}

function ikatDet(m) {
  const d = det, A = $('area');
  const on = (s, f) => A.querySelectorAll(s).forEach(e => e.onclick = () => f(e));
  const un = (id, f) => { const e = $(id); if (e) e.onclick = f; };
  on('.dt-kartu', e => { d.buka = +e.dataset.i; d.msg = ''; gambarDet(m); });
  un('dtSimpan', () => putusDet(m, 'simpan'));
  un('dtTolak', () => putusDet(m, 'tolak'));
  un('dtLanjut1', () => { d.fase = 2; d.msg = ''; d.sel = BUKTI.findIndex(b => b.sah); gambarDet(m); gulir(); });
  on('.dt-bk', e => { d.sel = +e.dataset.b; d.info = -1; d.hip = -1; d.msg = ''; gambarDet(m); });
  on('.dt-in', e => { d.info = +e.dataset.o; d.msg = ''; gambarDet(m); });
  on('.dt-hp', e => { d.hip = +e.dataset.h; d.msg = ''; gambarDet(m); });
  un('dtRangkai', () => rangkaiDet(m));
  un('dtLup', () => lupDet(m));
  un('dtLanjut2', () => { d.fase = 3; d.q = 0; d.msg = ''; bangunHitung(d); gambarDet(m); gulir(); });
  on('.dt-q .opt', e => jawabDet(m, +e.dataset.k));
}

function putusDet(m, jenis) {
  const d = det, b = BUKTI[d.buka];
  if ((jenis === 'simpan') === b.sah) { d.putus[d.buka] = jenis; d.msg = ''; d.tipe = ''; return gambarDet(m); }
  salah++; d.tipe = 'no';
  d.msg = '❌ ' + (b.sah ? 'Tunggu dulu. Kartu ini punya sumber dan data yang bisa diperiksa. Baca lagi catatan lup.'
                         : 'Periksa sumbernya. Adakah peneliti, data terukur, atau usia yang bisa dicek ulang?');
  kurangiNyawa(d); gambarDet(m);
}

function rangkaiDet(m) {
  const d = det, op = BUKTI[d.sel].info[d.info];
  if (op[1] < 0) { salah++; d.tipe = 'no'; d.msg = '❌ ' + op[2]; }
  else if (op[1] !== d.hip) { salah++; d.tipe = 'no'; d.msg = '❌ Informasinya tepat, tetapi hipotesis itu belum cocok. ' + (HIP[d.hip].tolak || 'Bandingkan usia dan jenis bukti ini dengan isi tiap hipotesis.'); }
  else {
    d.rantai.push({ b:d.sel, o:d.info, h:d.hip }); d.combo++; d.sorot = null; d.tipe = 'ok';
    d.msg = '✅ Rangkaian tepat!' + (d.combo >= 2 ? ' 🔥 Combo ×' + d.combo : '');
    const sisa = BUKTI.findIndex((b, i) => b.sah && d.rantai.filter(r => r.b === i).length < b.info.filter(o => o[1] >= 0).length);
    if (d.rantai.filter(r => r.b === d.sel).length >= BUKTI[d.sel].info.filter(o => o[1] >= 0).length) d.sel = sisa;
  }
  d.info = -1; d.hip = -1;
  if (d.tipe === 'no') kurangiNyawa(d);
  gambarDet(m);
}

function lupDet(m) {
  const d = det, b = BUKTI[d.sel];
  const o = b.info.findIndex((x, k) => x[1] >= 0 && !d.rantai.some(r => r.b === d.sel && r.o === k));
  if (o < 0 || d.lup <= 0) return;
  d.lup--; d.sorot = [d.sel, o]; d.tipe = 'info'; d.msg = '💡 Lup menyorot informasi yang cocok untuk bukti ini. Tinggal tentukan hipotesisnya.';
  gambarDet(m);
}

function jawabDet(m, k) {
  const d = det, hitung = d.q === 0;
  const benar = hitung ? d.hitung.opts[k] === d.hitung.ok : VERDIK[d.vOrd[k]].ok;
  if (!benar) {
    salah++; d.qs[d.q].push(k); d.tipe = 'no';
    d.msg = '❌ ' + (hitung ? 'Belum tepat. Jumlahkan poin semua rangkaian menuju hipotesis itu, bagi dengan total poin seluruh bukti, lalu kalikan 100%.' : VERDIK[d.vOrd[k]].fb);
    return gambarDet(m);
  }
  if (hitung) { d.q = 1; d.tipe = 'ok'; d.msg = '✅ Tepat! ' + d.hitung.rumus; return gambarDet(m); }
  tutupDet(m);
}

function tutupDet(m) {
  det.fase = 4; det.msg = ''; det.tipe = '';
  const n = salah === 0 ? 3 : (salah <= m.toleransi ? 2 : 1);
  gambarDet(m); gulir(); konfeti(); periksa(true);
  $('fb').insertAdjacentHTML('afterbegin', '<p class="dt-bintang" role="img" aria-label="' + n + ' dari 3 bintang">' + '⭐'.repeat(n) + '☆'.repeat(3 - n) + '</p>');
}

function konfeti() {
  const w = document.createElement('div'); w.className = 'dt-konfeti'; w.setAttribute('aria-hidden', 'true');
  const e = ['🎉', '⭐', '🔎', '✨', '📜'];
  for (let k = 0; k < 22; k++) {
    const s = document.createElement('span'); s.textContent = e[k % e.length];
    s.style.left = (Math.random() * 100) + '%'; s.style.animationDelay = (Math.random() * .6) + 's'; s.style.fontSize = (1 + Math.random()) + 'rem';
    w.appendChild(s);
  }
  document.body.appendChild(w); setTimeout(() => w.remove(), 3400);
}

/* ===== Misi 4: Digital Explorer (Ekspedisi Digital) ===== */
const EX_S = [
  { n:'Sangiran', lok:'Sragen dan Karanganyar, Jawa Tengah', lon:110.83, lat:-7.45, per:'sekitar 1,5 juta tahun lalu', bukti:'Fosil Homo erectus dari ratusan individu', fakta:'Warisan Dunia UNESCO (1996). Menyimpan sekitar separuh fosil manusia purba yang diketahui dunia.' },
  { n:'Trinil', lok:'Ngawi, Jawa Timur', lon:111.37, lat:-7.37, per:'sekitar 500.000 tahun lalu', bukti:'Tempurung kepala dan tulang paha Homo erectus (dulu disebut Pithecanthropus erectus)', fakta:'Ditemukan dokter Belanda Eugène Dubois tahun 1891 dan 1892 di tepi Bengawan Solo.' },
  { n:'Wajak', lok:'Tulungagung, Jawa Timur', lon:111.88, lat:-8.13, per:'puluhan ribu tahun lalu (sekitar 30.000-an)', bukti:'Tengkorak Homo sapiens awal', fakta:'Ditemukan B.D. van Rietschoten tahun 1888, lalu diteliti Eugène Dubois.' },
  { n:'Liang Bua', lok:'Manggarai, Pulau Flores, NTT', lon:120.44, lat:-8.53, per:'100.000 sampai 60.000 tahun lalu', bukti:'Homo floresiensis: tinggi sekitar 1 meter, dijuluki "hobbit"', fakta:'Ditemukan tim peneliti Indonesia-Australia tahun 2003 di dalam gua kapur.' },
  { n:'Pacitan', lok:'Pacitan, Jawa Timur', lon:111.1, lat:-8.2, per:'Zaman Paleolitik (batu tua)', bukti:'Kapak perimbas dan kapak genggam, tanpa fosil manusia', fakta:'Dikenal sebagai Budaya Pacitan. Alat batunya ditemukan di sekitar Sungai Baksoka.' }
];
const EX_LV = [
  { n:'Pemula', ik:'🌱', d:'Nama situs terlihat di peta dan petunjuk dibuat jelas. Cocok untuk mulai belajar.', bat:4, xp:70, tol:5, nama:true, kor:false, jper:true, tap:0 },
  { n:'Penjelajah', ik:'🧭', d:'Nama situs tersembunyi sampai dikunjungi. Petunjuk berupa teka-teki, ada soal ketuk koordinat.', bat:3, xp:85, tol:4, nama:false, kor:true, jper:true, tap:.3 },
  { n:'Ahli', ik:'🏆', d:'Petunjuk butuh penalaran, jurnal tanpa periode, baterai hanya 2. Untuk yang sudah paham.', bat:2, xp:100, tol:3, nama:false, kor:true, jper:false, tap:.2 }
];
const EX_CLUE = [
  [ { s:1, t:'Situs di Jawa Timur tempat Eugène Dubois menemukan tempurung kepala Homo erectus pada tahun 1891.', h:'Cari situs yang berhubungan dengan Dubois dan Homo erectus.' },
    { s:0, t:'Situs Warisan Dunia UNESCO di Jawa Tengah yang menyimpan banyak fosil manusia purba.', h:'Cari yang berstatus UNESCO.' },
    { s:3, t:'Gua di Pulau Flores tempat ditemukan manusia kerdil setinggi sekitar 1 meter.', h:'Gua itu berada di luar Pulau Jawa.' },
    { s:2, t:'Situs di Kabupaten Tulungagung tempat tengkorak Homo sapiens awal ditemukan tahun 1888.', h:'Cari situs di Tulungagung.' } ],
  [ { s:1, t:'Seorang dokter Belanda menemukan tempurung kepala "manusia kera berjalan tegak" pada tahun 1891 di Jawa Timur.', h:'Tempurung kepala itu milik Homo erectus, bukan Homo sapiens.' },
    { s:0, t:'Situs Warisan Dunia UNESCO dengan fosil manusia purba terbanyak, letaknya di Jawa Tengah.', h:'Cari situs yang berstatus UNESCO dan menyimpan fosil paling tua.' },
    { s:3, t:'Di sebuah gua di luar Pulau Jawa, ditemukan manusia dewasa setinggi sekitar 1 meter yang dijuluki "hobbit".', h:'Gua itu ada di pulau yang lain, bukan Jawa.' },
    { s:2, t:'Tengkorak manusia modern awal (Homo sapiens) ditemukan tahun 1888 di sebuah kabupaten Jawa Timur yang berjuluk kota marmer.', h:'Yang kamu cari Homo sapiens, bukan Homo erectus.' },
    { s:4, t:'Tidak ada tulang manusia di sini, tetapi ada kapak batu buatan manusia purba di pesisir selatan Jawa Timur.', h:'Cari situs yang bukti utamanya alat batu, bukan fosil.' } ],
  [ { s:1, t:'Di Jawa Timur, situs ini menyimpan fosil yang usianya jauh lebih tua dari 100.000 tahun, ditemukan oleh orang Belanda, tetapi pemiliknya bukan Homo sapiens.', h:'Di Jawa Timur ada tiga situs. Satu berisi Homo sapiens, satu hanya berisi alat batu.' },
    { s:0, t:'Dari semua situs di Pulau Jawa, temuan di sinilah yang paling tua dan paling banyak.', h:'Bandingkan kolom Periode dan Bukti dari situs-situs di Jawa.' },
    { s:3, t:'Dari kelima situs, inilah yang letaknya paling timur, yaitu angka BT-nya paling besar.', h:'Lihat baris Koordinat pada kartu tiap situs.' },
    { s:2, t:'Di antara situs yang punya fosil manusia, temuan di sini yang paling muda.', h:'Cari periode yang angkanya paling kecil, tetapi tetap punya fosil.' },
    { s:4, t:'Situs tanpa fosil manusia, letaknya di sebelah barat Wajak, dan buktinya hanya alat.', h:'Bandingkan BT dengan Wajak (111,88° BT), dan cari yang tanpa fosil.' } ]
];
const EX_URUT = [[0, 3, 2], [0, 1, 3, 2], [0, 1, 3, 2]];   // tertua ke termuda (indeks EX_S)
const EX_QA = [
  { t:'Pada tulisan 7,45° LS, huruf LS artinya apa?', o:['Lintang Selatan: letaknya di selatan garis khatulistiwa','Lintas Sungai: situs berada di tepi sungai','Lurus ke Selatan sejauh 7,45 km','Lintang Sedang: iklimnya sedang'], b:0, e:'LS = Lintang Selatan. Indonesia dilintasi khatulistiwa, jadi ada yang LU (utara) dan ada yang LS (selatan).' },
  { t:'Situs mana yang paling ke timur, yaitu angka BT-nya paling besar?', o:['Sangiran','Trinil','Wajak','Liang Bua'], b:3, e:'Liang Bua berada di 120,44° BT, sedangkan situs di Jawa hanya sekitar 110 sampai 112° BT.' },
  { t:'Sebuah titik berada di 7,4° LS dan 111,4° BT. Situs mana yang paling dekat?', o:['Sangiran (7,45° LS; 110,83° BT)','Trinil (7,37° LS; 111,37° BT)','Wajak (8,13° LS; 111,88° BT)','Pacitan (8,2° LS; 111,1° BT)'], b:1, e:'Bandingkan kedua angka. Trinil hampir sama di lintang dan bujur. Sangiran lintangnya mirip, tetapi bujurnya selisih 0,6°.' },
  { t:'Pesawat terbang dari Wajak (8,13° LS; 111,88° BT) ke Liang Bua (8,53° LS; 120,44° BT). Arah utamanya?', o:['Utara','Barat','Timur','Selatan'], b:2, e:'Bujurnya naik 8,56° (ke timur), sedangkan lintangnya hanya bergeser 0,4°. Jadi arah utamanya timur.' },
  { t:'Selisih bujur Wajak dan Liang Bua sekitar 8,5°. Di dekat khatulistiwa, 1° bujur kira-kira 111 km. Jarak ke arah timur sekitar...', o:['95 km','9.500 km','950 km','85 km'], b:2, e:'8,5 × 111 ≈ 943, jadi sekitar 950 km. Menghitung seperti ini adalah cara kerja peta digital.' },
  { t:'Pesawat baling-baling terbang 475 km/jam dari Wajak ke Liang Bua (sekitar 950 km). Berapa lama terbangnya?', o:['1 jam','4 jam','9,5 jam','2 jam'], b:3, e:'Waktu = jarak ÷ kecepatan = 950 ÷ 475 = 2 jam.' },
  { t:'Ketuk titik 7,5° LS dan 111,0° BT pada peta di tab Google Earth.', tap:{ lon:111.0, lat:-7.5 }, e:'Tepat! Garis kisi memudahkanmu: cari garis 111° BT, lalu geser ke garis 7° LS dan turun setengah ke arah 8° LS.' },
  { t:'Ketuk titik 8,0° LS dan 111,6° BT pada peta di tab Google Earth.', tap:{ lon:111.6, lat:-8.0 }, e:'Tepat! Titik itu berada di antara garis 111° dan 112° BT, kira-kira 0,6 dari garis 111°.' }
];
const EX_QS = [[EX_QA[0], EX_QA[1], EX_QA[3]], [EX_QA[0], EX_QA[1], EX_QA[2], EX_QA[6], EX_QA[3], EX_QA[4]], [EX_QA[2], EX_QA[3], EX_QA[7], EX_QA[4], EX_QA[5]]];
const EX_POLY = {
  sumatra:[[95.3,5.6],[98,4],[100.5,2],[103.5,-1],[106,-3],[106,-5.8],[104.5,-5.9],[102,-4],[99,-1.5],[96.5,2],[95.3,3.5]],
  jawa:[[105.2,-6.8],[106.5,-6],[108.5,-6.8],[110.5,-6.5],[112.5,-6.9],[114.5,-7.7],[114.4,-8.7],[112,-8.5],[110.5,-8.3],[109,-8],[106.5,-7.6],[105.3,-6.9]],
  kalimantan:[[109,1],[111,2],[114,4.2],[117.5,7],[119.2,5],[117.8,1],[116.8,-1.5],[116.2,-3.7],[114.5,-4.2],[111.5,-3.2],[110,-2.8],[109.2,-1]],
  sulawesi:[[119.3,0.8],[120.5,1.2],[124.8,1.5],[124.5,0.6],[121.6,0.4],[120.8,-1],[123.2,-0.8],[122.2,-1.8],[121.5,-3],[122.5,-4.5],[121.5,-4.8],[120.4,-3],[120.4,-5.5],[119.4,-5.4],[119.5,-3],[118.9,-2.8],[119.6,-0.5]],
  bali:[[114.4,-8.1],[115.7,-8.1],[115.7,-8.8],[114.5,-8.8]], lombok:[[115.9,-8.2],[116.7,-8.3],[116.7,-9],[115.9,-8.9]],
  sumbawa:[[116.8,-8.2],[119,-8.3],[119,-9],[117,-9]], flores:[[119.9,-8.4],[123,-8.2],[123,-8.9],[120,-8.9]], timor:[[123.6,-9.4],[127,-8.4],[127,-9.4],[124,-10.4]],
  papua:[[131,-0.8],[135,-3],[138.5,-1.8],[141,-2.6],[141,-9.1],[138,-8.3],[135,-4.2],[133.5,-4],[132,-2.5]]
};
const EX_LBL = [['SUMATRA', 100, 1.2], ['JAWA', 108.5, -5.2], ['KALIMANTAN', 113.5, 0.2], ['SULAWESI', 121.5, 3.2], ['PAPUA', 136, -5.8], ['NUSA TENGGARA', 119, -10.6]];
const EX_NAMA = ['Pelacak Peta', 'Jalur Waktu', 'Navigasi Koordinat'];
const exP = (lo, la) => [(lo - 94) * 10, (7 - la) * 10];
const exDeg = v => Math.abs(v).toFixed(2).replace('.', ',');
const exKoor = x => exDeg(x.lat) + '° ' + (x.lat < 0 ? 'LS' : 'LU') + ', ' + exDeg(x.lon) + '° ' + (x.lon < 0 ? 'BB' : 'BT');
const baruEx = () => ({ lv:-1, r:1, q:0, bat:3, tab:'peta', sel:-1, zoom:false, bumi:0, visit:[], urut:[], pool:null, msg:'', ok:false, titik:null, sq:-1 });
const selesaiEx = () => Object.assign(baruEx(), { r:4, lv:1, visit:[0, 1, 2, 3, 4] });
let ex = baruEx();

function exSvg(vb, r, o) {
  const pt = a => a.map(p => exP(p[0], p[1]).map(v => v.toFixed(1)).join(',')).join(' '), sw = (vb[2] / 480 * .8).toFixed(2);
  let s = '<svg class="ex-svg' + (o.grid ? ' ex-bumi' : '') + '" viewBox="' + vb.join(' ') + '" role="img" aria-label="Peta digital Indonesia"><defs><linearGradient id="exO" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#11507c"/><stop offset="1" stop-color="#072640"/></linearGradient><linearGradient id="exL" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#63bd75"/><stop offset="1" stop-color="#2b7440"/></linearGradient></defs><rect x="' + vb[0] + '" y="' + vb[1] + '" width="' + vb[2] + '" height="' + vb[3] + '" fill="url(#exO)"/>';
  if (o.grid) {
    for (let L = Math.ceil(vb[0] / 10 + 94); L <= (vb[0] + vb[2]) / 10 + 94; L++) { const x = (L - 94) * 10; s += '<path d="M' + x + ' ' + vb[1] + 'V' + (vb[1] + vb[3]) + '" stroke="#fff" stroke-opacity=".35" stroke-width=".15"/><text x="' + (x + .3) + '" y="' + (vb[1] + r * 1.6) + '" font-size="' + r * 1.4 + '" fill="#9fd8ff">' + L + '° BT</text>'; }
    for (let a = Math.ceil(7 - (vb[1] + vb[3]) / 10); a <= 7 - vb[1] / 10; a++) { const y = (7 - a) * 10; s += '<path d="M' + vb[0] + ' ' + y + 'H' + (vb[0] + vb[2]) + '" stroke="#fff" stroke-opacity=".35" stroke-width=".15"/><text x="' + (vb[0] + .3) + '" y="' + (y - .3) + '" font-size="' + r * 1.4 + '" fill="#9fd8ff">' + Math.abs(a) + '° ' + (a < 0 ? 'LS' : 'LU') + '</text>'; }
  }
  if (o.pulau) {
    for (let L = 95; L <= 140; L += 5) s += '<path d="M' + (L - 94) * 10 + ' 0V190" stroke="#fff" stroke-opacity=".08"/>';
    for (let a = 5; a >= -10; a -= 5) s += '<path d="M0 ' + (7 - a) * 10 + 'H480" stroke="#fff" stroke-opacity=".08"/>';
    s += '<path d="M0 70H480" stroke="#f1c453" stroke-width=".7" stroke-dasharray="4 3" opacity=".8"/><text x="474" y="67" font-size="3.4" text-anchor="end" fill="#f1c453">Khatulistiwa (0°)</text>' +
      '<g fill="#fff" opacity=".85"><path d="M20 150L24 165H16Z"/><text x="20" y="148" font-size="4.5" text-anchor="middle" font-weight="800">U</text></g>';
  }
  Object.values(EX_POLY).forEach(p => { s += '<polygon points="' + pt(p) + '" fill="url(#exL)" stroke="#a6e8b0" stroke-opacity=".7" stroke-width="' + sw + '"/>'; });
  if (o.pulau) EX_LBL.forEach(l => { const [x, y] = exP(l[1], l[2]); s += '<text x="' + x + '" y="' + y + '" font-size="3.3" letter-spacing=".5" text-anchor="middle" fill="#fff" opacity=".6" pointer-events="none">' + l[0] + '</text>'; });
  EX_S.forEach((x, i) => {
    if (o.hanya != null && o.hanya !== i) return;
    const [px, py] = exP(x.lon, x.lat), v = ex.visit.includes(i), nm = v || o.nama || o.hanya != null;
    if (o.silang) s += '<path d="M' + (px - r * 3) + ' ' + py + 'H' + (px + r * 3) + 'M' + px + ' ' + (py - r * 3) + 'V' + (py + r * 3) + '" stroke="#f1c453" stroke-width="' + sw + '"/>';
    s += '<g class="ex-pin' + (o.sel === i ? ' sel' : '') + '" data-i="' + i + '" ' + (o.klik ? 'tabindex="0" role="button" aria-label="Pin ' + (i + 1) + (nm ? ', ' + x.n : '') + '"' : '') + '>' +
      (v ? '' : '<circle class="ex-pulse" cx="' + px + '" cy="' + py + '" r="' + r + '" fill="#d8232a"/>') +
      (o.sel === i ? '<circle cx="' + px + '" cy="' + py + '" r="' + r * 1.7 + '" fill="none" stroke="#fff" stroke-width="' + sw + '"/>' : '') +
      '<circle cx="' + px + '" cy="' + py + '" r="' + r + '" fill="' + (v ? '#f1c453' : '#d8232a') + '" stroke="#fff" stroke-width="' + sw + '"/><text x="' + px + '" y="' + (py + r * .45) + '" font-size="' + r * 1.3 + '" text-anchor="middle" font-weight="800" fill="' + (v ? '#1a1203' : '#fff') + '" pointer-events="none">' + (i + 1) + '</text>' +
      (nm ? '<text x="' + px + '" y="' + (py + r * 2.7) + '" font-size="' + r * 1.15 + '" text-anchor="middle" font-weight="700" fill="#fff" stroke="#06111f" stroke-width="' + (r * .3).toFixed(2) + '" paint-order="stroke" pointer-events="none">' + x.n + '</text>' : '') + '</g>';
  });
  if (o.titik) {
    const [tx, ty] = exP(o.titik.lon, o.titik.lat), kiri = tx > vb[0] + vb[2] - r * 9, ax = kiri ? tx - r * 1.6 : tx + r * 1.6, fs = r * 1.15;
    s += '<g pointer-events="none"><circle cx="' + tx + '" cy="' + ty + '" r="' + r * .7 + '" fill="#3ac6b8" stroke="#fff" stroke-width="' + sw + '"/>' +
      '<text x="' + ax + '" y="' + (ty - fs * .2) + '" font-size="' + fs + '" font-weight="700" fill="#fff" stroke="#06111f" stroke-width="' + (fs * .25).toFixed(2) + '" paint-order="stroke" text-anchor="' + (kiri ? 'end' : 'start') + '">' +
      exDeg(o.titik.lat) + '° ' + (o.titik.lat < 0 ? 'LS' : 'LU') + '</text><text x="' + ax + '" y="' + (ty + fs * 1.1) + '" font-size="' + fs + '" font-weight="700" fill="#ffe38a" stroke="#06111f" stroke-width="' + (fs * .25).toFixed(2) + '" paint-order="stroke" text-anchor="' + (kiri ? 'end' : 'start') + '">' +
      exDeg(o.titik.lon) + '° ' + (o.titik.lon < 0 ? 'BB' : 'BT') + '</text></g>';
  }
  return s + '</svg>';
}

function exArah(t, x) {   // jarak (km) dan arah titik t dari situs x
  const dx = (t.lon - x.lon) * 111 * Math.cos(x.lat * Math.PI / 180), dy = (t.lat - x.lat) * 111, km = Math.round(Math.hypot(dx, dy));
  const a = ['Timur', 'Timur Laut', 'Utara', 'Barat Laut', 'Barat', 'Barat Daya', 'Selatan', 'Tenggara'][((Math.round(Math.atan2(dy, dx) * 180 / Math.PI / 45) % 8) + 8) % 8];
  return km < 3 ? 'Titik ini tepat di lokasi situs.' : 'Sekitar <b>' + km + ' km</b> ke arah <b>' + a + '</b> dari Situs ' + x.n + '.';
}

function exKartu(i) {
  if (i < 0) return '<div class="ex-kartu"><p class="lb-info" style="color:#102a43">🛰️ Ketuk sebuah pin untuk membaca datanya.</p></div>';
  const L = EX_LV[ex.lv], x = EX_S[i], v = ex.visit.includes(i), tampil = v || L.nama, tebak = ex.r === 1 && !v;
  return '<div class="ex-kartu"><div class="ex-kop">📍 Situs ' + (tampil ? x.n : 'misterius #' + (i + 1)) + '</div><dl><dt>Lokasi</dt><dd>' + x.lok + '</dd><dt>Periode</dt><dd>' + x.per + '</dd><dt>Bukti</dt><dd>' + x.bukti + '</dd>' +
    (L.kor ? '<dt>Koordinat</dt><dd>' + exKoor(x) + '</dd>' : '') + '</dl><p class="ex-fakta">💡 ' + x.fakta + '</p>' +
    (tebak ? '<button class="pbtn gold" id="exKunjungi">✈️ Kunjungi Lokasi</button>' : '<p class="ex-ok">' + (v ? '✓ Sudah dikunjungi' : '') + '</p>') + '</div>';
}

function gambarEx(m) {
  const R = ex.r;
  if (R === 4) {
    $('area').innerHTML = '<div class="ex-akhir"><div class="dt-cap">PASPOR LENGKAP</div><p class="lb-info">Kelima situs sudah kamu kunjungi. Ringkasan untuk dibaca ulang:</p><div class="ex-paspor">' +
      EX_S.map(x => '<div class="ex-cap on"><b>' + x.n + '</b><span>' + x.lok + '</span><span>' + x.per + '</span><span>' + x.bukti + '</span></div>').join('') + '</div></div>';
    return;
  }
  if (ex.lv < 0) {
    $('area').innerHTML = '<div class="ex-pilih"><h3>🛰️ Pilih tingkat ekspedisimu</h3><p class="lb-info">Makin sulit tingkatnya, makin besar XP maksimal yang bisa kamu dapat.</p><div class="ex-lvs">' +
      EX_LV.map((l, k) => '<button class="ex-lvkartu lv' + k + '" data-l="' + k + '"><span class="ex-lvik">' + l.ik + '</span><b>' + l.n + '</b><small>' + l.d + '</small><em>🔋 ' + l.bat + ' baterai · ⭐ ' + l.xp + ' XP</em></button>').join('') + '</div></div>';
    $('area').querySelectorAll('.ex-lvkartu').forEach(b => b.onclick = () => { const l = +b.dataset.l, L = EX_LV[l]; ex.lv = l; ex.bat = L.bat; m.xp = L.xp; m.toleransi = L.tol; gambarEx(m); });
    return;
  }
  const L = EX_LV[ex.lv], Q = EX_QS[ex.lv], C = EX_CLUE[ex.lv], U = EX_URUT[ex.lv];
  if (R === 3 && ex.sq !== ex.q) { ex.sq = ex.q; if (Q[ex.q].tap) { ex.tab = 'bumi'; if (!ex.visit.includes(ex.bumi) || ex.bumi === 3) ex.bumi = 0; ex.titik = null; } }
  const hud = '<div class="ex-hud"><span class="ex-lv lv' + ex.lv + '">' + L.ik + ' ' + L.n + '</span><span class="ex-cells" role="img" aria-label="Baterai ' + ex.bat + ' dari ' + L.bat + '">' +
    Array.from({ length:L.bat }, (_, k) => '<i class="' + (k < ex.bat ? 'on' : '') + '"></i>').join('') + '</span></div>';
  const tabs = [['peta', '🗺️ Peta'], ['lokasi', '📍 Lokasi Situs'], ['bumi', '🌍 Google Earth']].map(t => '<button class="ex-tab' + (ex.tab === t[0] ? ' on' : '') + '" role="tab" aria-selected="' + (ex.tab === t[0]) + '" data-t="' + t[0] + '">' + t[1] + '</button>').join('');
  let isi = '';
  if (ex.tab === 'peta') {
    const vb = ex.zoom ? [156, 136, 40, 22] : [0, 0, 480, 190], r = ex.zoom ? 1.5 : 4.2;
    isi = '<div class="ex-grid"><div class="ex-peta radar">' + exSvg(vb, r, { sel:ex.sel, klik:true, pulau:!ex.zoom, nama:L.nama }) + '<button class="ex-zoom" id="exZoom">' + (ex.zoom ? '🌏 Lihat Nusantara' : '🔍 Perbesar Jawa') + '</button></div>' + exKartu(ex.sel) + '</div>';
  } else if (ex.tab === 'lokasi') {
    isi = '<p class="lb-info">🛂 Paspor Penjelajah: kunjungi situs untuk mendapat stempelnya.' + (L.jper ? '' : ' (Tingkat Ahli: periode tidak dicatat, ingat-ingatlah dari kartu situs!)') + '</p><div class="ex-paspor">' + EX_S.map((x, i) => ex.visit.includes(i)
      ? '<div class="ex-cap on"><b>✓ ' + x.n + '</b><span>' + x.lok + '</span>' + (L.jper ? '<span>' + x.per + '</span>' : '') + '<span>' + x.bukti + '</span></div>'
      : '<div class="ex-cap"><b>🔒 Situs #' + (i + 1) + '</b><span>Belum dikunjungi</span></div>').join('') + '</div>';
  } else {
    const ada = ex.visit, i = ada.includes(ex.bumi) ? ex.bumi : (ada[0] != null ? ada[0] : -1);
    if (i < 0) isi = '<p class="lb-info">Kunjungi satu situs dulu, lalu lihat dari atas seperti di Google Earth.</p>';
    else { const x = EX_S[i], [px, py] = exP(x.lon, x.lat);
      isi = '<div class="ex-chips">' + ada.map(k => '<button class="chip' + (k === i ? ' pakai' : '') + '" data-b="' + k + '">' + EX_S[k].n + '</button>').join('') + '</div>' +
        '<p class="lb-info">👆 Ketuk di mana saja pada peta (atau pada pin emas) untuk membaca angka koordinat titik itu.</p><div class="ex-peta">' + exSvg([px - 14, py - 9, 28, 18], 1.1, { grid:true, silang:true, hanya:i, titik:ex.titik }) + '</div>' +
        '<button class="chip" id="exTitikSitus">📍 Baca koordinat situs ini</button>' +
        (ex.titik ? '<div class="ex-koord ex-titik"><b>🎯 Titik pilihanmu</b><span>' + exDeg(ex.titik.lat) + '° ' + (ex.titik.lat < 0 ? 'LS' : 'LU') + '</span><span>' + exDeg(ex.titik.lon) + '° ' + (ex.titik.lon < 0 ? 'BB' : 'BT') + '</span><small>' + exArah(ex.titik, x) + '</small></div>' : '') +
        '<div class="ex-koord"><b>' + x.n + '</b><span>' + exDeg(x.lat) + '° ' + (x.lat < 0 ? 'LS' : 'LU') + '</span><span>' + exDeg(x.lon) + '° ' + (x.lon < 0 ? 'BB' : 'BT') + '</span></div>' +
        '<p class="lb-info">Cara membaca: <b>LS</b> = Lintang Selatan (di bawah khatulistiwa). <b>BT</b> = Bujur Timur. Makin besar angka BT, makin ke timur.</p>'; }
  }
  let tugas = '';
  if (R === 1) tugas = '<b>Petunjuk ' + (ex.q + 1) + ' dari ' + C.length + ':</b> ' + C[ex.q].t + '<br><small>Ketuk pin di peta, baca datanya, lalu tekan Kunjungi Lokasi bila yakin. Salah kunjung memakai 1 baterai.</small>';
  if (R === 2) {
    ex.pool = ex.pool || acak(U);
    tugas = '<b>Urutkan situs dari temuan yang PALING TUA ke PALING MUDA.</b> ' + (ex.lv === 0 ? 'Ingat: Sangiran sekitar 1,5 juta tahun, Liang Bua 100.000 sampai 60.000 tahun, Wajak sekitar 30.000-an tahun.' : ex.lv === 1 ? 'Lihat periodenya di tab Lokasi Situs.' : 'Periode tidak dicatat di jurnal, jadi andalkan ingatanmu.') +
      '<div class="slots">' + U.map((_, k) => '<button class="slot' + (ex.urut[k] != null ? ' isi' : '') + '" data-k="' + k + '">' + (ex.urut[k] != null ? EX_S[ex.urut[k]].n : '') + '</button>').join('') +
      '</div><div class="pool">' + ex.pool.map(i => '<button class="chip" data-i="' + i + '"' + (ex.urut.includes(i) ? ' disabled' : '') + '>' + EX_S[i].n + '</button>').join('') + '</div>' +
      '<button class="pbtn gold" id="exCek"' + (ex.urut.length < U.length ? ' disabled' : '') + ' style="margin-top:.6rem">Cek urutan</button>';
  }
  if (R === 3) { const q = Q[ex.q];
    tugas = '<b>Pertanyaan ' + (ex.q + 1) + ' dari ' + Q.length + ':</b> ' + q.t + (q.tap ? '<br><small>🎯 Ketuk langsung pada peta di bawah tab Google Earth. Toleransi ±' + String(L.tap).replace('.', ',') + '°. Salah ketuk memakai 1 baterai.</small>'
      : '<div class="m-opsi" style="margin-top:.5rem">' + q.o.map((o, k) => '<button class="opt" data-k="' + k + '">' + o + '</button>').join('') + '</div>'); }
  $('area').innerHTML = '<div class="ex-head"><div><b>✈️ Ronde ' + R + '/3: ' + EX_NAMA[R - 1] + '</b><div class="ex-dots">' + [1, 2, 3].map(k => '<i class="' + (k < R ? 'done' : k === R ? 'now' : '') + '"></i>').join('') + '</div></div>' + hud + '</div><div class="ex-tabs" role="tablist">' + tabs + '</div><div class="ex-isi">' + isi + '</div>' +
    '<div class="ex-tugas">' + tugas + (ex.msg ? '<p class="ex-msg' + (ex.ok ? ' ok' : '') + '" role="status">' + ex.msg + '</p>' : '') + '</div>';
  ikatEx(m);
}

function exGagal(m, pesan, ulang) {   // kurangi baterai; bila habis, ronde diulang
  salah++; ex.bat--; ex.ok = false; ex.msg = pesan;
  if (ex.bat <= 0) { ex.bat = EX_LV[ex.lv].bat; ex.q = 0; ex.sq = -1; ex.urut = []; ex.pool = null; ex.msg = 'Baterai habis! Ronde ini diulang dari awal. ' + ulang; }
  gambarEx(m);
}
function exLulus(m, pesan) {
  ex.r++; ex.q = 0; ex.sq = -1; ex.bat = EX_LV[ex.lv].bat; ex.urut = []; ex.pool = null; ex.ok = true; ex.sel = -1; ex.msg = pesan;
  ex.tab = ex.r === 2 ? 'lokasi' : 'bumi'; konfeti();
  if (ex.r === 4) { gambarEx(m); return periksa(true); }
  gambarEx(m);
}

function ikatEx(m) {
  const A = $('area'), Q = ex.lv >= 0 ? EX_QS[ex.lv] : [], q = ex.r === 3 ? Q[ex.q] : null;
  A.querySelectorAll('.ex-tab').forEach(b => b.onclick = () => { ex.tab = b.dataset.t; ex.msg = ''; ex.titik = null; gambarEx(m); });
  const pilihPin = g => { ex.sel = +g.dataset.i; gambarEx(m); };
  A.querySelectorAll('.ex-pin[tabindex]').forEach(g => { g.onclick = () => pilihPin(g); g.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pilihPin(g); } }; });
  const z = $('exZoom'); if (z) z.onclick = () => { ex.zoom = !ex.zoom; gambarEx(m); };
  A.querySelectorAll('[data-b]').forEach(b => b.onclick = () => { ex.bumi = +b.dataset.b; ex.titik = null; gambarEx(m); });
  const tandai = () => {
    if (!(q && q.tap)) return gambarEx(m);
    const t = q.tap, tol = EX_LV[ex.lv].tap, s = EX_S[ex.bumi];
    if (Math.abs(t.lon - s.lon) > 1.4 || Math.abs(t.lat - s.lat) > .9) { ex.ok = false; ex.msg = 'Titik sasaran tidak terlihat di tampilan ' + s.n + '. Pilih situs di Pulau Jawa dulu (tanpa mengurangi baterai).'; return gambarEx(m); }
    const d = Math.hypot(ex.titik.lon - t.lon, ex.titik.lat - t.lat);
    if (d <= tol) { ex.q++; ex.ok = true; ex.msg = '✓ ' + q.e; ex.titik = null; if (ex.q === Q.length) return exLulus(m, 'Ekspedisi selesai! ' + q.e); return gambarEx(m); }
    exGagal(m, 'Belum tepat. Kamu mengetuk ' + exKoor(ex.titik) + ', sekitar ' + Math.round(d * 111) + ' km dari sasaran. Cocokkan dengan garis kisi di peta.', '');
  };
  const bm = A.querySelector('.ex-bumi');
  if (bm) bm.onclick = e => {
    const r = bm.getBoundingClientRect(), v = bm.viewBox.baseVal, g = e.target.closest ? e.target.closest('.ex-pin') : null;
    if (g) { const s = EX_S[+g.dataset.i]; ex.titik = { lon:s.lon, lat:s.lat }; }
    else { const x = v.x + (e.clientX - r.left) / r.width * v.width, y = v.y + (e.clientY - r.top) / r.height * v.height; ex.titik = { lon:+(x / 10 + 94).toFixed(2), lat:+(7 - y / 10).toFixed(2) }; }
    tandai();
  };
  const ts = $('exTitikSitus'); if (ts) ts.onclick = () => { const s = EX_S[ex.visit.includes(ex.bumi) ? ex.bumi : ex.visit[0]]; ex.titik = { lon:s.lon, lat:s.lat }; tandai(); };
  const kj = $('exKunjungi');
  if (kj) kj.onclick = () => {
    const C = EX_CLUE[ex.lv], i = ex.sel, c = C[ex.q]; ex.visit.push(i);
    if (i === c.s) { ex.q++; ex.sel = -1; ex.ok = true; ex.msg = 'Tepat! Itu Situs ' + EX_S[i].n + '. Stempel baru masuk ke paspormu.';
      if (ex.q === C.length) return exLulus(m, 'Semua situs ditemukan! Sekarang urutkan temuan berdasarkan umurnya.'); return gambarEx(m); }
    exGagal(m, 'Bukan. Itu Situs ' + EX_S[i].n + '. Petunjuk: ' + c.h, 'Semua situs yang kamu kunjungi sudah terbuka, pakai datanya.');
  };
  if (ex.r === 2) {
    const U = EX_URUT[ex.lv];
    A.querySelectorAll('.pool .chip').forEach(b => b.onclick = () => { ex.urut.push(+b.dataset.i); ex.msg = ''; gambarEx(m); });
    A.querySelectorAll('.slot.isi').forEach(b => b.onclick = () => { ex.urut.splice(+b.dataset.k, 1); gambarEx(m); });
    const c = $('exCek'); if (c) c.onclick = () => {
      const n = ex.urut.filter((v, k) => v === U[k]).length;
      if (n === U.length) return exLulus(m, 'Urutan benar! Sekarang pelajari koordinat di tab Google Earth.');
      ex.urut = []; exGagal(m, 'Baru ' + n + ' dari ' + U.length + ' posisi yang tepat. ' + (ex.lv < 2 ? 'Bandingkan periode tiap situs di tab Lokasi Situs.' : 'Coba ingat kembali periode di kartu situs.'), '');
    };
  }
  if (ex.r === 3 && q && !q.tap) A.querySelectorAll('.ex-tugas .opt').forEach(b => b.onclick = () => {
    if (+b.dataset.k === q.b) { ex.q++; ex.ok = true; ex.msg = '✓ ' + q.e; if (ex.q === Q.length) return exLulus(m, 'Ekspedisi selesai! ' + q.e); return gambarEx(m); }
    exGagal(m, 'Belum tepat. Buka tab Google Earth dan baca angka koordinatnya dengan teliti.', '');
  });
}

/* ===== Misi 5: Voyage Challenge (Design - Build - Test - Improve) =====
   Alur: (1) Design: pilih bahan untuk 4 bagian perahu -> (2) Build: perahu dirakit -> (3) Test: uji berlayar,
   muncul 5 hasil uji -> (4) Improve: bila ada yang di bawah batas lolos, perbaiki bagian yang lemah lalu uji lagi.
   Semua isi (bahan, sifat, nilai kecocokan, alasan) ada di VY_BAHAN / VY_SLOT / VY_FIT di bawah ini, jadi mudah kamu ubah. */
const VY_LOLOS = 70;   // semua hasil uji harus >= angka ini

const VY_BAHAN = {
  bambu:{ n:'Bambu', ik:'🎋', ket:'batang berongga', sifat:['Ringan','Berongga, mengapung','Mudah dibelah'] },
  kayu: { n:'Kayu',  ik:'🪵', ket:'batang pohon keras', sifat:['Kuat dan padat','Agak berat','Tahan lama'] },
  tali: { n:'Tali',  ik:'🪢', ket:'rotan atau ijuk', sifat:['Kuat ditarik','Lentur','Bisa dililitkan'] },
  daun: { n:'Daun',  ik:'🍃', ket:'dianyam, mis. pandan', sifat:['Sangat ringan','Bisa dianyam lebar','Mudah robek'] },
  kulit:{ n:'Kulit', ik:'🐾', ket:'kulit binatang', sifat:['Berat saat basah','Cepat lapuk','Kaku saat kering'] },
  batu: { n:'Batu',  ik:'🪨', ket:'', sifat:['Sangat keras','Sangat berat','Tenggelam di air'] }
};

/* st = ukuran yang dipengaruhi bagian ini; max = sumbangan maksimal bagian ini ke tiap ukuran (jumlah tiap ukuran = 100) */
const VY_SLOT = [
  { k:'lambung', n:'Lambung', ik:'🛶', st:['stab','apung','kap','kec','tahan'], max:{ stab:20, apung:60, kap:80, kec:30, tahan:40 },
    fungsi:'Badan perahu. Harus mengapung dan cukup kuat menahan penumpang serta bekal.',
    tip:'Bayangkan perahu penuh bekal. Bahannya harus kuat menahan beban dan tetap mengapung. Bandingkan Kayu dan Bambu: mana yang lebih kuat, mana yang lebih ringan?',
    alasan:{ bambu:'Ringan dan mengapung, tetapi ruangnya kurang untuk banyak bekal.', kayu:'Kuat, padat, dan lega untuk penumpang serta bekal.',
      tali:'Tali lentur dan tidak membentuk badan padat, jadi tidak bisa menahan air.', daun:'Daun mudah robek dan tidak bisa menahan air laut.',
      kulit:'Kulit menyerap air, jadi berat, lembek, dan cepat lapuk.', batu:'Batu tenggelam. Lambung dari batu tidak akan mengapung.' } },
  { k:'cadik', n:'Cadik', ik:'⚖️', st:['stab','apung','kap'], max:{ stab:60, apung:40, kap:20 },
    fungsi:'Penyeimbang di sisi perahu. Harus ringan dan mengapung agar perahu tidak terbalik.',
    tip:'Cadik hanya bertugas mengapung dan menyeimbangkan. Cari bahan berongga yang tidak menambah beban perahu.',
    alasan:{ bambu:'Berongga dan ringan, sangat baik untuk mengapung dan menyeimbangkan.', kayu:'Mengapung, tetapi lebih berat daripada bambu sehingga kurang efektif menyeimbangkan.',
      tali:'Tali tidak padat, jadi tidak bisa menjadi pelampung.', daun:'Daun terlalu tipis untuk menjadi pelampung.',
      kulit:'Kulit menyerap air sehingga tidak bisa menjadi pelampung.', batu:'Batu tenggelam dan menarik perahu ke bawah.' } },
  { k:'pengikat', n:'Pengikat', ik:'🔗', st:['stab','tahan'], max:{ stab:20, tahan:40 },
    fungsi:'Menyambung lambung, cadik, dan tiang. Perahu zaman dulu diikat, bukan dipaku.',
    tip:'Pelaut zaman dulu sering tidak memakai paku. Cari bahan yang kuat ditarik dan lentur supaya bisa dililitkan.',
    alasan:{ tali:'Kuat ditarik dan lentur, cocok untuk mengikat bagian perahu.', kulit:'Bisa mengikat, tetapi cepat lapuk dan kendur bila basah.',
      daun:'Daun mudah putus, ikatan akan lepas diterjang ombak.', bambu:'Bambu kaku sehingga sulit dililitkan dan mudah patah.',
      kayu:'Kayu kaku, tidak bisa melilit dan menahan sambungan.', batu:'Batu tidak bisa mengikat apa pun.' } },
  { k:'layar', n:'Layar', ik:'⛵', st:['kec','tahan'], max:{ kec:70, tahan:20 },
    fungsi:'Menangkap angin untuk mendorong perahu. Harus ringan dan lebar.',
    tip:'Layar harus lebar dan ringan agar angin bisa mendorong perahu. Cari bahan yang bisa dianyam menjadi lembaran.',
    alasan:{ daun:'Anyaman daun ringan dan lebar, menangkap angin dengan baik.', kulit:'Bisa menangkap angin, tetapi berat dan kaku sehingga memperlambat perahu.',
      tali:'Tali tidak membentuk bidang lebar, angin lewat begitu saja.', bambu:'Bambu kaku dan sempit, hanya cukup sebagai bilah penguat.',
      kayu:'Kayu terlalu berat untuk dipasang sebagai layar.', batu:'Batu terlalu berat dan tidak bisa menangkap angin.' } }
];

/* Kecocokan bahan untuk tiap bagian (0 sampai 10), urutannya mengikuti 'st' di atas */
const VY_FIT = {
  lambung:{ bambu:[6,9,6,9,5], kayu:[8,7,10,6,9], tali:[0,1,0,0,1], daun:[0,1,0,1,0], kulit:[2,3,2,2,2], batu:[0,0,0,0,3] },
  cadik:{ bambu:[10,10,8], kayu:[6,7,8], tali:[0,0,0], daun:[1,1,0], kulit:[2,2,1], batu:[0,0,0] },
  pengikat:{ tali:[10,10], kulit:[5,4], daun:[3,2], bambu:[2,2], kayu:[3,4], batu:[0,0] },
  layar:{ daun:[10,7], kulit:[4,6], tali:[2,3], bambu:[3,4], kayu:[1,3], batu:[0,1] }
};
const VY_UKUR = [['stab','Stabilitas','⚖️'], ['apung','Daya apung','🛟'], ['kap','Kapasitas','📦'], ['kec','Kecepatan','💨'], ['tahan','Ketahanan','🛡️']];
const VY_MASALAH = {
  stab:'Perahu mudah miring dan terbalik karena kurang seimbang.',
  apung:'Perahu terlalu berat atau menyerap air sehingga mudah tenggelam.',
  kap:'Ruang dan kekuatan perahu kurang untuk membawa penumpang dan bekal.',
  kec:'Perahu lambat karena angin kurang mendorong atau badan perahu terlalu berat.',
  tahan:'Perahu cepat rusak diterjang ombak dan ikatannya mudah lepas.'
};
const VY_AWAL = { lambung:'kayu', cadik:'bambu', pengikat:'tali', layar:'daun' };   // rancangan untuk membuka misi yang sudah selesai
const VY_GARIS = { bambu:'#7f8f2c', kayu:'#5e3515', tali:'#8c6b34', daun:'#6f7a2a', kulit:'#4a2a14', batu:'#444' };
const VY_SOLID = { bambu:'#d9e283', kayu:'#a96a3b', tali:'#dcc189', daun:'#cbc26d', kulit:'#8a5a3a', batu:'#9b9b9b' };

let vyRun = 0, vy = null;
const vyKurang = () => { try { return matchMedia('(prefers-reduced-motion:reduce)').matches; } catch (e) { return false; } };
const baruVy = () => ({ fase:'rancang', pilih:{ lambung:'', cadik:'', pengikat:'', layar:'' }, slot:'lambung', perbaiki:false, uji:0, gagal:0,
  hasil:null, lulus:false, lemah:null, hasilTipe:'tiba', durasi:3, bangun:0, pesan:'', tipe:'', ganti:'', run:0 });
function selesaiVy() {   // keadaan "sudah selesai" untuk membuka kembali misi yang sudah dikerjakan
  const v = baruVy(), d = S.vyDesain || {};
  VY_SLOT.forEach(s => { v.pilih[s.k] = VY_FIT[s.k][d[s.k]] ? d[s.k] : VY_AWAL[s.k]; });
  v.fase = 'selesai'; v.lulus = true; v.uji = 1; v.hasil = hitungVy(v.pilih); return v;
}

function hitungVy(p) {
  const s = { stab:0, apung:0, kap:0, kec:0, tahan:0 };
  VY_SLOT.forEach(sl => { const f = VY_FIT[sl.k][p[sl.k]]; sl.st.forEach((x, i) => { s[x] += sl.max[x] * f[i] / 10; }); });
  Object.keys(s).forEach(x => { s[x] = Math.round(s[x]); });
  return s;
}
const vyTingkat = (k, b) => { const f = VY_FIT[k][b]; return f.reduce((a, c) => a + c, 0) / f.length / 10; };
function lemahVy(v) {   // ukuran paling rendah di bawah batas, dan bagian perahu yang paling berpengaruh padanya
  const h = v.hasil; let st = null;
  VY_UKUR.forEach(u => { if (h[u[0]] < VY_LOLOS && (!st || h[u[0]] < h[st])) st = u[0]; });
  if (!st) return null;
  let slot = null, rugi = -1;
  VY_SLOT.forEach(sl => { const i = sl.st.indexOf(st); if (i < 0) return; const r = sl.max[st] * (10 - VY_FIT[sl.k][v.pilih[sl.k]][i]) / 10; if (r > rugi) { rugi = r; slot = sl.k; } });
  return { stat:st, slot:slot };
}
function saranVy(k) {   // bahan dengan nilai total terbaik untuk bagian ini
  const sl = VY_SLOT.find(s => s.k === k), nilai = b => sl.st.reduce((a, x, i) => a + sl.max[x] * VY_FIT[k][b][i], 0);
  return Object.keys(VY_FIT[k]).sort((a, b) => nilai(b) - nilai(a))[0];
}

/* ---------- gambar ---------- */
function vyDefs() {
  const pola = (id, w, h, isi, rot) => '<pattern id="vy-p-' + id + '" width="' + w + '" height="' + h + '" patternUnits="userSpaceOnUse"' + (rot ? ' patternTransform="rotate(' + rot + ')"' : '') + '>' + isi + '</pattern>';
  return '<defs><linearGradient id="vyLangit" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fbdf0"/><stop offset="1" stop-color="#e9f7ff"/></linearGradient>' +
    '<linearGradient id="vyLaut" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2186c0"/><stop offset="1" stop-color="#07335a"/></linearGradient>' +
    pola('bambu', 14, 14, '<rect width="14" height="14" fill="#d9e283"/><path d="M0 7H14" stroke="#b7c24f" stroke-width="1.4"/><path d="M5 0V14" stroke="#7f8f2c" stroke-width="1.6"/>') +
    pola('kayu', 20, 10, '<rect width="20" height="10" fill="#a96a3b"/><path d="M0 3Q5 1 10 3T20 3M0 8Q5 6 10 8T20 8" stroke="#6b3f1c" stroke-width="1" fill="none"/>') +
    pola('tali', 8, 8, '<rect width="8" height="8" fill="#dcc189"/><path d="M0 4H8" stroke="#8c6b34" stroke-width="2"/>', 35) +
    pola('daun', 8, 8, '<rect width="8" height="8" fill="#cbc26d"/><path d="M0 0L8 8M8 0L0 8" stroke="#8b8a3a" stroke-width="1"/><path d="M4 0V8M0 4H8" stroke="#ece49a" stroke-width=".8"/>') +
    pola('kulit', 16, 16, '<rect width="16" height="16" fill="#8a5a3a"/><circle cx="4" cy="5" r="2.5" fill="#5b3820"/><circle cx="11" cy="11" r="3" fill="#6d4429"/>') +
    pola('batu', 12, 12, '<rect width="12" height="12" fill="#9b9b9b"/><circle cx="3" cy="3" r="1.4" fill="#666"/><circle cx="9" cy="8" r="1.8" fill="#777"/>') + '</defs>';
}
const vyIsi = b => 'url(#vy-p-' + b + ')';

function vyBagian(v, o) {
  const p = v.pilih, HULL = 'M92 120 Q100 156 148 160 L252 160 Q300 156 308 120 Q200 134 92 120 Z',
    FLOAT = 'M112 172 Q116 163 130 163 H270 Q284 163 288 172 Q284 181 270 181 H130 Q116 181 112 172Z', SAIL = 'M206 38 L206 120 L290 120 Q272 70 206 38 Z',
    TALI = [[141, 127], [259, 127], [150, 166], [250, 166], [200, 124]], BOOM = 'M141 126L150 168M259 126L250 168';
  const g = (k, i, isi) => '<g class="vy-bg' + (o.rakit ? ' vy-rakit' : '') + (o.aktif && v.slot === k ? ' vy-aktif' : '') + (o.sorot === k ? ' vy-sorot' : '') + (o.ganti === k ? ' vy-ganti' : '') +
    '" data-slot="' + k + '"' + (o.rakit ? ' style="animation-delay:' + (i * .7) + 's"' : '') + '>' + isi + '</g>';
  const orang = '<circle cx="128" cy="99" r="6" fill="#f0c8a0"/><rect x="122" y="105" width="13" height="17" rx="5" fill="#d8232a"/>' +
    '<circle cx="152" cy="101" r="5" fill="#f0c8a0"/><rect x="147" y="106" width="11" height="15" rx="4" fill="#2f7ce8"/>' +
    '<rect x="228" y="106" width="28" height="17" rx="2" fill="#c98f4d" stroke="#6b3f1c" stroke-width="2"/><path d="M228 114H256M242 106V123" stroke="#6b3f1c" stroke-width="1.5"/>';
  const lam = p.lambung
    ? '<path d="' + HULL + '" fill="' + vyIsi(p.lambung) + '" stroke="' + VY_GARIS[p.lambung] + '" stroke-width="3" stroke-linejoin="round"/><path d="M104 125Q200 137 296 125" stroke="#fff" stroke-opacity=".28" stroke-width="3" fill="none"/>' + orang
    : '<path d="' + HULL + '" class="vy-hantu"/><text x="200" y="147" class="vy-ht" text-anchor="middle">Lambung?</text>';
  const lay = '<path d="M200 128V34" stroke="#6b4a2a" stroke-width="5" stroke-linecap="round"/>' + (p.layar
    ? '<path d="' + SAIL + '" fill="' + vyIsi(p.layar) + '" stroke="' + VY_GARIS[p.layar] + '" stroke-width="2.5" stroke-linejoin="round"/><path d="M206 120H290" stroke="#6b4a2a" stroke-width="4" stroke-linecap="round"/>'
    : '<path d="' + SAIL + '" class="vy-hantu"/><text x="250" y="104" class="vy-ht" text-anchor="middle">Layar?</text>');
  const cad = p.cadik
    ? '<path d="' + BOOM + '" stroke="#2b1a0c" stroke-opacity=".6" stroke-width="9" stroke-linecap="round"/><path d="' + BOOM + '" stroke="' + VY_SOLID[p.cadik] + '" stroke-width="5.5" stroke-linecap="round"/><path d="' + FLOAT + '" fill="' + vyIsi(p.cadik) + '" stroke="' + VY_GARIS[p.cadik] + '" stroke-width="3"/>'
    : '<path d="' + BOOM + '" class="vy-hantu"/><path d="' + FLOAT + '" class="vy-hantu"/><text x="200" y="176" class="vy-ht" text-anchor="middle">Cadik?</text>';
  const ikt = TALI.map(t => p.pengikat
    ? '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="7" fill="' + vyIsi(p.pengikat) + '" stroke="' + VY_GARIS[p.pengikat] + '" stroke-width="2.5"/>'
    : '<circle cx="' + t[0] + '" cy="' + t[1] + '" r="7" class="vy-hantu"/>').join('') + (p.pengikat ? '' : '<text x="200" y="198" class="vy-ht" text-anchor="middle">Pengikat?</text>');
  return g('lambung', 0, lam) + g('layar', 3, lay) + g('cadik', 1, cad) + g('pengikat', 2, ikt);
}

function vyStatus(v) {
  if (v.fase === 'rancang') return v.perbaiki ? '🔧 Bengkel perbaikan' : '✏️ Bengkel perahu: ketuk bagian perahu';
  if (v.fase === 'bangun') return '🔨 Perahu sedang dirakit…';
  if (v.fase === 'uji') return '🌊 Uji coba di laut…';
  if (v.lulus) return '🏝️ Tiba di pulau tujuan!';
  return { balik:'🌀 Perahu terbalik', tenggelam:'🫧 Perahu tenggelam', tiba:'⚠️ Sampai, tetapi belum layak' }[v.hasilTipe];
}

function vyAdegan(v) {
  const uji = v.fase === 'uji', akhir = v.fase === 'hasil' || v.fase === 'selesai', t = v.hasilTipe;
  const kPos = uji ? ' jalan-' + t : akhir ? ' akhir-' + t : '', kRot = t === 'balik' && (uji || akhir) ? (uji ? ' jalan-balik' : ' akhir-balik') : '';
  const gaya = uji ? ' style="--d:' + v.durasi + 's"' : '';
  const o = { aktif:v.fase === 'rancang', rakit:v.fase === 'bangun', ganti:v.ganti, sorot:v.fase === 'rancang' && v.perbaiki && v.lemah ? v.lemah.slot : '' };
  const ombak = 'M-80 148q20-8 40 0' + ' t40 0'.repeat(15) + 'V232H-80Z';
  const pulau = '<path d="M316 148Q340 114 400 120V148Z" fill="#3f8f4f"/><path d="M332 148Q356 128 400 132V148Z" fill="#2f7a40"/><path d="M376 130V104" stroke="#6b4a2a" stroke-width="3"/>' +
    '<path d="M376 104q-14-4-20 6M376 104q14-4 20 6M376 104q-6-12-18-10M376 104q8-12 20-8" stroke="#2f9e5b" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<text x="366" y="143" class="vy-ht" text-anchor="middle" style="font-size:9px">Pulau tujuan</text>';
  return '<svg class="vy-svg" viewBox="0 0 400 230" role="img" aria-label="Adegan laut: perahu bercadik dan pulau tujuan">' + vyDefs() +
    '<rect width="400" height="230" fill="url(#vyLangit)"/><circle cx="46" cy="40" r="20" fill="#ffe38a"/>' +
    '<g fill="#fff" opacity=".8"><ellipse cx="130" cy="34" rx="30" ry="9"/><ellipse cx="152" cy="29" rx="20" ry="8"/><ellipse cx="300" cy="52" rx="28" ry="8"/></g>' + pulau +
    '<rect y="146" width="400" height="84" fill="url(#vyLaut)"/>' +
    '<g class="vy-pos' + kPos + '"' + gaya + '><g class="vy-bob"><g class="vy-rot' + kRot + '"' + gaya + '>' + vyBagian(v, o) + '</g></g></g>' +
    '<g class="vy-ombak"><path d="' + ombak + '" fill="#3aa0d8" fill-opacity=".5"/></g></svg>' +
    '<span class="vy-status" id="vyStatus" aria-live="polite">' + vyStatus(v) + '</span>';
}

/* ---------- panel ---------- */
function vyBars(h, anim, kosong) {
  return '<div class="vy-bars">' + VY_UKUR.map((u, i) => {
    const n = h ? h[u[0]] : 0, ok = n >= VY_LOLOS;
    return '<div class="vy-bar ' + (kosong ? '' : ok ? 'ok' : 'bad') + '"><span class="vy-bl">' + u[2] + ' ' + u[1] + '</span><div class="vy-bt">' +
      (kosong ? '' : '<i style="width:' + n + '%;' + (anim ? 'animation-delay:' + (i * .18) + 's' : 'animation:none') + '"></i>') +
      '<span class="vy-tanda" style="left:' + VY_LOLOS + '%"></span></div><b>' + (kosong ? '…' : n + '%') + '</b></div>';
  }).join('') + '</div><p class="vy-legenda">Garis tegak = batas lolos (' + VY_LOLOS + '%)</p>';
}
function vyCatatan(v) {
  return '<ul class="vy-cat">' + VY_SLOT.map(sl => {
    const b = v.pilih[sl.k], t = vyTingkat(sl.k, b), st = t >= .75 ? 'ok' : t >= .4 ? 'sedang' : 'buruk';
    return '<li class="' + st + '"><span aria-hidden="true">' + (st === 'ok' ? '✅' : st === 'sedang' ? '⚠️' : '❌') + '</span><div><b>' + sl.n + ' dari ' + VY_BAHAN[b].n + '</b>' + sl.alasan[b] + '</div></li>';
  }).join('') + '</ul>';
}
function vyLacak(v) {
  const L = [['✏️', 'Design', 'Pilih bahan'], ['🔨', 'Build', 'Rakit perahu'], ['🌊', 'Test', 'Uji di laut'], ['🔧', 'Improve', 'Perbaiki']];
  const cur = v.fase === 'selesai' || (v.fase === 'hasil' && v.lulus) ? 9 : v.fase === 'rancang' ? (v.perbaiki ? 3 : 0) : v.fase === 'bangun' ? 1 : 2;
  return '<ol class="vy-lacak" aria-label="Tahap rekayasa">' + L.map((x, k) => {
    const d = cur !== k && (k < cur || (k === 3 && v.uji >= 2));
    return '<li class="' + (cur === k ? 'now' : d ? 'done' : '') + '"' + (cur === k ? ' aria-current="step"' : '') + '><span class="vy-lik">' + (d ? '✓' : x[0]) + '</span><span><b>' + x[1] + '</b><small>' + x[2] + '</small></span></li>';
  }).join('') + '</ol><p class="vy-hud"><span>🔧 Uji gagal: <b>' + v.gagal + '</b> (XP penuh bila tidak lebih dari ' + MISI[S.i].toleransi + ')</span></p>';
}

function vyKanan(v) {
  const nama = k => VY_SLOT.find(s => s.k === k).n;
  const msg = v.pesan ? '<div class="vy-msg ' + (v.tipe || '') + '" role="status">' + v.pesan + '</div>' : '';
  if (v.fase === 'rancang') {
    const sl = VY_SLOT.find(s => s.k === v.slot), terisi = VY_SLOT.filter(s => v.pilih[s.k]).length, lengkap = terisi === VY_SLOT.length, L = v.lemah;
    const atas = v.perbaiki && v.hasil
      ? '<div class="vy-ringkas"><b>🔧 Hasil uji terakhir</b>' + vyBars(v.hasil, false) + (L ? '<p><b>Masalah:</b> ' + VY_MASALAH[L.stat] + ' Bagian yang paling berpengaruh: <b>' + nama(L.slot) + '</b>.</p>' : '') +
        (L && v.gagal >= 3 ? '<p class="vy-saran">🆘 <b>Saran insinyur:</b> coba pakai <b>' + VY_BAHAN[saranVy(L.slot)].n + '</b> untuk ' + nama(L.slot) + '.</p>' : '') + '</div>' : '';
    return atas + '<p class="vy-judul">Pilih bahan untuk <u>' + sl.n + '</u>:</p>' +
      '<div class="vy-slots" role="tablist" aria-label="Bagian perahu">' + VY_SLOT.map(s => '<button class="vy-slot' + (s.k === v.slot ? ' on' : '') + (v.pilih[s.k] ? ' isi' : '') + (v.perbaiki && L && L.slot === s.k ? ' sorot' : '') +
        '" role="tab" aria-selected="' + (s.k === v.slot) + '" data-s="' + s.k + '"><span class="vy-sik">' + s.ik + '</span><b>' + s.n + '</b><small>' + (v.pilih[s.k] ? VY_BAHAN[v.pilih[s.k]].ik + ' ' + VY_BAHAN[v.pilih[s.k]].n : 'Kosong') + '</small></button>').join('') + '</div>' +
      '<p class="vy-fungsi"><b>🔎 Fungsi ' + sl.n + ':</b> ' + sl.fungsi + '</p>' +
      '<div class="vy-bahan">' + Object.keys(VY_BAHAN).map(b => { const B = VY_BAHAN[b], on = v.pilih[v.slot] === b;
        return '<button class="vy-bhn' + (on ? ' on' : '') + '" data-b="' + b + '" aria-pressed="' + on + '"><span class="vy-bik" aria-hidden="true">' + B.ik + '</span><span class="vy-bnm"><b>' + B.n + '</b>' + (B.ket ? ' <em>' + B.ket + '</em>' : '') +
          '<span class="vy-chips">' + B.sifat.map(x => '<i>' + x + '</i>').join('') + '</span></span></button>'; }).join('') + '</div>' + msg +
      (lengkap ? '' : '<p class="vy-sisa">Isi semua bagian dulu (' + terisi + ' dari ' + VY_SLOT.length + ' terisi).</p>') +
      '<div class="vy-aksi"><button class="vy-btn gold" id="vyBangun"' + (lengkap ? '' : ' disabled') + '>🔨 ' + (v.perbaiki ? 'Bangun ulang' : 'Bangun perahu') + '</button><button class="vy-btn" id="vyTip">💡 Petunjuk</button></div>';
  }
  if (v.fase === 'bangun') {
    return '<p class="vy-judul">🔨 Merakit perahu…</p><ul class="vy-rakit-l">' + VY_SLOT.map((s, i) => '<li class="' + (v.bangun > i ? 'ok' : '') + '"><span aria-hidden="true">' + (v.bangun > i ? '✅' : '⏳') + '</span>' +
      s.n + ' dari ' + VY_BAHAN[v.pilih[s.k]].n + '</li>').join('') + '</ul>' +
      '<p class="vy-fakta">💡 Perahu Austronesia kuno dirakit dari papan yang diikat tali dan pasak kayu, tanpa paku besi. Cadik adalah ciri khasnya.</p>' +
      '<div class="vy-aksi"><button class="vy-btn gold" id="vyUji"' + (v.bangun >= VY_SLOT.length ? '' : ' disabled') + '>🌊 Uji di laut</button></div>';
  }
  if (v.fase === 'uji') {
    return '<p class="vy-judul">🌊 Uji coba di laut</p><p class="vy-info">Perahumu berlayar menuju pulau seberang. Amati apakah perahu tetap seimbang, mengapung, dan sampai.</p>' + vyBars(null, false, true);
  }
  const h = v.hasil, rata = Math.round(VY_UKUR.reduce((a, u) => a + h[u[0]], 0) / VY_UKUR.length), L = v.lemah;
  const judul = v.lulus ? '<div class="vy-hasil ok">🎉 Perahumu lolos uji dan sampai di pulau seberang!</div>'
    : '<div class="vy-hasil bad">' + { balik:'🌀 Perahu terbalik di tengah ombak!', tenggelam:'🫧 Perahu tenggelam sebelum sampai!', tiba:'⚠️ Perahu sampai, tetapi belum layak berlayar jauh.' }[v.hasilTipe] + '</div>';
  return judul + '<p class="vy-judul">Hasil Uji:</p>' + vyBars(h, true) + '<p class="vy-skor">Kualitas rancangan: <b>' + rata + '%</b></p>' +
    '<p class="vy-judul">Catatan insinyur:</p>' + vyCatatan(v) +
    (v.lulus ? '' : (L ? '<p class="vy-info"><b>Yang perlu diperbaiki:</b> ' + VY_MASALAH[L.stat] + ' Periksa bagian <b>' + nama(L.slot) + '</b>.</p>' : '') +
      '<div class="vy-aksi"><button class="vy-btn gold" id="vyPerbaiki">🔧 Perbaiki rancangan</button></div>');
}

/* ---------- alur ---------- */
function gambarVy(m) {
  $('area').innerHTML = '<div class="vy"><p class="vy-target">🎯 <b>Target:</b> rancang perahu bercadik yang bisa membawa keluarga dan bekal ke pulau seberang. Semua hasil uji harus minimal ' + VY_LOLOS + '%.</p>' +
    '<div id="vyLacak"></div><div class="vy-grid"><div class="vy-adegan" id="vyAdegan"></div><div class="vy-kanan" id="vyKanan"></div></div></div>';
  segarAdegan(m); segarKanan(m);
}
function segarAdegan(m) {
  const v = vy; $('vyAdegan').innerHTML = vyAdegan(v); v.ganti = '';
  $('vyAdegan').querySelectorAll('[data-slot]').forEach(g => g.onclick = () => {
    if (v.fase !== 'rancang') return;
    v.slot = g.dataset.slot; v.pesan = ''; v.tipe = '';
    $('vyAdegan').querySelectorAll('[data-slot]').forEach(x => x.classList.toggle('vy-aktif', x.dataset.slot === v.slot));
    segarKanan(m);
  });
}
function segarKanan(m) {
  const v = vy; $('vyLacak').innerHTML = vyLacak(v); $('vyKanan').innerHTML = vyKanan(v);
  const A = $('vyKanan'), klik = (id, f) => { const e = $(id); if (e) e.onclick = f; };
  A.querySelectorAll('.vy-slot').forEach(b => b.onclick = () => {
    v.slot = b.dataset.s; v.pesan = ''; v.tipe = '';
    $('vyAdegan').querySelectorAll('[data-slot]').forEach(x => x.classList.toggle('vy-aktif', x.dataset.slot === v.slot));
    segarKanan(m);
  });
  A.querySelectorAll('.vy-bhn').forEach(b => b.onclick = () => {
    v.pilih[v.slot] = b.dataset.b; v.ganti = v.slot; v.pesan = ''; v.tipe = '';
    if (!v.perbaiki) { const n = VY_SLOT.find(s => !v.pilih[s.k]); if (n) v.slot = n.k; }
    segarAdegan(m); segarKanan(m);
  });
  klik('vyTip', () => { const sl = VY_SLOT.find(s => s.k === v.slot); v.pesan = '💡 <b>Petunjuk ' + sl.n + ':</b> ' + sl.tip; v.tipe = 'info'; segarKanan(m); });
  klik('vyBangun', () => mulaiBangun(m));
  klik('vyUji', () => mulaiUji(m));
  klik('vyPerbaiki', () => { v.fase = 'rancang'; v.perbaiki = true; v.slot = v.lemah ? v.lemah.slot : 'lambung'; v.pesan = ''; v.tipe = ''; gambarVy(m); });
}

function mulaiBangun(m) {
  const v = vy, r = ++vyRun; v.fase = 'bangun'; v.run = r; v.pesan = ''; v.bangun = vyKurang() ? VY_SLOT.length : 0;
  gambarVy(m);
  if (v.bangun >= VY_SLOT.length) return;
  VY_SLOT.forEach((_, n) => setTimeout(() => { if (vy !== v || v.run !== r || v.fase !== 'bangun') return; v.bangun = n + 1; segarKanan(m); }, (n + 1) * 700));
}

function mulaiUji(m) {
  const v = vy, r = ++vyRun, h = hitungVy(v.pilih);
  v.run = r; v.uji++; v.hasil = h; v.pesan = ''; v.fase = 'uji';
  v.hasilTipe = h.apung < 40 ? 'tenggelam' : h.stab < 45 ? 'balik' : 'tiba';
  v.durasi = v.hasilTipe === 'tiba' ? +(4.6 - h.kec / 100 * 2.4).toFixed(1) : 3.4;   // makin cepat perahu, makin singkat pelayarannya
  if (vyKurang()) return selesaiUji(m);
  gambarVy(m);
  setTimeout(() => { if (vy !== v || v.run !== r || v.fase !== 'uji') return; selesaiUji(m); }, v.durasi * 1000 + 700);
}

function selesaiUji(m) {
  const v = vy; v.fase = 'hasil'; v.lulus = VY_UKUR.every(u => v.hasil[u[0]] >= VY_LOLOS); v.pesan = '';
  if (!v.lulus) { salah++; v.gagal++; v.lemah = lemahVy(v); gambarVy(m); return; }
  v.lemah = null; S.vyDesain = Object.assign({}, v.pilih); gambarVy(m); konfeti(); periksa(true);
  const n = salah === 0 ? 3 : (salah <= m.toleransi ? 2 : 1);
  $('fb').insertAdjacentHTML('afterbegin', '<p class="dt-bintang" role="img" aria-label="' + n + ' dari 3 bintang">' + '⭐'.repeat(n) + '☆'.repeat(3 - n) + '</p>');
}

function gambarPeta(m) {
  const pins = m.peta.pin.map(p => '<span class="pin" style="top:' + p[1] + '%;left:' + p[2] + '%">' + p[0] + '</span>').join('');
  $('area').innerHTML = '<div class="peta"><div class="pmap"><img src="' + m.peta.gambar + '" alt="Peta migrasi">' + pins + '</div>' +
    '<div class="ppanel"><p class="m-tanya">' + m.tanya + '</p><div class="m-opsi">' +
    m.opsi.map((o, k) => '<button class="opt' + (pilihan.includes(k) ? ' pilih' : '') + (ditolak.includes(k) ? ' salah' : '') + '" data-k="' + k + '"' + (ditolak.includes(k) ? ' disabled' : '') + '>' + o + '</button>').join('') +
    '</div><div class="pbtns"><button class="pbtn" id="pcek"' + (pilihan.length ? '' : ' disabled') + '>Cek</button><button class="pbtn" id="ppetunjuk">Petunjuk</button></div></div></div>';
  document.querySelectorAll('.opt').forEach(b => b.onclick = () => { pilihan = [+b.dataset.k]; gambarPeta(m); });
  $('pcek').onclick = () => periksa(pilihan[0] === m.benar);
  $('ppetunjuk').onclick = () => { $('fb').innerHTML = '<div class="m-fb"><b>Petunjuk:</b> ' + m.petunjuk + '</div>'; };
}

function periksa(benar) {
  const m = MISI[S.i];
  if (benar) {
    const xp = salah <= (m.toleransi || 0) ? m.xp : Math.round(m.xp / 2);
    S.xp[S.i] = xp;
    if (!S.bukti.includes(m.bukti)) S.bukti.push(m.bukti);
    simpan(); renderAtas();
    return tampilBenar(m, xp);
  }
  salah++;
  if (m.tipe === 'peta') { ditolak.push(pilihan[0]); pilihan = []; gambarPeta(m); }
  if (m.tipe === 'pilih') {
    document.querySelectorAll('.opt')[pilihan[0]].classList.add('salah');
    document.querySelectorAll('.opt')[pilihan[0]].disabled = true;
  }
  $('fb').innerHTML = '<div class="m-fb no"><b>Belum tepat.</b> Baca ceritanya sekali lagi lalu coba lagi. XP misi ini jadi setengah.</div>';
}

function tampilBenar(m, xp) {
  if (xp == null) xp = S.xp[S.i];
  document.querySelectorAll('.opt').forEach((b, k) => {
    b.disabled = true;
    const bn = m.tipe === 'multi' ? m.benar.includes(k) : k === m.benar;
    if (bn) b.classList.add('benar');
  });
  document.querySelectorAll('.pbtn,.lb-kartu').forEach(b => b.disabled = true);
  if (m.tipe === 'urut') $('area').innerHTML = '<div class="slots">' + m.item.map(t => '<div class="slot isi">' + t + '</div>').join('') + '</div>';
  const lencana = LENCANA[S.i] ? ' Lencana baru: ' + LENCANA[S.i][0] + ' ' + LENCANA[S.i][1] + '.' : '';
  $('fb').innerHTML = '<div class="m-fb ok"><b>Benar! +' + xp + ' XP.</b>' + lencana + '<br>' + m.jelas + '</div>';
  const akhir = S.i === MISI.length - 1;
  $('aksi').innerHTML = '<button class="m-btn" id="lanjut">' + (akhir ? 'Lihat hasil akhir' : 'Misi berikutnya') + '</button>';
  $('lanjut').onclick = () => { if (akhir) S.akhir = true; else S.i++; simpan(); mulai(); };
}

function renderAkhir() {
  const lc = Object.keys(LENCANA).filter(k => S.xp[k] != null).map(k => LENCANA[k][0] + ' ' + LENCANA[k][1]);
  if (selesai() === MISI.length) lc.push('🏅 Chronos Master');
  $('stage').innerHTML = '<div class="akhir"><h2>🏆 Selamat, Misi Selesai!</h2>' +
    '<div class="skor"><div><b>' + totalXP() + '</b>XP dari ' + TOTAL + '</div><div><b>' + selesai() + '/' + MISI.length + '</b>Misi</div><div><b>' + S.bukti.length + '</b>Bukti</div></div>' +
    '<p class="m-tanya">Lencanamu</p><div>' + (lc.map(x => '<span class="m-tag" style="margin:.15rem">' + x + '</span>').join('') || '-') + '</div>' +
    '<p class="m-tanya" style="margin-top:1.2rem">Refleksi</p>' +
    '<label for="r0">Bukti apa yang paling membantu penyelidikanmu, dan mengapa?</label><textarea class="m-ta" id="r0"></textarea>' +
    '<label for="r1">Bagaimana sains, teknologi, rekayasa, dan matematika membantumu memahami sejarah?</label><textarea class="m-ta" id="r1"></textarea>' +
    '<button class="m-btn" id="salin">Salin jawaban refleksi</button> <button class="m-btn alt" id="ulang">Main ulang</button>' +
    '<p class="m-cerita" id="info" hidden></p></div>';
  ['r0', 'r1'].forEach((id, k) => { $(id).value = S.ref[k] || ''; $(id).oninput = () => { S.ref[k] = $(id).value; simpan(); }; });
  $('salin').onclick = () => {
    const t = 'REFLEKSI CHRONOS (' + $('pNama').textContent + ', ' + totalXP() + ' XP)\n1. ' + S.ref[0] + '\n2. ' + S.ref[1];
    const info = $('info'); info.hidden = false;
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(
      () => info.textContent = 'Tersalin. Tempel ke Google Form atau jurnal dari gurumu.',
      () => info.textContent = 'Gagal menyalin otomatis. Blok dan salin teks refleksimu secara manual.');
  };
  $('ulang').onclick = () => {
    if (!confirm('Mulai dari awal? XP, lencana, dan refleksimu di perangkat ini akan dihapus.')) return;
    S = { i:0, xp:{}, bukti:[], ref:['',''], akhir:false }; MISI.forEach(m => delete m._pool);
    simpan(); mulai();
  };
}

if (S.akhir && selesai() < MISI.length) S.akhir = false;
if (S.i > selesai()) S.i = selesai();
mulai();