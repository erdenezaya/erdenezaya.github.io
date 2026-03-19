---
layout: page
title: ""
---

<section class="home-hero">
  <div class="hero-image-wrap">
    <div class="hero-float">
      <img class="hero-tree" src="/assets/images/hero.png" alt="Tree with cosmic roots" />
    </div>
  </div>
  <div class="hero-text">
    <h1>Erdenezaya</h1>
    <p class="hero-sub">Software engineer. Building with AI.</p>
    <div class="hero-links">
      <a href="/about/">About</a>
      <a href="https://github.com/erdenezaya" target="_blank" rel="noopener">GitHub</a>
    </div>
  </div>
</section>

<script>
(function () {
  const wrap = document.querySelector('.hero-tree');
  if (!wrap) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  document.addEventListener('mousemove', function (e) {
    targetX = (e.clientX / window.innerWidth  - 0.5) * 22;
    targetY = (e.clientY / window.innerHeight - 0.5) * 12;
  });

  // Smooth lerp loop
  (function loop() {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    wrap.style.transform = 'translate(' + currentX.toFixed(2) + 'px, ' + currentY.toFixed(2) + 'px)';
    requestAnimationFrame(loop);
  })();

  // Touch parallax
  document.addEventListener('touchmove', function (e) {
    const t = e.touches[0];
    targetX = (t.clientX / window.innerWidth  - 0.5) * 14;
    targetY = (t.clientY / window.innerHeight - 0.5) * 8;
  }, { passive: true });
})();
</script>
