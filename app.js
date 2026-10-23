(function () {
  'use strict';

  // ---- Before/after sliders -------------------------------------------
  function setPos(compare, range, pct) {
    pct = Math.max(0, Math.min(100, pct));
    compare.style.setProperty('--pos', pct + '%');
    if (range) range.value = Math.round(pct);
  }

  document.querySelectorAll('.compare-block').forEach(function (block) {
    var compare = block.querySelector('[data-compare]');
    var range = block.querySelector('[data-compare-range]');
    if (!compare) return;

    if (range) {
      range.addEventListener('input', function () { setPos(compare, null, Number(range.value)); });
    }

    // Drag directly on the image (mouse, pen or touch).
    var dragging = false;
    function fromEvent(e) {
      var r = compare.getBoundingClientRect();
      setPos(compare, range, ((e.clientX - r.left) / r.width) * 100);
    }
    compare.addEventListener('pointerdown', function (e) {
      dragging = true;
      compare.setPointerCapture(e.pointerId);
      fromEvent(e);
    });
    compare.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e); });
    compare.addEventListener('pointerup', function () { dragging = false; });
    compare.addEventListener('pointercancel', function () { dragging = false; });
  });

  // ---- Example tabs ----------------------------------------------------
  var exampleCompare = document.querySelector('[data-examples]');
  var tabs = document.querySelectorAll('[data-example]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var n = tab.getAttribute('data-example');
      tabs.forEach(function (t) { t.setAttribute('aria-pressed', String(t === tab)); });
      ['before', 'after'].forEach(function (kind) {
        var img = exampleCompare.querySelector('.compare-' + kind);
        var base = 'media/' + kind + '_' + n;
        img.srcset = base + '-720.webp 720w, ' + base + '.webp 1080w';
        img.src = base + '-720.webp';
      });
      track('example_' + n);
    });
  });

  // ---- Email-yourself the download link (no backend) -------------------
  var form = document.querySelector('[data-send-link]');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.elements.email.value.trim();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var subject = 'DVR Doctor download link';
      var body = 'Download DVR Doctor on your computer: https://dvrdoctor.com/releases\n\n' +
        'Pick "Try it free" when it opens to clean the first 30 seconds of a clip.';
      window.location.href = 'mailto:' + encodeURIComponent(email) +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  // ---- Click tracking --------------------------------------------------
  // Sends events to Cloudflare Zaraz when it is enabled on the zone; does
  // nothing otherwise. Swap in Plausible/Umami/GA here if you use one.
  function track(name) {
    try {
      if (window.zaraz && typeof window.zaraz.track === 'function') window.zaraz.track(name);
    } catch (err) { /* never block a click on analytics */ }
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-track]');
    if (el) track(el.getAttribute('data-track'));
  });
})();
