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
  { ikon:'📈', judul:'Data Hunter', penuh:'Misi 6 – Data Hunter (Pemburu Data)', tag:'Mathematics', xp:100, tipe:'data', toleransi:3,
    cerita:'Kelompok migran berlayar dengan perahu bercadik dan mencatat jarak tiap etape. Olah datanya: hitung dengan kalkulator, buat grafik batang, lalu susun linimasa perjalanan di peta.',
    caption:'Mengolah data, membuat grafik, menghitung jarak, dan menyusun timeline (Mathematics).',
    jelas:'Kamu sudah mengolah data seperti ahli matematika sejarah: menjumlahkan jarak (3.500 km), mencari rata-rata (875 km per etape), menggambar grafik batang, lalu memakai rumus waktu = jarak ÷ kecepatan untuk menyusun linimasa 28 hari. Grafik membantu melihat pola sekilas, misalnya jarak tiap etape yang bertambah 250 km.',
    bukti:'📊 Grafik jarak perjalanan' },
  { ikon:'🧩', judul:'Migration Puzzle', penuh:'Misi 7 – Migration Puzzle', tag:'Integrasi STEM', xp:100, tipe:'migrasi', toleransi:3,
    caption:'Menyusun alur berpikir sejarah dari bukti hingga kesimpulan (Integrasi STEM).',
    jelas:'Jembatan penalaranmu sudah tersambung dari bukti sampai kesimpulan. Kesimpulan yang kuat berdiri di atas bukti dan data yang dianalisis, dan selalu terbuka untuk diperbaiki bila ada temuan baru.',
    bukti:'🧩 Alur bernalar sejarah' },
  { ikon:'🏁', judul:'Final Mission: The Last Evidence', penuh:'Misi 8 – Final Mission: The Last Evidence', tag:'Semua kemampuan STEM', xp:100, tipe:'final', toleransi:5,
    caption:'Memecahkan kasus baru dengan semua kemampuan STEM yang sudah kamu pelajari (Science, Technology, Engineering, Mathematics).',
    jelas:'Kamu memecahkan kasus dari awal sampai akhir: menyaring bukti, mengolah data, membaca peta, merancang pelayaran, berargumentasi, lalu memperbarui kesimpulan saat ada temuan baru. Begitulah sejarawan dan ilmuwan bekerja bersama.',
    bukti:'🔍 Berkas kasus Gua Batu Layar' }
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

  renderBag();
}

function mulai() { salah = 0; pilihan = []; urutan = []; ditolak = []; lab = { sel:-1, step:0, hot:[], msg:'' }; det = baruDet(); ex = baruEx(); vy = baruVy(); dh = baruDh(); mg = baruMg(); fn = baruFn(); render(); }

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
  h += (m.tipe === 'peta' || m.tipe === 'lab' || m.tipe === 'detektif' || m.tipe === 'ekspedisi' || m.tipe === 'perahu' || m.tipe === 'data' || m.tipe === 'migrasi' || m.tipe === 'final' ? '' : '<p class="m-tanya">' + m.tanya + '</p>') + '<div id="area"></div><div id="fb"></div><div id="aksi"></div>' +
       (m.caption ? '<p class="m-cap">' + m.caption + '</p>' : '');
  $('stage').innerHTML = h;
  if (sudah) { if (m.tipe === 'peta') gambarPeta(m); if (m.tipe === 'lab') { S.labDone = [0,1,2,3]; gambarLab(m); } if (m.tipe === 'detektif') { det = selesaiDet(); gambarDet(m); } if (m.tipe === 'ekspedisi') { ex = selesaiEx(); gambarEx(m); } if (m.tipe === 'perahu') { vy = selesaiVy(); gambarVy(m); } if (m.tipe === 'data') { dh = selesaiDh(); gambarDh(m); } if (m.tipe === 'migrasi') { mg = selesaiMg(); gambarMg(m); } if (m.tipe === 'final') { fn = selesaiFn(); gambarFn(m); } return tampilBenar(m); }
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
  if (m.tipe === 'data') return gambarDh(m);
  if (m.tipe === 'migrasi') return gambarMg(m);
  if (m.tipe === 'final') return gambarFn(m);
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

/* ===== Misi 6: Data Hunter (Kalkulator - Grafik - Peta) =====
   Cerita: kelompok migran berlayar dengan perahu bercadik (Misi 5) menyusuri rute A-E (Misi 1).
   Ronde 1: hitung data dengan kalkulator. Ronde 2: buat grafik batang dan baca polanya.
   Ronde 3: pakai waktu = jarak / kecepatan (Misi 4) untuk menyusun linimasa di peta.
   Semua angka ada di DH_DATA / DH_KEC / DH_Q1 / DH_Q2, jadi mudah kamu ubah. */
const DH_KEC = 125;                                  // km per hari
const DH_DATA = [['A', 'B', 500], ['B', 'C', 750], ['C', 'D', 1000], ['D', 'E', 1250]];
const DH_STEP = 250, DH_MAKS = 6;                    // tiap kotak grafik = 250 km, tinggi maksimal 6 kotak
const DH_JML = [3, 2, 4];                            // jumlah pertanyaan tiap ronde
const DH_P = [[40, 105], [120, 62], [205, 108], [285, 58], [362, 98]];   // posisi titik A-E pada peta
const fmtDh = n => n.toLocaleString('id-ID');
const DH_CUM = (() => { let h = 0; return DH_DATA.map(d => (h += d[2] / DH_KEC)); })();   // hari tiba: 4, 10, 18, 28
const DH_TOTAL = DH_DATA.reduce((a, d) => a + d[2], 0);

const DH_Q1 = [
  { t:'Berapa total jarak perjalanan dari A sampai E?', o:['2.500 km', '3.000 km', '3.500 km', '4.000 km'], b:'3.500 km',
    e:'500 + 750 + 1.000 + 1.250 = 3.500 km.', h:'Jumlahkan keempat jarak etape. Kalkulator di samping boleh dipakai.' },
  { t:'Berapa rata-rata jarak tiap etape? (total jarak dibagi banyak etape)', o:['750 km', '875 km', '900 km', '1.000 km'], b:'875 km',
    e:'3.500 ÷ 4 = 875 km per etape.', h:'Rata-rata = total jarak ÷ banyak etape (ada 4 etape).' },
  { t:'Perahu melaju 125 km per hari. Berapa hari yang dibutuhkan untuk etape D → E sejauh 1.250 km?', o:['8 hari', '10 hari', '12 hari', '15 hari'], b:'10 hari',
    e:'Waktu = jarak ÷ kecepatan = 1.250 ÷ 125 = 10 hari.', h:'Ingat rumus dari Misi 4: waktu = jarak ÷ kecepatan.' }
];
const DH_Q2 = [
  { t:'Lihat grafikmu. Berapa selisih jarak antara etape terpanjang dan etape terpendek?', o:['500 km', '750 km', '1.000 km', '1.250 km'], b:'750 km',
    e:'Terpanjang 1.250 km dikurangi terpendek 500 km = 750 km.', h:'Selisih berarti pengurangan: yang terbesar dikurangi yang terkecil.' },
  { t:'Jarak tiap etape bertambah 250 km dari etape sebelumnya. Jika pola ini berlanjut, berapa jarak etape berikutnya (E → F)?', o:['1.300 km', '1.500 km', '1.750 km', '1.250 km'], b:'1.500 km',
    e:'Polanya 500, 750, 1.000, 1.250, lalu 1.250 + 250 = 1.500 km. Grafik batang membuat pola seperti ini terlihat sekilas.', h:'Lihat batang terakhir, lalu tambahkan selisih polanya.' }
];
function dhSoalStop(k) {   // soal ronde 3, dibuat dari DH_DATA
  const d = DH_DATA[k], e = d[2] / DH_KEC, c = DH_CUM[k], p = k ? DH_CUM[k - 1] : 0;
  const cand = [c, e, c + 2, c - 2, c + 4, c + 1].filter((v, i, a) => v > 0 && a.indexOf(v) === i).slice(0, 4);
  return { o:cand.map(v => 'hari ke-' + v), b:'hari ke-' + c, trap:k ? 'hari ke-' + e : null,
    t:k === 0 ? 'Perahu berangkat dari A pada hari ke-0 dengan kecepatan 125 km per hari. Etape A → B berjarak 500 km. Pada hari ke berapa perahu tiba di B?'
              : 'Perahu tiba di ' + d[0] + ' pada hari ke-' + p + '. Etape ' + d[0] + ' → ' + d[1] + ' berjarak ' + fmtDh(d[2]) + ' km (kecepatan 125 km per hari). Pada hari ke berapa perahu tiba di ' + d[1] + '?',
    e:d[0] + ' → ' + d[1] + ': ' + fmtDh(d[2]) + ' ÷ 125 = ' + e + ' hari. ' + (k ? p + ' + ' + e + ' = hari ke-' + c + '.' : 'Perahu tiba di B pada hari ke-' + c + '.'),
    h:'Hitung dulu lama etape ini: jarak ÷ kecepatan.' + (k ? ' Lalu tambahkan hari tiba di ' + d[0] + '.' : '') };
}

let dh = null;
const baruDh = () => ({ r:1, q:0, sal:[], ord:{}, kalk:'', baru:false, bar:[0, 0, 0, 0], cek:null, gOk:false, hari:[], pos:0, msg:'', ok:false });
const selesaiDh = () => Object.assign(baruDh(), { r:4, bar:DH_DATA.map(d => d[2] / DH_STEP), gOk:true, hari:DH_CUM.slice(), pos:DH_DATA.length });
const dhSoal = () => dh.r === 1 ? DH_Q1[dh.q] : dh.r === 2 ? DH_Q2[dh.q] : dhSoalStop(dh.q);

