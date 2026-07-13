/**
 * Menta Print — app.js
 * Punto de entrada de la aplicación.
 * Inicializa loader, navegación, tema, menú móvil, FAQ y back-to-top.
 */

import { initInteractions } from './interactions.js';
import {
  renderProducts,
  renderPortfolio,
  renderTestimonials,
  renderFAQ
} from './components.js';

// ============================================
// Loader
// ============================================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 400);
  }
});

// ============================================
// Toggle de tema (claro/oscuro)
// ============================================
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('menta-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (saved === 'dark' || (!saved && prefersDark)) {
    root.classList.add('dark');
  }

  themeToggle?.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem(
      'menta-theme',
      root.classList.contains('dark') ? 'dark' : 'light'
    );
  });
}

// ============================================
// Navegación con fondo al hacer scroll
// ============================================
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const updateNav = () => {
    if (window.scrollY > 40) {
      nav.classList.add(
        'nav-glass',
        'bg-paper/70',
        'dark:bg-paper-dark/70',
        'shadow-sm'
      );
    } else {
      nav.classList.remove(
        'nav-glass',
        'bg-paper/70',
        'dark:bg-paper-dark/70',
        'shadow-sm'
      );
    }
  };

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();
}

// ============================================
// Menú móvil
// ============================================
function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('translate-x-0');
    mobileMenu.classList.toggle('translate-x-full', !isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      mobileMenu.classList.remove('translate-x-0');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// Link activo según la sección visible
// ============================================
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const setActive = () => {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === '#' + id);
        });
      }
    });
  };

  window.addEventListener('scroll', setActive, { passive: true });
}

// ============================================
// Botón volver arriba
// ============================================
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      backToTop.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
      backToTop.classList.add('opacity-100', 'translate-y-0');
    } else {
      backToTop.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
      backToTop.classList.remove('opacity-100', 'translate-y-0');
    }
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============================================
// Inicialización
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavScroll();
  initMobileMenu();
  initActiveNav();
  initBackToTop();

  // Renderizar componentes dinámicos
  renderProducts();
  renderPortfolio();
  renderTestimonials();
  renderFAQ();

  // Inicializar interacciones (cursor, parallax, reveals)
  initInteractions();
});