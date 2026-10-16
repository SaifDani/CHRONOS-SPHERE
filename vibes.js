/* vibes.js — kartu muncul halus + sorot cahaya mengikuti kursor + warna aksen per kartu.
   Dipakai halaman: panduan, papan_skor, pengaturan (butuh body.page-vibes). */
(function () {
  if (!document.body.classList.contains('page-vibes')) return;

  // pasangan warna [gelap, terang], dipakai bergantian kalau kartu belum punya --acc-a sendiri
  var PAL = [
    ['#2f7ce8', '#4a9cf5'],   // biru
    ['#d9552b', '#f0805a'],   // jingga
    ['#1fa39b', '#4fd1c5'],   // tosca
    ['#8a4fe0', '#b985ff'],   // ungu
    ['#c98a2b', '#e0b24a'],   // emas
    ['#e0435f', '#ef6f8c'],   // merah muda
    ['#3f8f4f', '#6fbf73']    // hijau
  ];

  var kartu = Array.prototype.slice.call(
    document.querySelectorAll('.teori-page .teori-section, .challenge-card'));
  kartu.forEach(function (c, i) {
    c.classList.add('vfx');
    if (!c.style.getPropertyValue('--acc-a')) {
      var p = PAL[i % PAL.length];
      c.style.setProperty('--acc-a', p[0]);
      c.style.setProperty('--acc-b', p[1]);
    }
  });
  if (!kartu.length) return;

  var kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // muncul berurutan
  if (!kurangiGerak && 'IntersectionObserver' in window) {
    document.body.classList.add('vb-reveal');
    var io = new IntersectionObserver(function (entri) {
      var n = 0;
      entri.forEach(function (x) {
        if (!x.isIntersecting) return;
        x.target.style.setProperty('--i', n++);
        x.target.classList.add('in');
        io.unobserve(x.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
    kartu.forEach(function (c) { io.observe(c); });
  }

  // sorot cahaya mengikuti kursor (hanya perangkat dengan mouse)
  if (!kurangiGerak && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    kartu.forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
        c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
      });
    });
  }
})();