/* ---------- kalkulator ---------- */
function dhHitung(s) {   // hitung ekspresi sederhana (+ - * /) dengan urutan operasi yang benar, tanpa eval
  let t = s.match(/\d+\.?\d*|\.\d+|[+\-*\/]/g);
  if (!t || t.join('') !== s) return null;
  if (t[0] === '-' && t.length > 1) t.splice(0, 2, '-' + t[1]);
  const op = x => '+-*/'.includes(x) && x.length === 1;
  for (let i = 0; i < t.length; i++) if (op(t[i]) === (i % 2 === 0)) return null;   // harus berselang-seling angka dan operator
  for (let i = 1; i < t.length; i += 2) if (t[i] === '*' || t[i] === '/') {
    const a = +t[i - 1], b = +t[i + 1]; if (t[i] === '/' && b === 0) return null;
    t.splice(i - 1, 3, String(t[i] === '*' ? a * b : a / b)); i -= 2;
  }
  let r = +t[0]; for (let i = 1; i < t.length; i += 2) r = t[i] === '+' ? r + +t[i + 1] : r - +t[i + 1];
  return r;
}
function dhTekan(k) {
  const ops = '+-*/';
  if (k === 'C') { dh.kalk = ''; dh.baru = false; return; }
  if (k === 'B') { dh.kalk = dh.kalk === 'Error' ? '' : dh.kalk.slice(0, -1); return; }
  if (k === '=') {
    if (!dh.kalk || dh.kalk === 'Error') return;
    const r = dhHitung(dh.kalk.replace(/[+\-*\/]$/, '')); dh.kalk = r === null ? 'Error' : String(+r.toFixed(4)); dh.baru = true; return;
  }
  if (dh.kalk === 'Error') dh.kalk = '';
  if (ops.includes(k)) {
    if (dh.kalk === '') return;
    dh.kalk = ops.includes(dh.kalk.slice(-1)) ? dh.kalk.slice(0, -1) + k : dh.kalk + k; dh.baru = false; return;
  }
  if (dh.baru) { dh.kalk = ''; dh.baru = false; }
  if (k === '.') { const akhir = dh.kalk.split(/[+\-*\/]/).pop(); if (akhir.includes('.')) return; if (akhir === '') k = '0.'; }
  if (dh.kalk.length < 16) dh.kalk += k;
}
function dhAngka(v) {   // ketuk angka pada tabel: masuk ke kalkulator (bila sebelumnya angka, disambung dengan +)
  if (dh.baru || dh.kalk === 'Error') { dh.kalk = ''; dh.baru = false; }
  if (/[\d.]$/.test(dh.kalk)) dh.kalk += '+';
  dh.kalk += String(v);
}
const dhLayar = () => dh.kalk === '' ? '0' : dh.kalk.replace(/([+\-*\/])/g, ' $1 ').replace(/\*/g, '×').replace(/\//g, '÷').replace(/-/g, '−').replace(/\./g, ',');
function dhKalkKartu() {
  const K = [['C', 'C', 'fn'], ['B', '⌫', 'fn'], ['/', '÷', 'op'], ['*', '×', 'op'], ['7'], ['8'], ['9'], ['-', '−', 'op'], ['4'], ['5'], ['6'], ['+', '+', 'op'],
    ['1'], ['2'], ['3'], ['=', '=', 'eq'], ['0', '0', 'w2'], ['.', ',', 'w2']];
  return '<div class="dh-kartu dh-kalk"><p class="dh-judul">🧮 Kalkulator</p><div class="dh-layar" id="dhLayar" aria-live="polite">' + dhLayar() + '</div><div class="dh-keys">' +
    K.map(x => '<button class="dh-tek ' + (x[2] || '') + '" data-k="' + x[0] + '" aria-label="' + (x[1] || x[0]) + '">' + (x[1] || x[0]) + '</button>').join('') + '</div></div>';
}

/* ---------- tabel, grafik, peta ---------- */
function dhTabel(klik) {
  return '<div class="dh-kartu"><p class="dh-judul">Data Perjalanan</p><table class="dh-tab"><thead><tr><th>Etape</th><th>Rute</th><th>Jarak (km)</th></tr></thead><tbody>' +
    DH_DATA.map((d, i) => '<tr><td>' + (i + 1) + '</td><td>' + d[0] + ' → ' + d[1] + '</td><td>' +
      (klik ? '<button class="dh-ang" data-v="' + d[2] + '" title="Masukkan ke kalkulator">' + fmtDh(d[2]) + '</button>' : fmtDh(d[2])) + '</td></tr>').join('') + '</tbody></table>' +
    (klik ? '<p class="dh-sat">Ketuk angka jarak untuk memasukkannya ke kalkulator.</p>' : '') +
    '<p class="dh-kec">⛵ Kecepatan rata-rata perahu: <b>' + DH_KEC + ' km per hari</b></p></div>';
}

function dhChart(o) {   // o: { kunci: hanya baca, ghost: tampilkan batang ke-5 (prediksi), prediksi: batang ke-5 terisi }
  const lv = Array.from({ length:DH_MAKS }, (_, k) => DH_MAKS - k);
  const kol = (i, ghost) => {
    const v = ghost ? (o.prediksi ? DH_MAKS : 0) : (o.kunci ? DH_DATA[i][2] / DH_STEP : dh.bar[i]), lab = ghost ? 'E → F' : DH_DATA[i][0] + ' → ' + DH_DATA[i][1];
    const sal = !ghost && !o.kunci && dh.cek && dh.cek[i], kurang = sal && dh.bar[i] < DH_DATA[i][2] / DH_STEP;
    return '<div class="dh-kol' + (sal ? ' salah' : '') + (ghost ? ' ghost' : '') + '"><div class="dh-sel">' +
      lv.map(l => '<button class="dh-c' + (l <= v ? ' on' : '') + '" data-i="' + i + '" data-l="' + l + '"' + (o.kunci || ghost ? ' disabled' : '') + ' aria-label="Atur batang ' + lab + ' ke ' + fmtDh(l * DH_STEP) + ' km"></button>').join('') +
      '</div><span class="dh-xl">' + lab + '</span><small>' + (ghost ? (o.prediksi ? '1.500 km (prediksi)' : '?') : (v ? fmtDh(v * DH_STEP) + ' km' : '–')) + '</small>' + (sal ? '<em class="dh-pet">' + (kurang ? '↑ naikkan' : '↓ turunkan') + '</em>' : '') + '</div>';
  };
  const n = DH_DATA.length + (o.ghost ? 1 : 0);
  return '<div class="dh-chart" role="group" aria-label="Grafik batang jarak tiap etape"><div class="dh-yax" aria-hidden="true">' + lv.map(l => '<span>' + fmtDh(l * DH_STEP) + '</span>').join('') + '</div>' +
    '<div class="dh-cols" style="grid-template-columns:repeat(' + n + ',1fr)">' + DH_DATA.map((_, i) => kol(i, false)).join('') + (o.ghost ? kol(DH_DATA.length, true) : '') + '</div></div>';
}

function dhPeta() {
  const n = dh.hari.length, P = DH_P, pos = Math.min(dh.pos, DH_DATA.length);
  const seg = DH_DATA.map((d, i) => {
    const a = P[i], b = P[i + 1], cx = (a[0] + b[0]) / 2, cy = Math.min(a[1], b[1]) - 24, my = .25 * a[1] + .5 * cy + .25 * b[1];
    return '<path class="dh-rute' + (i < n ? ' on' : '') + '" d="M' + a[0] + ' ' + a[1] + ' Q' + cx + ' ' + cy + ' ' + b[0] + ' ' + b[1] + '"/><text class="dh-km" x="' + cx + '" y="' + (my - 5) + '" text-anchor="middle">' + fmtDh(d[2]) + ' km</text>';
  }).join('');
  const titik = P.map((p, i) => {
    const sudah = i === 0 || i < n + 1, nama = 'ABCDE'[i];
    return '<ellipse cx="' + p[0] + '" cy="' + (p[1] + 5) + '" rx="24" ry="9" fill="#3f8f4f" opacity=".95"/><circle cx="' + p[0] + '" cy="' + p[1] + '" r="11" fill="' + (sudah ? '#f1c453' : '#d8232a') + '" stroke="#fff" stroke-width="2.5"/>' +
      '<text x="' + p[0] + '" y="' + (p[1] + 4.5) + '" text-anchor="middle" font-size="12" font-weight="800" fill="' + (sudah ? '#1a1203' : '#fff') + '" font-family="Cinzel,serif">' + nama + '</text>' +
      (sudah ? '<text class="dh-km" x="' + p[0] + '" y="' + (p[1] + 28) + '" text-anchor="middle">Hari ' + (i === 0 ? 0 : dh.hari[i - 1]) + '</text>' : '');
  }).join('');
  return '<svg class="dh-svg" viewBox="0 0 400 150" role="img" aria-label="Peta rute pelayaran A sampai E"><defs><linearGradient id="dhLaut" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f7fb8"/><stop offset="1" stop-color="#08365c"/></linearGradient></defs>' +
    '<rect width="400" height="150" fill="url(#dhLaut)"/>' + seg + titik +
    '<g class="dh-kapal" id="dhKapal" style="transform:translate(' + P[pos][0] + 'px,' + P[pos][1] + 'px)"><text y="-19" text-anchor="middle" font-size="19">⛵</text></g></svg>';
}
function dhTimeline() {
  const maks = DH_CUM[DH_CUM.length - 1], pts = [['A', 0]].concat(dh.hari.map((h, i) => [DH_DATA[i][1], h]));
  return '<div class="dh-tl" role="img" aria-label="Linimasa perjalanan"><div class="dh-tl-trk">' + pts.map((p, i) => '<span class="dh-tl-t' + (dh.tanda && i === pts.length - 1 ? ' baru' : '') + '" style="left:' + (p[1] / maks * 100) + '%"><b>' + p[0] + '</b><small>Hari ' + p[1] + '</small></span>').join('') +
    '</div><p class="dh-tl-ket">Linimasa: makin ke kanan, makin lama perjalanan →</p></div>';
}

function dhLacak() {
  const L = [['🧮', 'Kalkulator', 'Hitung data'], ['📊', 'Grafik', 'Buat grafik'], ['🗺️', 'Peta', 'Susun linimasa']];
  return '<ol class="dh-lacak" aria-label="Tahap misi">' + L.map((x, k) => {
    const now = dh.r === k + 1, done = dh.r > k + 1;
    return '<li class="' + (now ? 'now' : done ? 'done' : '') + '"' + (now ? ' aria-current="step"' : '') + '><span class="dh-lik">' + (done ? '✓' : x[0]) + '</span><span><b>' + x[1] + '</b><small>' + x[2] + '</small></span></li>';
  }).join('') + '</ol><p class="dh-hud">Salah: <b>' + salah + '</b> (XP penuh bila tidak lebih dari ' + MISI[S.i].toleransi + ')</p>';
}

function dhSoalHtml() {
  const s = dhSoal(), key = dh.r + '-' + dh.q;
  if (!dh.ord[key]) dh.ord[key] = acak(s.o.map((_, i) => i));
  return '<p class="dh-qn">Pertanyaan ' + (dh.q + 1) + ' dari ' + DH_JML[dh.r - 1] + '</p><p class="m-tanya">' + s.t + '</p><div class="m-opsi">' +
    dh.ord[key].map((oi, k) => '<button class="opt' + (dh.sal.includes(k) ? ' salah' : '') + '" data-k="' + k + '"' + (dh.sal.includes(k) ? ' disabled' : '') + '>' + s.o[oi] + '</button>').join('') + '</div>';
}

/* ---------- tampilan & alur ---------- */
function gambarDh(m) {
  const R = dh.r, msg = dh.msg ? '<div class="dh-msg' + (dh.ok ? ' ok' : '') + '" role="status">' + dh.msg + '</div>' : '';
  const siap = dh.bar.every(v => v > 0);
  let isi = '';
  if (R === 1) isi = '<div class="dh-grid">' + dhTabel(true) + dhKalkKartu() + '</div><div class="dh-tugas">' + dhSoalHtml() + msg + '</div>';
  if (R === 2) isi = '<div class="dh-grid">' + dhTabel(false) + '<div class="dh-kartu"><p class="dh-judul">📊 Buat Grafik</p>' +
    (dh.gOk ? '<p class="dh-sat">Grafikmu sudah tepat. Sekarang bacalah polanya.</p>' : '<p class="dh-sat">Ketuk kotak pada tiap batang untuk mengatur tingginya (1 kotak = ' + DH_STEP + ' km).</p>') + dhChart({ ghost:dh.gOk }) + '</div></div>' +
    '<div class="dh-tugas">' + (dh.gOk ? dhSoalHtml() : '<p class="m-tanya">Atur tinggi tiap batang sesuai tabel Data Perjalanan, lalu tekan Cek grafik.</p><button class="m-btn" id="dhCek"' + (siap ? '' : ' disabled style="opacity:.5"') + '>📊 Cek grafik</button>') + msg + '</div>';
  if (R === 3) isi = '<div class="dh-kartu dh-peta"><p class="dh-judul">🗺️ Peta Pelayaran</p>' + dhPeta() + dhTimeline() + '</div><div class="dh-grid"><div class="dh-tugas">' + dhSoalHtml() + msg + '</div>' + dhKalkKartu() + '</div>';
  if (R === 4) {
    const maks = DH_CUM[DH_CUM.length - 1];
    isi = '<div class="dt-selesai"><span class="dt-stempel">DATA TERKUMPUL</span></div><div class="skor"><div><b>' + fmtDh(DH_TOTAL) + ' km</b>Total jarak</div><div><b>' + fmtDh(DH_TOTAL / DH_DATA.length) + ' km</b>Rata-rata per etape</div><div><b>' + maks + ' hari</b>Lama perjalanan</div></div>' +
      '<div class="dh-kartu dh-peta"><p class="dh-judul">🗺️ Peta Pelayaran</p>' + dhPeta() + dhTimeline() + '</div>' +
      '<div class="dh-kartu"><p class="dh-judul">📊 Grafik jarak tiap etape</p>' + dhChart({ kunci:true, ghost:true, prediksi:true }) + '<p class="dh-sat">Batang putus-putus adalah prediksi dari pola: bertambah 250 km tiap etape.</p></div>';
  }
  $('area').innerHTML = '<div class="dh">' + dhLacak() + isi + '</div>';
  ikatDh(m); dh.tanda = false;
  const n = dh.hari.length;   // geser perahu ke titik terakhir dengan animasi
  if (R >= 3 && dh.pos !== n) { const d = dh; setTimeout(() => { const k = $('dhKapal'); if (dh === d && k) k.style.transform = 'translate(' + DH_P[n][0] + 'px,' + DH_P[n][1] + 'px)'; d.pos = n; }, 60); }
}

function ikatDh(m) {
  const A = $('area'), segar = () => { const e = $('dhLayar'); if (e) e.textContent = dhLayar(); };
  A.querySelectorAll('.dh-tek').forEach(b => b.onclick = () => { dhTekan(b.dataset.k); segar(); });
  A.querySelectorAll('.dh-ang').forEach(b => b.onclick = () => { dhAngka(b.dataset.v); segar(); });
  A.querySelectorAll('.dh-c:not(:disabled)').forEach(b => b.onclick = () => {
    const i = +b.dataset.i, l = +b.dataset.l; dh.bar[i] = dh.bar[i] === l ? l - 1 : l; dh.cek = null; dh.msg = ''; gambarDh(m);
    const f = $('area').querySelector('.dh-c[data-i="' + i + '"][data-l="' + l + '"]'); if (f) f.focus();
  });
  const cek = $('dhCek'); if (cek) cek.onclick = () => dhCekGrafik(m);
  A.querySelectorAll('.dh-tugas .opt').forEach(b => b.onclick = () => dhJawab(m, +b.dataset.k));
}

function dhCekGrafik(m) {
  const salahBar = DH_DATA.map((d, i) => dh.bar[i] !== d[2] / DH_STEP), n = salahBar.filter(Boolean).length;
  if (!n) { dh.gOk = true; dh.cek = null; dh.ok = true; dh.msg = '✓ Grafikmu tepat! Batang yang makin tinggi menunjukkan jarak tiap etape makin jauh.'; return gambarDh(m); }
  salah++; dh.cek = salahBar; dh.ok = false;
  dh.msg = '❌ Ada ' + n + ' batang yang belum sesuai data. Cocokkan tinggi tiap batang dengan tabel (1 kotak = ' + DH_STEP + ' km), lihat tanda panahnya.';
  gambarDh(m);
}

function dhJawab(m, k) {
  const s = dhSoal(), opt = s.o[dh.ord[dh.r + '-' + dh.q][k]];
  if (opt !== s.b) {
    salah++; dh.sal.push(k); dh.ok = false;
    dh.msg = '❌ Belum tepat. ' + (s.trap && opt === s.trap ? 'Itu baru lama etapenya saja. Tambahkan hari tiba di titik sebelumnya.' : s.h);
    return gambarDh(m);
  }
  dh.ok = true; dh.msg = '✓ ' + s.e; dh.sal = [];
  if (dh.r === 3) { dh.hari.push(DH_CUM[dh.q]); dh.tanda = true; }
  dh.q++;
  if (dh.q < DH_JML[dh.r - 1]) return gambarDh(m);
  if (dh.r < 3) { dh.r++; dh.q = 0; gambarDh(m); return gulir(); }
  dh.r = 4; gambarDh(m); gulir(); konfeti(); periksa(true);
  const n = salah === 0 ? 3 : (salah <= m.toleransi ? 2 : 1);
  $('fb').insertAdjacentHTML('afterbegin', '<p class="dt-bintang" role="img" aria-label="' + n + ' dari 3 bintang">' + '⭐'.repeat(n) + '☆'.repeat(3 - n) + '</p>');
}

/* ===== Misi 7: Migration Puzzle (Jembatan Penalaran) ===== */
const MG_T = [
  { k:'Bukti', w:'#3fa35b', d:'Jejak nyata dari masa lalu yang ditemukan, misalnya fosil, alat batu, gerabah, atau DNA.', q:'Apa yang kita temukan?', ik:'<circle cx="10" cy="10" r="6" fill="none" stroke="#fff" stroke-width="2.5"/><path d="M15 15L21 21" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>' },
  { k:'Data', w:'#2f7ce8', d:'Keterangan yang bisa dicatat dan diukur dari bukti, seperti usia, lokasi, bentuk, dan jumlah.', q:'Apa yang bisa dicatat dan diukur?', ik:'<rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="#fff" stroke-width="2"/><path d="M4 11H20M10 5V19" stroke="#fff" stroke-width="2"/>' },
  { k:'Analisis', w:'#8b3fd6', d:'Membandingkan data dan mencari pola atau hubungan di antaranya.', q:'Pola apa yang tampak?', ik:'<path d="M5 19V12M12 19V6M19 19V10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>' },
  { k:'Hipotesis', w:'#e0435f', d:'Dugaan sementara yang menjelaskan pola itu. Masih harus diuji, belum tentu benar.', q:'Apa dugaan penjelasannya?', ik:'<path d="M12 3a6 6 0 0 0-3 11v3h6v-3a6 6 0 0 0-3-11Z" fill="none" stroke="#fff" stroke-width="2"/><path d="M9.5 20H14.5" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' },
  { k:'Argumentasi', w:'#f08a24', d:'Alasan dan bukti tambahan yang menguatkan hipotesis, sambil menimbang pendapat lain.', q:'Mengapa dugaan itu masuk akal?', ik:'<path d="M4 5H20V15H12L7 20V15H4Z" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"/>' },
  { k:'Kesimpulan', w:'#2f9e6a', d:'Pernyataan akhir yang paling didukung bukti, dan tetap terbuka bila ada temuan baru.', q:'Jadi, apa jawabannya?', ik:'<path d="M6 21V4M6 5H19L16 9L19 13H6" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' }
];
const MG_NAMA = ['Susun Alur', 'Terapkan pada Kasus', 'Cari Kesalahan Nalar'];
const MG_TANYA = 'Berdasarkan bukti yang tersedia, bagaimana proses persebaran manusia menuju Indonesia?';
const MG_I = [   // [pernyataan, jenis]  (jenis 0-5 = tahap, 6 = opini)
  ['Gerabah bercorak tera tali yang sama ditemukan di Taiwan, Filipina, dan Sulawesi.', 0],
  ['Gerabah di Taiwan berusia sekitar 5.000 tahun, di Filipina sekitar 4.000 tahun, dan di Sulawesi sekitar 3.500 tahun.', 1],
  ['Makin ke selatan, gerabah makin muda tetapi coraknya mirip. Temuan tertua ada di utara.', 2],
  ['Pembuat gerabah itu berpindah dari Taiwan ke arah selatan melalui Filipina menuju Nusantara.', 3],
  ['Kemiripan bahasa dan jejak genetik penduduk Nusantara sejalan dengan arah itu, dan pelayaran antarpulau yang berdekatan memang mungkin dengan perahu bercadik.', 4],
  ['Bukti sejauh ini paling mendukung persebaran penutur Austronesia dari Taiwan ke Nusantara, dan kesimpulan ini terbuka bila ada temuan baru.', 5],
  ['Menurutku semua orang Indonesia pasti datang dari Taiwan, titik.', 6]
];
const MG_OPS = [[0, 3, 6], [1, 0, 5], [2, 1, 3], [3, 2, 5], [4, 0, 1], [5, 6, 4]];   // pilihan untuk tiap tahap (yang benar = indeks tahap itu)
const MG_RANTAI = [
  { s:['Satu alat batu ditemukan di sebuah gua di Flores.', 'Alat batu itu berusia sekitar 50.000 tahun.', 'Teknik pembuatannya sederhana, dengan pangkasan kasar.', 'Pembuatnya mungkin manusia purba yang pernah tinggal di gua itu.', 'Alat itu ditemukan bersama sisa makanan dan bekas perapian.', 'Jadi, seluruh nenek moyang bangsa Indonesia berasal dari Flores.'],
    x:5, o:['Kesimpulan terlalu luas: satu temuan dipakai untuk menyimpulkan semuanya', 'Data tidak cocok dengan bukti', 'Hipotesis dianggap sudah pasti benar'], b:0,
    e:'Satu alat batu hanya menjelaskan satu tempat. Kesimpulan tentang seluruh bangsa menuntut banyak bukti dari banyak tempat.' },
  { s:['Sebuah tengkorak ditemukan di Wajak.', 'Bentuk rahang dan giginya mirip manusia modern.', 'Cirinya sama dengan ciri Homo sapiens awal.', 'Mungkin tengkorak itu milik Homo sapiens awal.', 'Karena sudah pasti Homo sapiens awal, maka ia Homo sapiens awal.', 'Jadi, Manusia Wajak adalah Homo sapiens awal.'],
    x:4, o:['Bukti terlalu sedikit', 'Alasan hanya mengulang kesimpulan yang ingin dibuktikan', 'Data diambil dari tempat lain'], b:1,
    e:'Ini disebut berputar-putar. Argumentasi yang baik memakai alasan baru, misalnya perbandingan dengan temuan lain, bukan mengulang kesimpulannya.' },
  { s:['Gerabah bercorak sama ditemukan di lima pulau.', 'Usia gerabah: 4.000, 3.800, 3.600, 3.500, dan satu pulau 6.000 tahun.', 'Semua gerabah itu berusia sekitar 4.000 tahun atau kurang.', 'Pembuatnya menyebar dari satu pusat budaya ke pulau-pulau lain.', 'Corak yang sama menunjukkan adanya hubungan antarpulau.', 'Jadi, penyebaran berasal dari satu pusat, tetapi masih perlu diuji temuan baru.'],
    x:2, o:['Memakai opini sebagai bukti', 'Menyimpulkan terlalu cepat', 'Mengabaikan data yang tidak cocok dengan dugaan'], b:2,
    e:'Data 6.000 tahun tidak boleh dibuang hanya karena tidak cocok. Data yang janggal justru perlu dijelaskan.' }
];
const baruMg = () => ({ r:1, hati:3, pet:3, hp:0, pool:null, slot:[null, null, null, null, null, null], info:-1, cek:null, bantu:false, st:0, opsi:null, hid:[], ch:0, tap:-1, msg:'', ok:false, fin:false, jalan:false });
const selesaiMg = () => Object.assign(baruMg(), { r:4, fin:true, jalan:true });
let mg = baruMg();
const mgJenis = t => t === 6 ? 'Opini' : MG_T[t].k;

function mgScene(p, jalan) {
  let s = '<svg class="mg-svg" viewBox="0 0 360 130" role="img" aria-label="Jembatan penalaran dari pertanyaan menuju kesimpulan"><defs><linearGradient id="mgS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd0ee"/><stop offset="1" stop-color="#e6f6fb"/></linearGradient><linearGradient id="mgW" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b86c8"/><stop offset="1" stop-color="#0a3560"/></linearGradient></defs>' +
    '<rect width="360" height="130" fill="url(#mgS)"/><circle cx="312" cy="24" r="12" fill="#ffe38a"/><path d="M0 92Q60 70 120 90T240 86T360 90V100H0Z" fill="#4a8f5a" opacity=".5"/><rect y="98" width="360" height="32" fill="url(#mgW)"/>' +
    '<g class="mg-ombak"><path d="M-100 104q15-6 30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0t30 0V112H-100Z" fill="#fff" opacity=".22"/></g>' +
    '<path d="M0 84H54Q60 96 54 106H0Z" fill="#4f8a3a"/><path d="M306 84H360V106H312Q304 96 306 84Z" fill="#4f8a3a"/>' +
    '<rect x="14" y="62" width="4" height="22" fill="#5a3a1e"/><rect x="5" y="46" width="28" height="18" rx="3" fill="#f4ead2"/><text x="19" y="60" font-size="14" font-weight="800" text-anchor="middle" fill="#1a1203">?</text>' +
    '<rect x="334" y="54" width="3" height="30" fill="#5a3a1e"/><path d="M337 54L357 61L337 68Z" fill="' + (p.every(Boolean) ? '#2f9e6a' : '#9aa6b2') + '"/>' +
    '<path d="M54 84Q180 66 306 84" fill="none" stroke="#8a6a34" stroke-width="1.5" opacity=".6"/>';
  p.forEach((c, k) => { const x = 62 + k * 40;
    s += c ? '<g class="mg-papan"><rect x="' + x + '" y="84" width="36" height="10" rx="2" fill="' + c + '" stroke="#3b2a18"/><text x="' + (x + 18) + '" y="92" font-size="8" font-weight="800" text-anchor="middle" fill="#fff">' + MG_T[k].k[0] + '</text></g>'
      : '<rect x="' + x + '" y="84" width="36" height="10" rx="2" fill="none" stroke="#fff" stroke-dasharray="3 3" opacity=".7"/>'; });
  if (jalan) s += '<g class="mg-karavan" fill="#2a1a10"><circle cx="30" cy="70" r="4"/><rect x="26" y="74" width="8" height="10" rx="3"/><circle cx="42" cy="72" r="3.5"/><rect x="38.5" y="76" width="7" height="8" rx="3"/><circle cx="18" cy="72" r="3.5"/><rect x="14.5" y="76" width="7" height="8" rx="3"/></g>';
  return s + '</svg>';
}

function mgBlok(k, ekstra) {
  const t = MG_T[k];
  return '<span class="mg-ik" style="background:' + t.w + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + t.ik + '</svg></span><b>' + t.k.toUpperCase() + '</b>' + (ekstra || '');
}

function gambarMg(m) {
  if (mg.fin) return mgAkhir();
  const R = mg.r, papan = MG_T.map((t, k) => R === 1 ? (mg.slot[k] != null ? MG_T[mg.slot[k]].w : null) : R === 2 ? (k < mg.st ? t.w : null) : t.w);
  const hati = '<span class="mg-hati" role="img" aria-label="Nyawa ' + mg.hati + ' dari 3">' + [0, 1, 2].map(k => '<i class="' + (k < mg.hati ? 'on' : '') + '">♥</i>').join('') + '</span>';
  let isi = '';
  if (R === 1) {
    mg.pool = mg.pool || acak([0, 1, 2, 3, 4, 5]);
    const tidur = k => mg.slot.includes(k), e = mg.slot.indexOf(null);
    isi = '<p class="mg-tg">Susun urutan proses penalaran sejarah!</p><div class="mg-grid"><div class="mg-pool">' + mg.pool.map(k => '<button class="mg-blok" draggable="true" data-k="' + k + '"' + (tidur(k) ? ' disabled' : '') + ' style="background:' + MG_T[k].w + '">' + mgBlok(k, tidur(k) ? '<em>✓</em>' : '') + '</button>').join('') + '</div>' +
      '<div class="mg-kanan"><div class="mg-kartu"><b>Contoh Pertanyaan:</b><p>' + MG_TANYA + '</p></div><p class="mg-kecil">Ketuk blok (atau seret) untuk menaruhnya berurutan. Ketuk langkah di bawah untuk melepasnya.</p><ol class="mg-slots">' +
      mg.slot.map((k, i) => '<li><button class="mg-slot' + (k != null ? ' isi' : '') + (mg.cek ? (mg.cek[i] ? ' benar' : ' salah') : '') + '" data-i="' + i + '"' + (k != null ? ' style="border-color:' + MG_T[k].w + '"' : '') + '>' + (k != null ? mgBlok(k) : '<span class="mg-kosong">' + (mg.bantu && i === e ? 'Petunjuk: “' + MG_T[i].q + '”' : 'Langkah ' + (i + 1)) + '</span>') + '</button></li>').join('') + '</ol>' +
      '<button class="pbtn gold" id="mgCek"' + (mg.slot.includes(null) ? ' disabled' : '') + '>Cek Jawaban</button></div></div>';
  }
  if (R === 2 && mg.st >= 6) isi = '<div class="mg-kartu"><b>Kasus:</b><p>' + MG_TANYA + '</p></div>';
  else if (R === 2) {
    const t = MG_T[mg.st]; mg.opsi = mg.opsi || acak(MG_OPS[mg.st]);
    isi = '<div class="mg-kartu"><b>Kasus:</b><p>' + MG_TANYA + '</p></div><div class="mg-tahap" style="border-color:' + t.w + '"><span class="mg-ik" style="background:' + t.w + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + t.ik + '</svg></span><div><b>Tahap ' + (mg.st + 1) + ' dari 6: ' + t.k + '</b><small>' + t.d + '</small></div></div>' +
      '<p class="mg-tg">Pernyataan mana yang termasuk tahap ' + t.k.toUpperCase() + '?</p><div class="mg-opsi">' + mg.opsi.map(i => '<button class="mg-pil' + (mg.hid.includes(i) ? ' mati' : '') + '" data-i="' + i + '"' + (mg.hid.includes(i) ? ' disabled' : '') + '>' + MG_I[i][0] + '</button>').join('') + '</div>';
  }
  if (R === 3) {
    const c = MG_RANTAI[mg.ch];
    isi = '<p class="mg-tg">Rantai penalaran ' + (mg.ch + 1) + ' dari ' + MG_RANTAI.length + ': satu langkah mengandung kesalahan nalar. Temukan, lalu tentukan jenis kesalahannya.</p><ol class="mg-rantai">' +
      c.s.map((x, i) => '<li><button class="mg-lang' + (mg.tap === i ? ' pilih' : '') + '" data-i="' + i + '"' + (mg.tap >= 0 ? ' disabled' : '') + ' style="border-left-color:' + MG_T[i].w + '"><span class="mg-lbl" style="background:' + MG_T[i].w + '">' + MG_T[i].k + '</span>' + x + '</button></li>').join('') + '</ol>' +
      (mg.tap >= 0 ? '<p class="mg-tg">Apa jenis kesalahan pada langkah <b>' + MG_T[mg.tap].k + '</b>?</p><div class="mg-opsi">' + c.o.map((o, i) => '<button class="mg-pil" data-j="' + i + '">' + o + '</button>').join('') + '</div>' : '');
  }
  $('area').innerHTML = '<div class="mg-head"><div><b>🧩 Ronde ' + R + '/3: ' + MG_NAMA[R - 1] + '</b><div class="ex-dots">' + [1, 2, 3].map(k => '<i class="' + (k < R ? 'done' : k === R ? 'now' : '') + '"></i>').join('') + '</div></div><div class="mg-hud">' + hati + '<button class="mg-pet" id="mgPet"' + (mg.pet > 0 ? '' : ' disabled') + '>💡 Petunjuk (' + mg.pet + ')</button></div></div>' +
    (R < 3 ? '<div class="mg-scene">' + mgScene(papan, mg.jalan) + '</div>' : '') + isi +
    (mg.msg ? '<div class="mg-msg' + (mg.ok ? ' ok' : '') + '" role="status">' + mg.msg + '</div>' : '') +
    (mg.lanjut ? '<button class="pbtn gold" id="mgLanjut">' + mg.lanjut + '</button>' : '');
  ikatMg(m);
}

function mgAkhir() {
  $('area').innerHTML = '<div class="mg-akhir"><div class="dt-cap">JEMBATAN TERSAMBUNG</div><div class="mg-scene">' + mgScene(MG_T.map(t => t.w), true) + '</div>' +
    '<p class="lb-info">Semua tahap penalaran sejarah sudah terhubung dari pertanyaan sampai kesimpulan. Ingat urutan dan pertanyaan pemandunya:</p><div class="mg-rekap">' +
    MG_T.map((t, k) => '<div style="border-top-color:' + t.w + '"><span class="mg-ik" style="background:' + t.w + '"><svg viewBox="0 0 24 24" aria-hidden="true">' + t.ik + '</svg></span><b>' + (k + 1) + '. ' + t.k + '</b><small>“' + t.q + '”</small></div>').join('') + '</div>' +
    '<div class="mg-pesan"><b>Tiga kebiasaan sejarawan:</b> satu bukti saja tidak cukup, dugaan bukan fakta, dan data yang janggal harus dijelaskan, bukan dibuang.</div></div>';
}

function mgGagal(m, pesan) {
  salah++; mg.hati--; mg.ok = false; mg.msg = pesan;
  if (mg.hati <= 0) { mg.hati = 3; mg.msg = 'Nyawa habis, ronde ini diulang. ' + (mg.r === 1 ? 'Kali ini pertanyaan pemandu muncul di langkah kosong.' : 'Bacalah definisi tiap tahap dengan teliti.'); mg.bantu = mg.r === 1;
    if (mg.r === 1) { mg.slot = [null, null, null, null, null, null]; mg.cek = null; } if (mg.r === 2) { mg.st = 0; mg.opsi = null; mg.hid = []; } if (mg.r === 3) { mg.ch = 0; mg.tap = -1; mg.hp = 0; } }
  gambarMg(m);
}
function mgNaik(m, pesan, lanjut) { mg.ok = true; mg.msg = pesan; mg.lanjut = lanjut; konfeti(); gambarMg(m); }

function ikatMg(m) {
  const A = $('area');
  const taruh = (k, i) => { const lama = mg.slot.indexOf(k); if (lama >= 0) mg.slot[lama] = null; if (i == null) i = mg.slot.indexOf(null); if (i < 0) return; mg.slot[i] = k; mg.cek = null; mg.msg = ''; mg.bantu = false; gambarMg(m); };
  A.querySelectorAll('.mg-blok').forEach(b => { b.onclick = () => taruh(+b.dataset.k); b.ondragstart = e => { e.dataTransfer.setData('text/plain', b.dataset.k); }; });
  A.querySelectorAll('.mg-slot').forEach(b => {
    b.onclick = () => { const i = +b.dataset.i; if (mg.slot[i] != null) { mg.slot[i] = null; mg.cek = null; gambarMg(m); } };
    b.ondragover = e => e.preventDefault();
    b.ondrop = e => { e.preventDefault(); const k = parseInt(e.dataTransfer.getData('text/plain'), 10); if (!isNaN(k)) taruh(k, +b.dataset.i); };
  });
  const cek = $('mgCek'); if (cek) cek.onclick = () => {
    const bn = mg.slot.map((k, i) => k === i), n = bn.filter(Boolean).length;
    if (n === 6) { mg.cek = null; mg.jalan = true; return mgNaik(m, 'Urutan benar! Bukti, Data, Analisis, Hipotesis, Argumentasi, Kesimpulan. Sekarang terapkan pada kasus nyata.', 'Lanjut ke Ronde 2'); }
    mg.cek = bn; mgGagal(m, n + ' dari 6 langkah sudah di tempat yang tepat (bertanda hijau). Tanyakan pada diri sendiri: mana yang harus ada lebih dulu sebelum langkah lain bisa dikerjakan?');
  };
  A.querySelectorAll('.mg-pil[data-i]').forEach(b => b.onclick = () => {
    const i = +b.dataset.i, t = MG_I[i][1];
    if (t === mg.st) { mg.st++; mg.opsi = null; mg.hid = []; mg.ok = true; mg.msg = '✓ Tepat! Papan jembatan terpasang.';
      if (mg.st === 6) { mg.jalan = true; return mgNaik(m, 'Semua tahap terpasang. Penalaran kasus ini lengkap dan runtut!', 'Lanjut ke Ronde 3'); } return gambarMg(m); }
    mgGagal(m, 'Itu bukan ' + MG_T[mg.st].k + '. Pernyataan itu termasuk <b>' + mgJenis(t) + '</b>' + (t === 6 ? ': pendapat tanpa dasar bukti, jadi tidak boleh dipakai sebagai tahap penalaran.' : ': ' + MG_T[t].d));
  });
  A.querySelectorAll('.mg-lang').forEach(b => b.onclick = () => {
    const i = +b.dataset.i, c = MG_RANTAI[mg.ch];
    if (i === c.x) { mg.tap = i; mg.ok = true; mg.msg = '✓ Betul, langkah itu bermasalah. Sekarang tentukan jenis kesalahannya.'; return gambarMg(m); }
    mgGagal(m, 'Langkah ' + MG_T[i].k + ' masih masuk akal dan didukung langkah sebelumnya. Periksa kembali, adakah langkah yang melompat atau mengabaikan sesuatu?');
  });
  A.querySelectorAll('.mg-pil[data-j]').forEach(b => b.onclick = () => {
    const j = +b.dataset.j, c = MG_RANTAI[mg.ch];
    if (j !== c.b) return mgGagal(m, 'Bukan itu. Bandingkan langkah yang bermasalah dengan langkah di sebelumnya: apa yang tidak sejalan?');
    mg.ch++; mg.tap = -1; mg.hp = 0;
    if (mg.ch === MG_RANTAI.length) { mg.fin = true; mg.jalan = true; konfeti(); gambarMg(m); return periksa(true); }
    mg.ok = true; mg.msg = '✓ Tepat! ' + c.e; gambarMg(m);
  });
  if (mg.lanjut) A.querySelectorAll('.mg-blok,.mg-slot,.mg-pil,.mg-lang,#mgCek').forEach(b => { b.disabled = true; });
  const ln = $('mgLanjut'); if (ln) ln.onclick = () => { mg.r++; mg.lanjut = ''; mg.msg = ''; mg.ok = false; mg.hati = 3; mg.hp = 0; mg.cek = null; mg.bantu = false; mg.jalan = false; gambarMg(m); };
  const pt = $('mgPet'); if (pt) pt.onclick = () => {
    if (mg.pet <= 0) return; mg.pet--; mg.ok = false;
    if (mg.r === 1) { mg.bantu = true; mg.msg = 'Petunjuk: pertanyaan pemandu muncul di langkah kosong pertama.'; }
    if (mg.r === 2) { const s = MG_OPS[mg.st].filter(i => MG_I[i][1] !== mg.st && !mg.hid.includes(i)); if (s.length) mg.hid.push(s[0]); mg.msg = 'Petunjuk: satu pernyataan yang salah sudah dicoret.'; }
    if (mg.r === 3) { mg.msg = mg.hp === 0 ? 'Petunjuk: periksa apakah tiap langkah benar-benar didukung langkah sebelumnya, dan apakah ada data atau alasan yang terlewat.' : 'Petunjuk: perhatikan langkah ke-' + (MG_RANTAI[mg.ch].x + 1) + '.'; mg.hp++; }
    gambarMg(m);
  };
}

/* ===== Misi 8: Final Mission – The Last Evidence ===== */
const FN_F = [
  { k:'Identifikasi Bukti', tag:'Science', ik:'🔎' },
  { k:'Baca Data & Analisis', tag:'Mathematics', ik:'📊' },
  { k:'Lokasi & Hubungan', tag:'Technology & Engineering', ik:'🧭' },
  { k:'Buat Argumentasi', tag:'Integrasi STEM', ik:'⚖️' },
  { k:'Susun Kesimpulan', tag:'Integrasi STEM', ik:'🏁' }
];
const FN_S = [['T','Taiwan',22,121,5000], ['L','Luzon',14,121,4000], ['M','Mindanao',8,125,3800], ['S','Sulawesi Utara',1,124.5,3500], ['P','Gua Batu Layar',-3,128,3200]];   // [kode, nama, lintang, bujur, usia gerabah]
const FN_J = { TL:875, LM:800, MS:750, SP:625, TM:1600, LS:1450, MP:1300, TS:2300, LP:2050, TP:2900 };   // jarak pelayaran (km)
const FN_JAUH = 1000, FN_KEC = 125;
const fnJ = (a, b) => FN_J[a + b] || FN_J[b + a];
const fnX = lon => 28 + (lon - 118) * 21.5, fnY = lat => 8 + (25 - lat) * 11;
const fnK = (la, lo) => Math.abs(Math.round(la * 10) / 10) + '°' + (la < 0 ? 'LS' : 'LU') + ', ' + Math.round(lo * 10) / 10 + '°BT';
const FN_DARAT = [
  ['TAIWAN', [[120.1,22],[120.9,21.9],[121.6,22.8],[121.9,24.6],[121.5,25],[120.7,24.6],[120.2,23.2]], 122.2, 23.6],
  ['FILIPINA', [[120.4,18.4],[122.2,18.5],[122.3,16.5],[121.7,14.3],[124,13],[122,13.6],[120.6,14.2],[120,16]], 122.6, 17],
  ['', [[122,7],[123.5,8.6],[125.3,9.6],[126.5,8.3],[126,6.2],[124.5,5.7],[123.2,6.8]]],
  ['SULAWESI', [[119.4,-5.6],[119.2,-3],[119.9,0.4],[121,1.1],[124.8,1.5],[124.6,0.7],[121.8,0],[121.5,-1.8],[122.8,-1],[123.2,-2.6],[122,-4.8],[120.4,-5.6]], 119.4, -1.2],
  ['', [[127.5,1.5],[128.3,1.7],[128.4,0.5],[128,-0.6],[127.6,0.2]]],
  ['PAPUA', [[131,-0.8],[132,-1.2],[132,-4.5],[131.2,-3.2],[130.8,-1.5]], 131.9, -0.3],
  ['', [[116,7],[119,5],[118,1],[117.5,-1],[116.5,-3.5],[116,-3.5]]]
];
const FN_DATA = [['B1','B',3100], ['B2','B',3300], ['B3','B',3200], ['B4','B',3200], ['C1','C',9800]];
const FN_SUSUN = [
  { l:'Dasar bukti', b:1, o:[['Berdasarkan satu pecahan gerabah', 'Satu bukti saja tidak cukup untuk menyimpulkan (Misi 3).'], ['Berdasarkan gerabah, usia arang, bahasa, dan jarak pelayaran yang saling menguatkan'], ['Berdasarkan keyakinan tim peneliti', 'Keyakinan adalah opini, bukan bukti.']] },
  { l:'Klaim', b:1, o:[['seluruh bangsa Indonesia pasti berasal dari Gua Batu Layar', 'Satu situs tidak dapat mewakili seluruh bangsa.'], ['penghuni gua adalah penutur Austronesia yang berlayar lewat jalur Taiwan, Filipina, dan Sulawesi sekitar 3.200 tahun lalu'], ['penghuni gua adalah manusia pertama di Nusantara', 'Alat batu 9.800 tahun di Lapisan C menunjukkan sudah ada penghuni yang lebih awal.']] },
  { l:'Keterbukaan', b:1, o:[['dan hasil ini mutlak, tidak akan berubah', 'Kesimpulan ilmiah selalu terbuka untuk direvisi.'], ['dan kesimpulan ini terbuka untuk diperbarui bila ada temuan baru'], ['dan tidak perlu diuji lagi', 'Hipotesis selalu perlu diuji.']] }
];
const FN_L = [
  { f:0, t:'strata', v:'strata0', q:'Penampang galian menunjukkan tiga lapisan tanah. Ketuk lapisan yang paling TUA.', b:2,
    h:'Tanah menumpuk dari bawah ke atas. Lapisan yang terbentuk lebih dulu tertimbun paling dalam.',
    w:'Bukan itu. Lapisan baru menumpuk di atas lapisan lama, jadi cari yang tertimbun paling dalam.',
    e:'Tepat! Lapisan C terbentuk paling awal. Selama tanah tidak terganggu, makin dalam berarti makin tua.' },
  { f:0, t:'mc', v:'strata1', q:'Enam temuan ditandai pada penampang. Pilih semua yang layak jadi BUKTI UTAMA tentang pembuat gerabah.',
    h:'Bukti utama harus berasal dari lapisan yang sezaman dengan gerabah dan tidak terganggu. Periksa letak dan kondisi tiap temuan.',
    e:'Tepat! Gerabah, arang, dan beliung berada bersama di Lapisan B yang utuh, jadi sezaman dan tepercaya. Plastik itu modern, serpih di Lapisan C lebih tua, dan koin masuk lewat liang hewan.',
    o:[{x:'Bungkus plastik di Lapisan A', w:'Lapisan A adalah tanah permukaan yang bercampur benda modern.'},
       {x:'Pecahan gerabah bertera tali di Lapisan B', ok:1},
       {x:'Alat batu serpih kasar di Lapisan C', w:'Letaknya di lapisan yang jauh lebih tua. Alat itu mungkin milik penghuni yang lebih awal, bukan pembuat gerabah. Catat saja, jangan jadikan bukti utama.'},
       {x:'Arang perapian di samping gerabah, Lapisan B', ok:1},
       {x:'Koin logam di dalam liang hewan yang menembus Lapisan B', w:'Posisinya di Lapisan B, tetapi ia masuk lewat liang dari atas. Lapisan yang terganggu tidak bisa dipercaya.'},
       {x:'Beliung batu terasah halus di Lapisan B', ok:1}] },
  { f:1, t:'num', v:'data', q:'Hitung rata-rata usia arang Lapisan B saja (tahun lalu).', u:'tahun lalu', b:3200,
    h:'Jumlahkan keempat sampel Lapisan B (B1 sampai B4), lalu bagi 4. Sampel C1 berasal dari lapisan lain.',
    w:'Hitung ulang: rata-rata = jumlah semua nilai ÷ banyaknya nilai.', wx:{4520:'Kamu ikut memasukkan C1 dari Lapisan C. Lapisan yang berbeda tidak boleh dirata-ratakan.'},
    e:'(3.100 + 3.300 + 3.200 + 3.200) ÷ 4 = 3.200 tahun lalu.' },
  { f:1, t:'sc', v:'data', q:'Sampel C1 berusia 9.800 tahun dan jauh berbeda dari yang lain. Apa yang paling tepat kamu lakukan?',
    h:'Ingat kebiasaan sejarawan di Misi 7: data yang janggal harus dijelaskan, bukan dibuang.',
    e:'Tepat! C1 berasal dari lapisan yang lebih dalam, jadi menunjukkan hunian yang lebih awal (ingat Fosil Wajak di Misi 3). Data janggal justru bisa membuka cerita baru.',
    o:[{x:'Buang saja karena tidak cocok dengan rata-rata', w:'Data janggal tidak boleh dibuang hanya karena tidak cocok.'},
       {x:'Catat sebagai petunjuk penghuni yang lebih awal di Lapisan C, dan jangan campur dengan data Lapisan B', ok:1},
       {x:'Simpulkan bahwa Lapisan B ternyata berusia 9.800 tahun', w:'C1 diambil dari Lapisan C, bukan Lapisan B.'},
       {x:'Anggap pengukurannya pasti salah', w:'Tidak ada dasar untuk menuduh salah ukur. Periksa dulu asal lapisannya.'}] },
  { f:1, t:'num', v:'data', q:'Gerabah situs Sulawesi berusia sekitar 3.500 tahun (Misi 7). Berapa tahun Gua Batu Layar lebih muda dari situs Sulawesi?', u:'tahun', b:300,
    h:'Kurangkan usia yang lebih tua dengan usia yang lebih muda. Pakai rata-rata Lapisan B.',
    w:'Selisih = usia yang lebih tua dikurangi usia yang lebih muda. Pakai 3.500 dan hasil rata-ratamu tadi.',
    e:'3.500 − 3.200 = 300 tahun. Makin ke tenggara makin muda, pola yang cocok dengan arah persebaran dari Taiwan.' },
  { f:2, t:'koor', q:'Koordinat Gua Batu Layar adalah 3°LS, 128°BT. Ketuk titik itu pada peta skema.', lat:-3, lon:128,
    h:'LS berarti selatan khatulistiwa (0°). BT berarti di timur, dan nilainya makin besar ke arah timur.',
    e:'Tepat! 3°LS berarti 3° di selatan khatulistiwa, 128°BT berarti 128° di timur Greenwich. Gua Batu Layar kini muncul di peta.' },
  { f:2, t:'rute', q:'Susun jalur persebaran dari situs tertua sampai Gua Batu Layar. Ketuk situs satu per satu. Tiap lompatan harus ke situs yang lebih muda dan tidak melebihi 1.000 km.',
    h:'Baca tabel jarak. Dari tiap situs, cari situs lebih muda yang jaraknya paling dekat dan tidak lebih dari 1.000 km.',
    e:'Jalurnya lengkap: Taiwan → Luzon → Mindanao → Sulawesi → Gua Batu Layar. Tiap etape masih dalam jangkauan perahu bercadik.' },
  { f:2, t:'num', q:'Perahu bercadik melaju 125 km per hari (Misi 6). Berapa hari pelayaran etape TERPANJANG pada jalurmu?', u:'hari', b:7,
    h:'Etape terpanjang adalah Taiwan ke Luzon. Waktu = jarak ÷ kecepatan.',
    w:'Waktu = jarak ÷ kecepatan. Cari dulu etape terpanjang di jalurmu, lalu bagi dengan 125 km per hari.', wx:{5:'5 hari adalah etape Sulawesi ke Gua Batu Layar (625 km), yang justru paling pendek.', 6:'6 hari adalah etape Mindanao ke Sulawesi. Masih ada etape yang lebih panjang.'},
    e:'875 ÷ 125 = 7 hari. Etape terpanjang membutuhkan 7 hari berlayar.' },
  { f:2, t:'sc', q:'Etape terpanjang butuh 7 hari di laut terbuka. Rancangan perahu mana yang paling layak?',
    h:'Ingat Design, Build, Test, Improve di Misi 5: perahu harus ringan, stabil, kuat, dan membawa bekal cukup.',
    e:'Tepat! Lambung kayu kuat, cadik bambu menjaga keseimbangan, layar menangkap angin, dan bekal 8 hari cukup untuk etape 7 hari dengan cadangan 1 hari.',
    o:[{x:'Rakit bambu polos tanpa cadik, bekal 3 hari', w:'Tanpa cadik rakit mudah terbalik di laut terbuka, dan bekal 3 hari kurang dari 7 hari pelayaran.'},
       {x:'Lambung kayu kuat, cadik bambu, layar anyaman daun, bekal 8 hari', ok:1},
       {x:'Lambung dari batu agar kuat dan berat', w:'Batu tenggelam. Perahu harus ringan dan mengapung (Misi 5).'},
       {x:'Perahu kecil tanpa layar, bekal 5 hari', w:'Bekal 5 hari kurang dari 7 hari pelayaran, dan tanpa layar perahu kehilangan tenaga angin.'}] },
  { f:3, t:'sc', q:'Pilih hipotesis yang paling masuk akal berdasarkan semua hasil analisismu.',
    h:'Hipotesis yang baik sesuai data, tidak berlebihan, dan menjelaskan pola usia serta jalur yang kamu temukan.',
    e:'Tepat! Hipotesis ini cocok dengan pola usia, jalur, dan jarak pelayaran, dan tidak melebih-lebihkan.',
    o:[{x:'Semua orang Nusantara berasal dari pulau ini karena gerabahnya ada di sini', w:'Terlalu luas. Satu situs tidak dapat menjelaskan seluruh Nusantara.'},
       {x:'Penghuni gua adalah pelaut penutur Austronesia yang menyebar dari Taiwan lewat Filipina dan Sulawesi sekitar 3.200 tahun lalu', ok:1},
       {x:'Penghuni gua tidak mungkin tiba lewat laut karena jaraknya terlalu jauh', w:'Setiap etape paling jauh 875 km, masih dalam jangkauan perahu bercadik.'},
       {x:'Gerabah itu berusia 9.800 tahun sesuai sampel C1', w:'C1 berasal dari Lapisan C, bukan dari lapisan gerabah.'}] },
  { f:3, t:'mc', q:'Susun argumentasi: pilih SEMUA bukti yang benar-benar menguatkan hipotesismu.',
    h:'Bukti yang kuat berasal dari jenis berbeda (artefak, data usia, bahasa, rekayasa) dan sesuai dengan hipotesis, bukan opini.',
    e:'Tepat! Artefak, pola usia, bahasa, dan jarak pelayaran saling menguatkan. Itulah argumentasi yang kokoh.',
    o:[{x:'Menurutku ini pasti benar, titik.', w:'Keyakinan pribadi adalah opini, bukan bukti (Misi 7).'},
       {x:'Kata “mata” di desa terdekat mirip bahasa di Filipina dan Sulawesi', ok:1},
       {x:'Sampel arang C1 berusia 9.800 tahun', w:'C1 berasal dari lapisan lebih tua, jadi tidak menunjukkan kedatangan penutur Austronesia sekitar 3.200 tahun lalu.'},
       {x:'Gerabah bertera tali sama dengan temuan di Filipina dan Sulawesi', ok:1},
       {x:'Satu pecahan gerabah sudah cukup membuktikan semuanya', w:'Satu bukti saja tidak cukup (Misi 3).'},
       {x:'Usia situs makin muda sepanjang jalur: 5.000, 4.000, 3.800, 3.500, 3.200 tahun', ok:1},
       {x:'Tiap etape pelayaran paling jauh 875 km, dalam jangkauan perahu bercadik', ok:1}] },
  { f:3, t:'sc', dr:1, q:'Satu pecahan gerabah belum membuktikan apa-apa!',
    h:'Jawaban ilmiah mengakui keterbatasan, lalu menunjukkan bukti lain yang saling menguatkan.',
    e:'Tepat! Argumentasi kuat tidak bergantung pada satu bukti.',
    o:[{x:'Benar, karena itu kami menggabungkan gerabah, usia arang, bahasa, dan jarak pelayaran yang saling menguatkan.', ok:1},
       {x:'Tidak perlu bukti lain, gerabahnya sudah jelas.', w:'Satu bukti saja tidak cukup. Mengabaikan kritik bukan jawaban ilmiah.'},
       {x:'Anda hanya belum paham sejarah.', w:'Menyerang pribadi bukan argumentasi. Jawab dengan bukti.'}] },
  { f:3, t:'sc', dr:1, q:'Lalu mengapa ada alat batu berusia 9.800 tahun di Lapisan C?',
    h:'Ingat soal sampel C1 dan Fosil Wajak: temuan yang lebih tua bisa berarti penghuni yang lebih awal.',
    e:'Tepat! Temuan janggal dijelaskan, bukan disembunyikan.',
    o:[{x:'Alat itu pasti palsu, kita buang saja.', w:'Membuang data yang tidak cocok bukan cara kerja ilmuwan.'},
       {x:'Berarti gerabahnya juga berusia 9.800 tahun.', w:'Gerabah ada di Lapisan B, bukan di Lapisan C.'},
       {x:'Lapisan C jauh lebih tua. Itu jejak penghuni yang lebih awal, bukan pembuat gerabah, jadi tidak membantah hipotesis.', ok:1}] },
  { f:3, t:'sc', dr:1, q:'Mungkin gerabah itu dibawa pedagang modern, bukan benda kuno!',
    h:'Ingat Fase 1: di mana gerabah ditemukan, dan bersama apa?',
    e:'Tepat! Konteks temuan membuktikan usianya.',
    o:[{x:'Mungkin saja, jadi kita tidak bisa menyimpulkan apa pun.', w:'Keraguan tanpa dasar tidak menggugurkan bukti. Tunjukkan konteks temuannya.'},
       {x:'Gerabah ada di Lapisan B yang tidak terganggu, berdampingan dengan arang berusia sekitar 3.200 tahun. Benda modern hanya ada di lapisan atas atau liang hewan.', ok:1},
       {x:'Pedagang modern tidak mungkin sampai ke pulau ini.', w:'Itu dugaan tanpa bukti. Jawab dengan data lapisan tanah.'}] },
  { f:4, t:'susun', q:'Susun kesimpulan akhirmu dari tiga bagian. Pilih satu untuk tiap bagian.',
    h:'Kesimpulan yang baik bertumpu pada banyak bukti, tidak berlebihan, dan terbuka pada temuan baru.',
    e:'Tepat! Kesimpulanmu berdasar, terukur, dan terbuka. Namun kasus ini belum selesai…' },
  { f:4, t:'sc', tw:'⚡ TEMUAN BARU! Laboratorium mengabarkan hasil analisis DNA dari gigi manusia di Lapisan B: sebagian besar berkerabat dengan penutur Austronesia, tetapi sebagian lainnya berkerabat dengan penduduk yang sudah menghuni wilayah timur Nusantara lebih dulu.',
    q:'Bagaimana kesimpulanmu sebaiknya diperbarui?',
    h:'Kesimpulan yang baik tidak dibuang saat ada temuan baru. Ia diperbarui agar mencakup bukti lama dan baru.',
    e:'Tepat! Kesimpulan yang kuat tidak kaku. Ia diperbarui mengikuti bukti, dan gambarannya jadi lebih kaya: sejarah manusia di Nusantara adalah cerita pertemuan dan percampuran, bukan satu arus tunggal.',
    o:[{x:'Hapus kesimpulan lama, ternyata semuanya salah.', w:'Temuan baru tidak membatalkan bukti lama. Ia menambah gambaran.'},
       {x:'Abaikan hasil DNA agar kesimpulan tetap utuh.', w:'Mengabaikan data yang tidak cocok bukan cara kerja ilmuwan.'},
       {x:'Perbarui: penutur Austronesia tiba sekitar 3.200 tahun lalu dan berbaur dengan penghuni yang lebih dulu ada.', ok:1},
       {x:'Ganti menjadi: semua penghuni hanya berasal dari penghuni lebih awal.', w:'Itu mengabaikan gerabah, bahasa, dan usia arang yang menunjuk kedatangan penutur Austronesia.'}] }
];
const baruFn = () => ({ n:0, hati:5, pet:3, msg:'', ok:false, done:false, mulai:false, fin:false, sel:[], rute:[], pil:[-1, -1, -1], ord:null, tap:null, val:'' });
const selesaiFn = () => Object.assign(baruFn(), { fin:true, mulai:true, n:FN_L.length });
let fn = baruFn();
const fnAngka = s => { s = String(s).trim().replace(/\s/g, ''); if (/^\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, ''); return Number(s.replace(',', '.')); };
const fnReset = () => { fn.sel = []; fn.rute = []; fn.pil = [-1, -1, -1]; fn.ord = null; fn.tap = null; fn.val = ''; fn.msg = ''; fn.ok = false; fn.done = false; };
const ribu = n => n.toLocaleString('id-ID');

function fnStrata(modus, pilih, benar) {
  benar = benar == null ? -1 : benar;
  const lap = [['Lapisan A · tanah permukaan', 30, 72, '#8d6a44', '#fff'], ['Lapisan B · abu dan arang', 72, 122, '#4d3626', '#fff'], ['Lapisan C · pasir tua', 122, 172, '#cdb98a', '#2a1a0c']];
  const klik = modus === 0 && benar < 0;
  let s = '<svg class="mg-svg" viewBox="0 0 360 190" role="img" aria-label="Penampang galian Gua Batu Layar dengan tiga lapisan tanah"><rect width="360" height="190" fill="#0b1d33"/><rect y="22" width="360" height="8" fill="#4f8a3a"/>';
  lap.forEach((l, k) => { s += `<g class="fn-lap${klik ? ' klik' : ''}${benar === k ? ' benar' : pilih === k ? ' pilih' : ''}" data-k="${k}"${klik ? ` tabindex="0" role="button" aria-label="${l[0]}"` : ''}><rect x="0" y="${l[1]}" width="360" height="${l[2] - l[1]}" fill="${l[3]}"/><text x="8" y="${l[1] + 13}" fill="${l[4]}" class="fn-lt">${l[0]}</text></g>`; });
  s += '<g fill="#b8aa9a" opacity=".5"><circle cx="40" cy="104" r="2"/><circle cx="70" cy="112" r="1.6"/><circle cx="150" cy="86" r="2"/><circle cx="205" cy="108" r="1.8"/><circle cx="270" cy="102" r="2"/><circle cx="330" cy="110" r="1.6"/></g>';
  s += '<path d="M293 30h12l3 70h-18z" fill="#1a110a"/><rect class="fn-scan" x="0" y="30" width="360" height="3" fill="#3ac6b8" opacity=".55"/>';
  if (modus === 1) [[225,52],[95,98],[250,148],[130,106],[299,92],[175,96]].forEach((p, k) => { s += `<g class="fn-mk"><circle cx="${p[0]}" cy="${p[1]}" r="9"/><text x="${p[0]}" y="${p[1] + 4}" text-anchor="middle">${k + 1}</text></g>`; });
  return s + '</svg>';
}

function fnPeta(mod, o) {
  o = o || {};
  const rt = o.rute || [], pos = k => [fnX(FN_S[k][3]), fnY(FN_S[k][2])], idx = c => FN_S.findIndex(x => x[0] === c);
  let s = '<svg class="mg-svg fn-peta" id="fnPeta" viewBox="0 0 340 360" role="img" aria-label="Peta skema dari Taiwan sampai Maluku, tidak sesuai skala"><defs><linearGradient id="fnL" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e3a63"/><stop offset="1" stop-color="#0a2540"/></linearGradient></defs><rect width="340" height="360" fill="url(#fnL)"/>';
  for (let la = 25; la >= -5; la -= 5) s += `<path d="M28 ${fnY(la)}H332" class="fn-gr"/><text x="2" y="${fnY(la) + 3}" class="fn-tx">${Math.abs(la)}°${la < 0 ? 'LS' : la ? 'LU' : ''}</text>`;
  for (let lo = 118; lo <= 132; lo += 2) s += `<path d="M${fnX(lo)} 8V349" class="fn-gr"/>` + (lo % 4 === 2 ? `<text x="${fnX(lo)}" y="358" class="fn-tx" text-anchor="middle">${lo}°BT</text>` : '');
  FN_DARAT.forEach(d => { s += `<polygon points="${d[1].map(p => fnX(p[0]).toFixed(1) + ',' + fnY(p[1]).toFixed(1)).join(' ')}" class="fn-land"/>` + (d[0] ? `<text x="${fnX(d[2])}" y="${fnY(d[3])}" class="fn-lbl"${d[0] === 'PAPUA' ? ' text-anchor="end"' : ''}>${d[0]}</text>` : ''); });
  if (mod !== 'koor' || o.p) s += `<ellipse cx="${fnX(128)}" cy="${fnY(-3)}" rx="8" ry="5" class="fn-land"/>`;
  if (rt.length > 1) {
    const pts = rt.map(c => { const q = pos(idx(c)); return q[0].toFixed(1) + ',' + q[1].toFixed(1); });
    s += `<polyline points="${pts.join(' ')}" class="fn-jalur${o.anim ? ' anim' : ''}"/>`;
    if (o.anim) s += `<g><animateMotion dur="9s" repeatCount="indefinite" path="M${pts.join(' L')}"/><text x="-7" y="5" font-size="15">⛵</text></g>`;
  }
  if (mod === 'rute' || mod === 'akhir' || o.p) FN_S.forEach((x, k) => {
    if (mod === 'koor' && k < 4) return;
    const [px, py] = pos(k), on = rt.includes(x[0]), klik = mod === 'rute' && !o.kunci, kiri = k === 4, lebar = Math.round((x[1].length + 10) * 4.3);
    s += `<g class="fn-st${on ? ' on' : ''}${klik ? ' klik' : ''}" data-k="${k}"${klik ? ` tabindex="0" role="button" aria-label="Situs ${x[1]}, usia ${ribu(x[4])} tahun"` : ''}><rect x="${kiri ? px - 15 - lebar : px - 13}" y="${py - 13}" width="${lebar + 28}" height="26" fill="transparent"/><circle cx="${px}" cy="${py}" r="11"/><text x="${px}" y="${py + 4}" text-anchor="middle" class="fn-sk">${x[0]}</text><text x="${px + (kiri ? -15 : 15)}" y="${py + 3}" text-anchor="${kiri ? 'end' : 'start'}" class="fn-sl">${x[1]} · ${ribu(x[4])} th</text></g>`;
  });
  if (o.tap) s += `<text x="${o.tap[0]}" y="${o.tap[1] + 5}" text-anchor="middle" class="fn-x">✕</text>`;
  if (mod === 'koor') s += '<circle id="fnCur" r="6" cx="-20" cy="-20" class="fn-cur"/>';
  return s + '</svg>';
}

function fnTabelData() {
  return '<table class="m-data"><tr><th>Sampel</th><th>Lapisan</th><th>Usia arang (tahun lalu)</th><th></th></tr>' +
    FN_DATA.map(d => `<tr><td>${d[0]}</td><td>${d[1]}</td><td>${ribu(d[2])}</td><td style="width:32%"><div class="bar${d[1] === 'C' ? ' fn-bc' : ''}" style="width:${d[2] / 98}%"></div></td></tr>`).join('') + '</table>';
}

function fnMatriks() {
  const c = FN_S.map(x => x[0]);
  return '<table class="m-data fn-mat"><caption>Jarak pelayaran antarsitus (km). Jangkauan perahu bercadik: 1.000 km</caption><tr><th></th>' + c.map(x => `<th>${x}</th>`).join('') + '</tr>' +
    c.map(a => `<tr><th>${a}</th>` + c.map(b => `<td>${a === b ? '–' : ribu(fnJ(a, b))}</td>`).join('') + '</tr>').join('') + '</table>';
}

function fnIntro() {
  $('area').innerHTML = '<div class="fn-kasus"><div class="fn-stp">KASUS BARU</div>' +
    '<p>Tim ekspedisi menggali Gua Batu Layar di Pulau Sanggar Laut, titik 3°LS, 128°BT (pulau rekaan untuk latihan). Mereka menemukan pecahan gerabah bertera tali, arang perapian, dan beliung batu. Tim bahasa mencatat bahwa kata untuk “mata” di desa terdekat mirip bahasa di Filipina dan Sulawesi.</p>' +
    '<p class="fn-q">Siapa pembuat gerabah itu, dari mana mereka datang, dan kapan mereka tiba?</p>' +
    '<ol class="fn-tugas">' + FN_F.map(f => `<li><span>${f.ik}</span><div><b>${f.k}</b><small>${f.tag}</small></div></li>`).join('') + '</ol>' +
    '<div class="fn-aturan"><span>❤️ 5 kredibilitas tiap fase: jawaban keliru mengurangi satu, habis berarti fase diulang.</span><span>💡 3 petunjuk untuk seluruh misi.</span><span>⭐ Makin sedikit kesalahan, makin banyak bintang.</span></div>' +
    '<button class="pbtn gold" id="fnMulai">Mulai Investigasi</button></div>';
  $('fnMulai').onclick = () => { fn.mulai = true; gambarFn(MISI[S.i]); };
}

function fnBody(L) {
  const d = fn.done; let h = '';
  if (L.tw) h += `<div class="fn-tw">${L.tw}</div>`;
  h += L.dr ? `<div class="fn-skp"><span aria-hidden="true">🧐</span><div><small>Dr. Skeptis menyanggah:</small><p>“${L.q}”</p></div></div><p class="mg-tg">Jawaban ilmiah terbaikmu?</p>` : `<p class="mg-tg">${L.q}</p>`;
  if (L.v === 'data') h += fnTabelData();
  if (L.v === 'strata0') h += `<div class="mg-scene">${fnStrata(0, fn.sel[0], d ? L.b : -1)}</div>`;
  if (L.v === 'strata1') h += `<div class="mg-scene">${fnStrata(1)}</div>`;
  if (L.t === 'koor') h += `<div class="mg-scene">${fnPeta('koor', { p:d, tap:fn.tap })}</div><p class="mg-kecil">Peta skema, tidak sesuai skala. Posisi penunjuk: <b id="fnRead">-</b></p>`;
  if (L.t === 'rute') h += `<div class="mg-scene">${fnPeta('rute', { rute:fn.rute, kunci:d })}</div>` + fnMatriks();
  if (L.t === 'mc') h += '<p class="mg-kecil">Ketuk kartu untuk memilih atau membatalkan.</p><div class="mg-opsi">' + L.o.map((x, k) => `<button class="mg-pil fn-mc${fn.sel.includes(k) ? ' pilih' : ''}${d && x.ok ? ' benar' : ''}" data-k="${k}" aria-pressed="${fn.sel.includes(k)}"${d ? ' disabled' : ''}>${L.v === 'strata1' ? `<b class="fn-no">${k + 1}</b>` : ''}${x.x}</button>`).join('') + '</div>' + (d ? '' : `<button class="pbtn gold" id="fnCek" style="margin-top:.7rem"${fn.sel.length ? '' : ' disabled'}>Cek Pilihan</button>`);
  if (L.t === 'num') h += `<div class="fn-num"><input class="fn-in" id="fnIn" inputmode="decimal" autocomplete="off" aria-label="Jawaban angka" value="${fn.val.replace(/[^0-9.,-]/g, '')}"${d ? ' disabled' : ''}><span>${L.u}</span></div>` + (d ? '' : '<button class="pbtn gold" id="fnCek" style="margin-top:.7rem">Cek Jawaban</button>');
  if (L.t === 'sc') {
    fn.ord = fn.ord || acak(L.o.map((_, k) => k));
    h += '<div class="mg-opsi">' + fn.ord.map(k => `<button class="mg-pil fn-sc${fn.sel.includes(k) ? ' mati' : ''}${d && L.o[k].ok ? ' benar' : ''}" data-k="${k}"${fn.sel.includes(k) || d ? ' disabled' : ''}>${L.o[k].x}</button>`).join('') + '</div>';
  }
  if (L.t === 'susun') {
    fn.ord = fn.ord || FN_SUSUN.map(s => acak(s.o.map((_, k) => k)));
    const bg = FN_SUSUN.map((s, i) => fn.pil[i] >= 0 ? s.o[fn.pil[i]][0] : '…');
    h += `<div class="fn-kal"><b>Kesimpulan:</b> ${bg[0]}, disimpulkan bahwa ${bg[1]}, ${bg[2]}.</div>` +
      FN_SUSUN.map((s, i) => `<p class="fn-sl2">${i + 1}. ${s.l}</p><div class="mg-opsi">` + fn.ord[i].map(k => `<button class="mg-pil fn-su${fn.pil[i] === k ? ' pilih' : ''}${d && k === s.b ? ' benar' : ''}" data-i="${i}" data-k="${k}"${d ? ' disabled' : ''}>${s.o[k][0]}</button>`).join('') + '</div>').join('') +
      (d ? '' : '<button class="pbtn gold" id="fnCek" style="margin-top:.7rem">Cek Kesimpulan</button>');
  }
  return h;
}

function gambarFn(m) {
  if (fn.fin) return fnAkhir();
  if (!fn.mulai) return fnIntro();
  const L = FN_L[fn.n], F = FN_F[L.f], d = fn.done;
  const hati = `<span class="mg-hati" role="img" aria-label="Kredibilitas ${fn.hati} dari 5">${[0, 1, 2, 3, 4].map(k => `<i class="${k < fn.hati ? 'on' : ''}">♥</i>`).join('')}</span>`;
  const dots = FN_F.map((_, k) => `<i class="${k < L.f ? 'done' : k === L.f ? 'now' : ''}"></i>`).join('');
  const sambung = fn.n === FN_L.length - 1 ? 'Tutup Kasus' : FN_L[fn.n + 1].f !== L.f ? 'Lanjut ke Fase ' + (L.f + 2) : 'Lanjut';
  $('area').innerHTML = `<div class="mg-head"><div><b>${F.ik} Fase ${L.f + 1}/5: ${F.k}</b><div class="ex-dots">${dots}</div><small class="fn-tag">${F.tag}</small></div><div class="mg-hud">${hati}<button class="mg-pet" id="fnPet"${fn.pet > 0 && !d ? '' : ' disabled'}>💡 Petunjuk (${fn.pet})</button></div></div>` +
    fnBody(L) + (fn.msg ? `<div class="mg-msg${fn.ok ? ' ok' : ''}" role="status">${fn.msg}</div>` : '') +
    (d ? `<button class="pbtn gold" id="fnLanjut" style="margin-top:.8rem">${sambung}</button>` : '');
  ikatFn(m);
}

function fnGagal(m, pesan) {
  salah++; fn.hati--; fn.ok = false; fn.msg = pesan;
  if (fn.hati <= 0) { const f = FN_L[fn.n].f; fn.n = FN_L.findIndex(x => x.f === f); fnReset(); fn.hati = 5; fn.msg = 'Kredibilitas habis! Fase ' + (f + 1) + ' diulang dari awal. Baca setiap petunjuk dengan teliti.'; }
  gambarFn(m);
}
function fnBenar(m, pesan) { fn.ok = true; fn.done = true; fn.msg = '✓ ' + pesan; gambarFn(m); }

function fnLanjut(m) {
  const f = FN_L[fn.n].f; fnReset(); fn.n++;
  if (fn.n >= FN_L.length) { fn.fin = true; S.fnB = salah <= 2 ? 3 : salah <= 5 ? 2 : 1; konfeti(); gambarFn(m); return periksa(true); }
  if (FN_L[fn.n].f !== f) { konfeti(); fn.hati = 5; fn.ok = true; fn.msg = '🎖️ Fase ' + (f + 1) + ' selesai: ' + FN_F[f].k + '. Kredibilitasmu dipulihkan. Sekarang Fase ' + (f + 2) + ': ' + FN_F[f + 1].k + '.'; }
  gambarFn(m);
}

function fnRute(m, L, k) {
  const r = fn.rute, s = FN_S[k];
  if (r.includes(s[0])) return;
  if (!r.length) { if (k !== 0) return fnGagal(m, 'Jalur dimulai dari situs paling TUA. Bandingkan usia tiap situs di peta.'); fn.rute = [s[0]]; fn.ok = true; fn.msg = 'Titik awal: ' + s[1] + ' (' + ribu(s[4]) + ' tahun). Lanjutkan ke situs berikutnya.'; return gambarFn(m); }
  const a = FN_S.find(x => x[0] === r[r.length - 1]);
  if (s[4] > a[4]) return fnGagal(m, s[1] + ' berusia ' + ribu(s[4]) + ' tahun, lebih tua dari ' + a[1] + '. Persebaran bergerak dari yang lebih tua ke yang lebih muda.');
  const j = fnJ(a[0], s[0]);
  if (j > FN_JAUH) return fnGagal(m, 'Jarak ' + a[1] + ' ke ' + s[1] + ' sekitar ' + ribu(j) + ' km, melebihi jangkauan perahu bercadik (' + ribu(FN_JAUH) + ' km). Cari persinggahan yang lebih dekat.');
  fn.rute.push(s[0]);
  if (s[0] === 'P') return fnBenar(m, L.e);
  fn.ok = true; fn.msg = '✓ ' + a[1] + ' → ' + s[1] + ': ' + ribu(j) + ' km, masih dalam jangkauan.'; gambarFn(m);
}

function ikatFn(m) {
  const A = $('area'); if (!fn.mulai || fn.fin) return;
  const L = FN_L[fn.n], tombol = (el, go) => { el.onclick = go; el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } }; };
  const pet = $('fnPet'); if (pet) pet.onclick = () => { if (fn.pet <= 0 || fn.done) return; fn.pet--; fn.ok = false; fn.msg = '💡 Petunjuk: ' + L.h; gambarFn(m); };
  const ln = $('fnLanjut'); if (ln) ln.onclick = () => fnLanjut(m);
  if (L.t === 'strata') A.querySelectorAll('.fn-lap.klik').forEach(g => tombol(g, () => { const k = +g.dataset.k; fn.sel = [k]; k === L.b ? fnBenar(m, L.e) : fnGagal(m, L.w); }));
  if (L.t === 'mc') {
    A.querySelectorAll('.fn-mc').forEach(b => b.onclick = () => {
      const k = +b.dataset.k; fn.sel = fn.sel.includes(k) ? fn.sel.filter(x => x !== k) : fn.sel.concat(k);
      b.classList.toggle('pilih', fn.sel.includes(k)); b.setAttribute('aria-pressed', fn.sel.includes(k)); $('fnCek').disabled = !fn.sel.length;
    });
    const c = $('fnCek'); if (c) c.onclick = () => {
      const benar = L.o.filter(x => x.ok).length, keliru = fn.sel.filter(k => !L.o[k].ok);
      if (keliru.length) { const w = L.o[keliru[0]].w + (keliru.length > 1 ? ' (Ada ' + (keliru.length - 1) + ' pilihan lain yang juga keliru.)' : ''); fn.sel = fn.sel.filter(k => L.o[k].ok); return fnGagal(m, w); }
      if (fn.sel.length < benar) return fnGagal(m, 'Pilihanmu benar, tetapi masih ada bukti kuat yang belum dipilih. Seluruhnya ada ' + benar + '.');
      fnBenar(m, L.e);
    };
  }
  if (L.t === 'num') {
    const inp = $('fnIn'), c = $('fnCek');
    const go = () => {
      fn.val = inp.value; const v = fnAngka(inp.value);
      if (!inp.value.trim() || isNaN(v)) { fn.ok = false; fn.msg = 'Tulis jawaban angkamu dulu.'; return gambarFn(m); }
      v === L.b ? fnBenar(m, L.e) : fnGagal(m, (L.wx && L.wx[v]) || L.w);
    };
    if (c) { c.onclick = go; inp.onkeydown = e => { if (e.key === 'Enter') go(); }; }
  }
  if (L.t === 'sc') A.querySelectorAll('.fn-sc').forEach(b => b.onclick = () => { const k = +b.dataset.k, o = L.o[k]; if (o.ok) return fnBenar(m, L.e); fn.sel.push(k); fnGagal(m, o.w); });
  if (L.t === 'koor') {
    const sv = $('fnPeta'), pos = e => { const r = sv.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 340, y = (e.clientY - r.top) / r.height * 360; return [x, y, 25 - (y - 8) / 11, 118 + (x - 28) / 21.5]; };
    sv.onpointermove = e => { const p = pos(e); $('fnCur').setAttribute('cx', p[0]); $('fnCur').setAttribute('cy', p[1]); $('fnRead').textContent = fnK(p[2], p[3]); };
    if (!fn.done) sv.onclick = e => {
      const p = pos(e);
      if (Math.hypot(p[2] - L.lat, p[3] - L.lon) <= 2.5) return fnBenar(m, L.e);
      fn.tap = [p[0], p[1]];
      const t = ['Titik yang kamu ketuk sekitar ' + fnK(p[2], p[3]) + '.'];
      if (p[2] - L.lat > 2.5) t.push('Terlalu ke utara: 3°LS ada di SELATAN khatulistiwa (0°).'); else if (p[2] - L.lat < -2.5) t.push('Terlalu ke selatan: cukup 3° di bawah khatulistiwa.');
      if (p[3] - L.lon > 2.5) t.push('Terlalu ke timur.'); else if (p[3] - L.lon < -2.5) t.push('Terlalu ke barat: 128°BT lebih ke timur.');
      fnGagal(m, t.join(' '));
    };
  }
  if (L.t === 'rute' && !fn.done) A.querySelectorAll('.fn-st.klik').forEach(g => tombol(g, () => fnRute(m, L, +g.dataset.k)));
  if (L.t === 'susun') {
    A.querySelectorAll('.fn-su').forEach(b => b.onclick = () => { fn.pil[+b.dataset.i] = +b.dataset.k; fn.msg = ''; gambarFn(m); });
    const c = $('fnCek'); if (c) c.onclick = () => {
      if (fn.pil.includes(-1)) { fn.ok = false; fn.msg = 'Lengkapi ketiga bagian kesimpulan dulu.'; return gambarFn(m); }
      const bad = FN_SUSUN.map((s, i) => fn.pil[i] === s.b ? null : i).filter(i => i !== null);
      if (!bad.length) return fnBenar(m, L.e);
      const w = FN_SUSUN[bad[0]].o[fn.pil[bad[0]]][1] + (bad.length > 1 ? ' (Ada ' + bad.length + ' bagian yang perlu diperbaiki.)' : '');
      bad.forEach(i => fn.pil[i] = -1); fnGagal(m, w);
    };
  }
}

