/**
 * Menta Print — interactions.js
 * Cursor personalizado, parallax de blobs,
 * IntersectionObserver para reveals y timeline.
 */

// ============================================
// Cursor personalizado (solo desktop)
// ============================================
function initCursor() {
  const cursorDot = document.getElementById('cursorDot');
  if (!cursorDot) return;

  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animate = () => {
    dotX += (mouseX - dotX) * 0.18;
    dotY += (mouseY - dotY) * 0.18;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  };
  animate();

  const bindHover = () => {
    const hoverTargets = document.querySelectorAll(
      'a, button, .card-hover, .img-zoom'
    );
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => cursorDot.classList.add('hover'));
      el.addEventListener('mouseleave', () => cursorDot.classList.remove('hover'));
    });
  };

  // Esperar a que los componentes dinámicos se rendericen
  setTimeout(bindHover, 100);
}

// ============================================
// Parallax de blobs al hacer scroll
// ============================================
function initParallax() {
  const blobs = document.querySelectorAll('.blob');
  if (!blobs.length) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    blobs.forEach((blob, i) => {
      const speed = (i % 2 === 0) ? 0.05 : -0.03;
      blob.style.transform = `translateY(${y * speed}px)`;
    });
  }, { passive: true });
}

// ============================================
// Reveal on scroll con IntersectionObserver
// ============================================
function initReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-scale, .timeline-line');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));

  // Re-observar elementos inyectados dinámicamente
  const mutationObserver = new MutationObserver(() => {
    document.querySelectorAll('.reveal:not(.visible), .reveal-scale:not(.visible), .timeline-line:not(.visible)').forEach(el => {
      observer.observe(el);
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

// ============================================
// Export
// ============================================
export function initInteractions() {
  initCursor();
  initParallax();
  initReveal();
}