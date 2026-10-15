/* CHRONOS-SPHERE PLUS: efek tambahan (konfeti, kombo, progres peta). Tidak mengubah logika halaman. */
(function () {
  var kurang = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var WARNA = ['#f4d64d', '#b25df0', '#4fd1c5', '#f08a24', '#6fbf73', '#ff6b81'];
  function wadah() {
    var w = document.getElementById('confeti');
    if (!w) { w = document.createElement('div'); w.id = 'confeti'; w.className = 'ps-confetti'; w.setAttribute('aria-hidden', 'true'); document.body.appendChild(w); }
    return w;
  }
  function confeti(n) {
    if (kurang) return;
    var w = wadah();
    for (var i = 0; i < n; i++) {
      var p = document.createElement('span'), s = p.style;
      p.className = 'ps-confetti-piece';
      s.setProperty('--x', Math.random() * 100 + 'vw'); s.setProperty('--dx', (Math.random() * 40 - 20) + 'vw');
      s.setProperty('--w', (5 + Math.random() * 5) + 'px'); s.setProperty('--h', (8 + Math.random() * 8) + 'px');
      s.setProperty('--c', WARNA[i % WARNA.length]); s.setProperty('--dur', (1.6 + Math.random() * 1.2) + 's');
      s.setProperty('--delay', Math.random() * .3 + 's'); s.setProperty('--rot', (Math.random() > .5 ? 1 : -1) * (360 + Math.random() * 360) + 'deg');
      w.appendChild(p); (function (x) { setTimeout(function () { x.remove(); }, 3200); })(p);
    }
  }
  function amati(id, fn, opsi) { var e = document.getElementById(id); if (e) new MutationObserver(fn).observe(e, opsi); }
  function ulang(e, kelas) { e.classList.remove(kelas); void e.offsetWidth; e.classList.add(kelas); }

  /* KUIS */
  if (document.getElementById('layarSoal')) {
    var all = { childList: true, characterData: true, subtree: true };
    amati('fbJudul', function () {
      var t = document.getElementById('fbJudul').textContent;
      if (t.indexOf('✅') >= 0) confeti(26);
      else if (t) ulang(document.getElementById('layarSoal'), 'kocok');
    }, all);
    ['infoPoin', 'infoStreak'].forEach(function (id) {
      amati(id, function () { ulang(document.getElementById(id), 'pop'); }, all);
    });
    amati('teksSoal', function () { ulang(document.getElementById('teksSoal'), 'baru'); }, all);
    amati('layarHasil', function () {
      var l = document.getElementById('layarHasil');
      var m = /\((\d+)%\)/.exec(document.getElementById('hasilSub').textContent);
      if (!l.hidden && m && +m[1] >= 50) confeti(m[1] >= 90 ? 90 : 50);
    }, { attributes: true, attributeFilter: ['hidden'] });
  }

  /* MISI: konfeti saat jendela hadiah/pencapaian muncul */
  var app = document.getElementById('app');
  if (app && app.classList.contains('misi')) {
    new MutationObserver(function (ms) {
      ms.forEach(function (m) { m.addedNodes.forEach(function (n) {
        if (n.nodeType === 1 && (n.matches('.m-pop') || n.querySelector('.m-pop'))) confeti(60);
      }); });
    }).observe(document.body, { childList: true, subtree: true });
  }

  /* PETA: penghitung situs yang sudah dijelajahi */
  var frame = document.querySelector('.map-frame'), pins = document.querySelectorAll('.gm-pin');
  if (frame && pins.length && location.hash !== '#atur') {
    var K = 'chronos_situs_dikunjungi', sudah = [];
    try { sudah = JSON.parse(localStorage.getItem(K)) || []; } catch (e) {}
    var kotak = document.createElement('div'); kotak.className = 'plus-petunjuk';
    frame.parentNode.insertBefore(kotak, frame);
    var tampil = function () {
      var n = pins.length, j = sudah.length;
      kotak.innerHTML = j >= n ? '🏆 <b>Hebat!</b> Semua ' + n + ' situs sudah kamu jelajahi.'
        : '👆 Ketuk pin untuk mulai · Situs dijelajahi: <b>' + j + '/' + n + '</b>';
      kotak.insertAdjacentHTML('beforeend', '<i><span style="width:' + (j / n * 100) + '%"></span></i>');
      pins.forEach(function (p) { p.classList.toggle('sudah', sudah.indexOf(p.dataset.id) >= 0); });
    };
    pins.forEach(function (p) { p.addEventListener('click', function () {
      if (sudah.indexOf(p.dataset.id) < 0) { sudah.push(p.dataset.id); try { localStorage.setItem(K, JSON.stringify(sudah)); } catch (e) {} }
    }); });
    tampil();
  }
})();