function fnAkhir() {
  const n = S.fnB || 3;
  const kartu = [['#3fa35b', '🔎 Bukti', 'Gerabah bertera tali, arang, dan beliung di Lapisan B yang tidak terganggu.'], ['#2f7ce8', '📊 Data', 'Usia rata-rata arang 3.200 tahun. Data janggal C1 dijelaskan, bukan dibuang.'], ['#8b3fd6', '🧭 Rute', 'Taiwan → Luzon → Mindanao → Sulawesi → Gua Batu Layar: 3.050 km, etape terpanjang 875 km (7 hari).'], ['#f08a24', '⚖️ Argumen', 'Empat bukti berbeda jenis saling menguatkan dan tiga sanggahan terjawab.'], ['#2f9e6a', '🏁 Kesimpulan', 'Penutur Austronesia tiba sekitar 3.200 tahun lalu dan berbaur dengan penghuni yang lebih awal. Terbuka untuk diperbarui.']];
  $('area').innerHTML = '<div class="mg-akhir"><div class="fn-stempel">KASUS TERPECAHKAN</div>' +
    `<p class="dt-bintang" role="img" aria-label="${n} dari 3 bintang">${'⭐'.repeat(n)}${'☆'.repeat(3 - n)}</p>` +
    `<div class="mg-scene">${fnPeta('akhir', { rute:['T', 'L', 'M', 'S', 'P'], anim:1 })}</div>` +
    '<p class="lb-info">Inilah jalur persebaran yang kamu buktikan, lengkap dengan perahu bercadik yang berlayar mengikutinya. Ringkasan berkas kasusmu:</p>' +
    '<div class="mg-rekap">' + kartu.map(k => `<div style="border-top-color:${k[0]}"><b>${k[1]}</b><small>${k[2]}</small></div>`).join('') + '</div>' +
    '<div class="mg-pesan"><b>Pesan penutup:</b> sains, teknologi, rekayasa, dan matematika bekerja bersama untuk memahami sejarah. Bukti, data, dan nalar berjalan beriringan, dan kesimpulan terbaik selalu terbuka untuk diperbarui.</div></div>';
}

/* ===== Evidence Bag interaktif ===== */
const EB_SVG = [
  '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 14h44l2 36-14-4-12 6-12-6-10 4z" fill="#ead9a8" stroke="#8a6a34" stroke-width="2" stroke-linejoin="round"/><path d="M22 20v28M42 18v30" stroke="#c9b27f"/><path class="eb-dash" d="M18 24Q30 22 32 32T46 42" fill="none" stroke="#d8232a" stroke-width="2.5" stroke-dasharray="4 3"/><circle cx="18" cy="24" r="3.5" fill="#d8232a"/><circle cx="46" cy="42" r="3.5" fill="#2f7ce8"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="10" y="8" width="34" height="46" rx="4" fill="#f4ecd4" stroke="#6e5a33" stroke-width="2"/><rect x="20" y="4" width="14" height="8" rx="2" fill="#8d8577"/><path d="M16 22h22M16 29h22M16 36h14" stroke="#6e5a33" stroke-width="2" stroke-linecap="round"/><g class="eb-lup"><circle cx="43" cy="42" r="9" fill="rgba(154,211,238,.35)" stroke="#f1c453" stroke-width="3"/><path d="M50 49l8 8" stroke="#f1c453" stroke-width="4" stroke-linecap="round"/></g></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><g class="eb-bob"><path d="M6 8h34a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H20l-8 7v-7H6a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" fill="#3fa35b"/><text x="23" y="23" text-anchor="middle" font-size="11" font-weight="800" fill="#fff" font-family="sans-serif">mata</text></g><path d="M26 34h30a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-4v7l-8-7H26a4 4 0 0 1-4-4V38a4 4 0 0 1 4-4z" fill="#2f7ce8"/><text x="41" y="49" text-anchor="middle" font-size="11" font-weight="800" fill="#fff" font-family="sans-serif">mata</text></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="6" width="36" height="52" rx="4" fill="#12304f" stroke="#f1c453" stroke-width="2"/><circle cx="30" cy="28" r="10" fill="none" stroke="#f1c453" stroke-width="2"/><path d="M20 28h20M30 18v20M24 21q6 7 0 14M36 21q-6 7 0 14" stroke="#f1c453" stroke-width="1.2" fill="none"/><path d="M19 47h22M23 52h14" stroke="#f1c453" stroke-width="2" stroke-linecap="round"/><g class="eb-pin"><path d="M48 12c-5 0-8 4-8 8 0 6 8 14 8 14s8-8 8-14c0-4-3-8-8-8z" fill="#d8232a" stroke="#fff" stroke-width="1.5"/><circle cx="48" cy="20" r="3" fill="#fff"/></g></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><g class="eb-bob"><path d="M10 40h44l-7 11H17z" fill="#a96a3b" stroke="#5e3515" stroke-width="2" stroke-linejoin="round"/><path d="M32 38V8l17 28z" fill="#cbc26d" stroke="#6f7a2a" stroke-width="1.5"/><path d="M32 8v32" stroke="#5e3515" stroke-width="2"/><path d="M16 45l-8 8M28 47l-6 6" stroke="#8c6b34" stroke-width="2"/><rect x="2" y="53" width="30" height="6" rx="3" fill="#d9e283" stroke="#7f8f2c" stroke-width="1.5"/></g></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="6" width="52" height="52" rx="5" fill="#0e2540" stroke="#2a5580" stroke-width="2"/><g class="eb-bars"><rect x="14" y="38" width="7" height="14" rx="1.5" fill="#3ac6b8"/><rect x="24" y="31" width="7" height="21" rx="1.5" fill="#3ac6b8"/><rect x="34" y="23" width="7" height="29" rx="1.5" fill="#2f7ce8"/><rect x="44" y="14" width="7" height="38" rx="1.5" fill="#f1c453"/></g><path d="M10 53h44" stroke="#9fb6cf" stroke-width="1.5"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><g class="eb-bars">' + ['#3fa35b', '#2f7ce8', '#8b3fd6', '#e0435f', '#f08a24', '#2f9e6a'].map((c, i) => `<rect x="${4 + i * 10}" y="${50 - i * 6 - 12}" width="9" height="${12 + i * 6}" rx="2" fill="${c}" stroke="#fff" stroke-opacity=".5"/>`).join('') + '</g><path d="M57 14V4l7 3-7 3" fill="#2f9e6a"/></svg>',
  '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M6 16h18l4 5h30v34H6z" fill="#c9a23f" stroke="#7a5d14" stroke-width="2" stroke-linejoin="round"/><rect x="10" y="26" width="44" height="26" rx="2" fill="#f4ecd4"/><path d="M15 32h16M15 38h12M15 44h14" stroke="#8d8577" stroke-width="2" stroke-linecap="round"/><g class="eb-stp"><circle cx="42" cy="40" r="11" fill="rgba(47,158,106,.12)" stroke="#2f9e6a" stroke-width="3"/><path d="M36 40l4 4 8-9" stroke="#2f9e6a" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'
];
const EB = [
  { n:'Peta Jalur Austronesia', j:'Peta', w:'#3ac6b8', d:'Peta yang menandai jalur penutur Austronesia dari Taiwan ke Filipina, lalu menyebar ke pulau-pulau Nusantara sekitar 4.000 tahun lalu.' },
  { n:'Catatan Laboratorium Arkeologi', j:'Catatan ilmiah', w:'#c9b27f', d:'Hasil pemindaian, pengamatan, analisis, dan klasifikasi artefak, fosil, gerabah, dan situs. Arkeolog mulai dari pengamatan teliti, bukan dugaan.' },
  { n:'Data Perbandingan Bahasa', j:'Bukti bahasa', w:'#3fa35b', d:'Kata untuk “mata” hampir sama di Melayu, Tagalog, dan Maori. Kemiripan bahasa menjadi petunjuk kekerabatan, tetapi harus didukung bukti lain.' },
  { n:'Paspor Situs Sejarah Indonesia', j:'Peta digital', w:'#f1c453', d:'Catatan situs yang kamu temukan lewat peta digital, lengkap dengan garis lintang, garis bujur, dan urutan waktunya.' },
  { n:'Rancangan Perahu Bercadik', j:'Rekayasa', w:'#f08a24', d:'Perahu berlambung kayu, bercadik bambu, bertali pengikat, dan berlayar anyaman daun. Hasil siklus Design, Build, Test, Improve.' },
  { n:'Grafik Jarak Perjalanan', j:'Data & grafik', w:'#2f7ce8', d:'Grafik batang jarak tiap etape pelayaran: total 3.500 km, rata-rata 875 km, dan linimasa perjalanan 28 hari.' },
  { n:'Alur Bernalar Sejarah', j:'Penalaran', w:'#8b3fd6', d:'Enam tahap penalaran: bukti, data, analisis, hipotesis, argumentasi, kesimpulan. Jembatan dari temuan menuju simpulan yang kuat.' },
  { n:'Berkas Kasus Gua Batu Layar', j:'Berkas final', w:'#2f9e6a', d:'Berkas lengkap kasus terakhir: lapisan tanah, usia arang, jalur pelayaran, argumentasi, dan kesimpulan yang terbuka pada temuan baru.' }
];
const EB_GELAR = [[0, 'Calon Penjelajah', '🧭'], [100, 'Pemburu Jejak', '👣'], [200, 'Asisten Arkeolog', '⛏️'], [300, 'Detektif Sejarah', '🔎'], [400, 'Navigator Nusantara', '🗺️'], [500, 'Insinyur Pelaut', '⛵'], [600, 'Analis Data Sejarah', '📊'], [700, 'Ahli Nalar Sejarah', '🧩'], [800, 'Chronos Master', '🏅']];

function renderBag() {
  S.lihat = S.lihat || [];
  const xp = totalXP(), g = EB_GELAR.filter(x => xp >= x[0]).pop(), nx = EB_GELAR.find(x => x[0] > xp), dapat = selesai();
  const penuh = dapat === MISI.length && MISI.every((m, k) => S.xp[k] >= m.xp);
  const pr = [['🎒', 'Bukti Pertama', dapat >= 1], ['📚', 'Kolektor (4 bukti)', dapat >= 4], ['💯', 'Teliti: semua XP penuh', penuh], ['🏆', 'Koleksi Lengkap', dapat === MISI.length]];
  $('bag').innerHTML = `<div class="eb-gelar"><span class="eb-gik" aria-hidden="true">${g[2]}</span><div><small>Julukanmu</small><b>${g[1]}</b><small>${nx ? (nx[0] - xp) + ' XP lagi menuju ' + nx[1] : 'Julukan tertinggi tercapai!'}</small></div></div>` +
    '<div class="eb-prest">' + pr.map(p => `<span class="${p[2] ? 'on' : ''}" title="${p[2] ? 'Prestasi diraih' : 'Belum diraih'}">${p[2] ? p[0] : '🔒'} ${p[1]}</span>`).join('') + '</div>' +
    '<div class="eb-grid">' + EB.map((e, k) => S.xp[k] != null
      ? `<button class="eb-it${S.lihat.includes(k) ? '' : ' baru'}" data-k="${k}" style="--wr:${e.w}" aria-label="${e.n}, dari Misi ${k + 1}"><span class="eb-gb">${EB_SVG[k]}</span><b>${e.n}</b>${S.lihat.includes(k) ? '' : '<em>BARU</em>'}</button>`
      : `<button class="eb-it kunci" disabled aria-label="Terkunci, selesaikan Misi ${k + 1}"><span class="eb-gb">🔒</span><b>???</b><small>Misi ${k + 1}</small></button>`).join('') + '</div>' +
    `<p class="eb-info">${dapat ? 'Ketuk sebuah bukti untuk melihat detailnya.' : 'Kosong. Selesaikan misi untuk mengumpulkan bukti.'}</p>`;
  $('bag').querySelectorAll('.eb-it:not(.kunci)').forEach(b => b.onclick = () => bukaBag(+b.dataset.k, b));
}

function bukaBag(k) {
  const e = EB[k], m = MISI[k];
  if (!S.lihat.includes(k)) { S.lihat.push(k); simpan(); renderBag(); }
  const ov = document.createElement('dialog'); ov.className = 'eb-ov';
  ov.innerHTML = `<div class="eb-md" aria-label="${e.n}" style="--wr:${e.w}"><button class="eb-x" aria-label="Tutup">✕</button><div class="eb-stage"><i class="eb-ring"></i><div class="eb-big">${EB_SVG[k]}</div>${'<span class="eb-sp" aria-hidden="true">✨</span>'.repeat(6)}</div><span class="eb-jenis">${e.j}</span><h3>${e.n}</h3><p>${e.d}</p><div class="eb-dari">📍 Didapat setelah menyelesaikan <b>Misi ${k + 1}: ${m.judul}</b> · +${S.xp[k]} XP</div></div>`;
  const tutup = () => ov.close();
  ov.addEventListener('close', () => { ov.remove(); const b = document.querySelector(`.eb-it[data-k="${k}"]`); if (b) b.focus(); });
  ov.onclick = ev => { if (ev.target === ov) tutup(); };
  ov.querySelector('.eb-x').onclick = tutup;
  document.body.appendChild(ov); ov.showModal(); ov.querySelector('.eb-x').focus();
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