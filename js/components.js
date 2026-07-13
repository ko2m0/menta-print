/**
 * Menta Print — components.js
 * Datos y renderizado de componentes dinámicos:
 * productos, portafolio, testimonios y FAQ.
 */

// ============================================
// Datos de productos
// ============================================
const PRODUCTS = [
  {
    title: 'Kits de Bienvenida Corporativos',
    description: 'Libretas, tazas, bolsas y más — curados para nuevos integrantes del equipo.',
    image: '/assets/images/product-welcome-kit.webp',
    alt: 'Kit de bienvenida corporativo con libreta, taza y bolsa de tela',
    priceFrom: '$900',
    priceUnit: 'MXN',
    delay: 0
  },
  {
    title: 'Playeras Personalizadas',
    description: 'Algodón suave, estampados con sentido. Hechas para usarse, no para guardarse.',
    image: '/assets/images/product-tshirts.webp',
    alt: 'Playeras de algodón plegadas en tonos neutros',
    priceFrom: '$350',
    priceUnit: 'MXN',
    delay: 80
  },
  {
    title: 'Tazas Premium',
    description: 'Tazas de cerámica con el peso justo. Personalizadas con esmalte a tu gusto.',
    image: '/assets/images/product-mugs.webp',
    alt: 'Tazas de cerámica apiladas en tonos menta y crema',
    priceFrom: '$240',
    priceUnit: 'MXN',
    delay: 160
  },
  {
    title: 'Bolsas de Tela',
    description: 'Lona gruesa, serigrafiadas o bordadas. La bolsa que la gente sí carga.',
    image: '/assets/images/product-totes.webp',
    alt: 'Bolsas de tela con estampados botánicos minimalistas',
    priceFrom: '$280',
    priceUnit: 'MXN',
    delay: 0
  },
  {
    title: 'Gorras',
    description: 'Bordadas o estampadas. Desestructuradas, cómodas, discretamente cool.',
    image: '/assets/images/product-caps.webp',
    alt: 'Gorra bordada minimalista en tono crema',
    priceFrom: '$320',
    priceUnit: 'MXN',
    delay: 80
  },
  {
    title: 'Kits de Boda',
    description: 'Invitaciones, programas y detalles que combinan con el feeling de tu día.',
    image: '/assets/images/product-wedding.webp',
    alt: 'Suite de papelería de boda elegante con sello de cera',
    priceFrom: '$70',
    priceUnit: 'MXN/pieza',
    delay: 160
  },
  {
    title: 'Kits de Cumpleaños',
    description: 'Banners, vajilla y recuerdos — coordinados, lindos, nada infantiles.',
    image: '/assets/images/product-birthday.webp',
    alt: 'Kit de celebración de cumpleaños con platos y vasos en tono menta',
    priceFrom: '$1,200',
    priceUnit: 'MXN',
    delay: 0
  },
  {
    title: 'Empaques',
    description: 'Cajas, envolturas y experiencias de unboxing que hacen sentir especial a tu producto.',
    image: '/assets/images/product-packaging.webp',
    alt: 'Cajas de empaque premium en tonos menta y crema',
    priceFrom: '$55',
    priceUnit: 'MXN/pieza',
    delay: 80
  },
  {
    title: 'Stickers y Etiquetas',
    description: 'Die-cut, kiss-cut, vinil, papel. Stickers que la gente colecciona, no tira.',
    image: '/assets/images/product-stickers.webp',
    alt: 'Stickers troquelados con ilustraciones coloridas',
    priceFrom: '$9',
    priceUnit: 'MXN/pieza',
    delay: 160
  }
];

// ============================================
// Datos del portafolio
// ============================================
const PORTFOLIO = [
  {
    title: 'Veridian Studio',
    category: 'Identidad de marca',
    image: '/assets/images/portfolio-veridian.webp',
    alt: 'Identidad de marca Veridian Studio con tarjetas y papelería'
  },
  {
    title: 'Tech Summit 2025',
    category: 'Kit de evento',
    image: '/assets/images/portfolio-summit.webp',
    alt: 'Kit de bienvenida para evento con gafetes y bolsa'
  },
  {
    title: 'Northwind Co.',
    category: 'Kit de bienvenida',
    image: '/assets/images/portfolio-northwind.webp',
    alt: 'Kit de bienvenida corporativo en flat lay'
  },
  {
    title: 'Elena & Marco',
    category: 'Boda',
    image: '/assets/images/portfolio-wedding.webp',
    alt: 'Suite de papelería de boda'
  },
  {
    title: 'Luma Skincare',
    category: 'Empaque',
    image: '/assets/images/portfolio-luma.webp',
    alt: 'Cajas de empaque premium para skincare'
  },
  {
    title: 'Sofía cumple 1',
    category: 'Kit de cumpleaños',
    image: '/assets/images/portfolio-birthday.webp',
    alt: 'Kit de cumpleaños infantil'
  }
];

// ============================================
// Datos de testimonios
// ============================================
const TESTIMONIALS = [
  {
    text: 'Menta entendió nuestra marca mejor que nosotros. Los kits de bienvenida que hicieron para nuestros nuevos hires se volvieron el tema del que todos hablan.',
    name: 'Andrea Ríos',
    role: 'Líder de People, Northwind',
    initials: 'AR',
    color: 'bg-mint/40'
  },
  {
    text: 'Trabajar con ellos se sintió como colaborar con amigos que además son muy buenos diseñando. El resultado superó lo que tenía en mente.',
    name: 'Diego Méndez',
    role: 'Fundador, Luma Skincare',
    initials: 'DM',
    color: 'bg-ink-soft/20'
  },
  {
    text: 'Las invitaciones de la boda fueron exactamente el feeling que queríamos. Nuestros invitados todavía hablan de ellas. Valió cada peso.',
    name: 'Elena Vargas',
    role: 'Novia, Octubre 2025',
    initials: 'EV',
    color: 'bg-mint/40'
  }
];

// ============================================
// Datos de FAQ
// ============================================
const FAQS = [
  {
    question: '¿Me pueden ayudar con el diseño?',
    answer: 'Claro que sí. Nuestros diseñadores internos trabajan contigo desde el concepto hasta el arte final. Trae un boceto, un moodboard o sólo una idea — nosotros nos encargamos del resto.'
  },
  {
    question: '¿Hay un pedido mínimo?',
    answer: 'Depende del producto. Algunos artículos empiezan en 10 piezas, otros en 50. Nos encanta trabajar con producciones pequeñas — de hecho, es nuestro fuerte.'
  },
  {
    question: '¿Hacen envíos?',
    answer: 'Sí, enviamos a toda la República Mexicana y también internacionalmente. Empacamos todo con cuidado y te compartimos guía para que sepas exactamente cuándo llega.'
  },
  {
    question: '¿Cuánto tarda la producción?',
    answer: 'La mayoría de los proyectos tardan de 2 a 4 semanas desde la aprobación del diseño hasta la entrega. Tenemos opciones exprés cuando el tiempo aprieta — sólo avísanos.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Transferencia bancaria, tarjeta de crédito y PayPal. Normalmente pedimos 50% por adelantado y el resto antes del envío.'
  }
];

// ============================================
// SVGs reutilizables
// ============================================
const STAR_SVG = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>`;
const ARROW_SVG = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>`;

// ============================================
// Renderizar productos
// ============================================
export function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((product) => `
    <article class="card-hover group bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-paper-dim dark:border-white/10 reveal" style="transition-delay:${product.delay}ms">
      <div class="img-zoom aspect-[4/3] bg-paper-dim">
        <img src="${product.image}" alt="${product.alt}" loading="lazy" class="w-full h-full object-cover" />
      </div>
      <div class="p-7">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h3 class="font-display font-semibold text-xl">${product.title}</h3>
            <p class="text-ink-soft text-sm mt-2">${product.description}</p>
          </div>
        </div>
        <div class="mt-6 flex items-center justify-between">
          <span class="text-sm text-ink-soft">Desde <span class="font-semibold text-ink">${product.priceFrom}</span> <span class="text-xs">${product.priceUnit}</span></span>
          <a href="#contacto" class="text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
            Pedir cotización ${ARROW_SVG}
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// ============================================
// Renderizar portafolio
// ============================================
export function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO.map((item, i) => `
    <div class="masonry-item reveal" style="transition-delay:${(i % 3) * 80}ms">
      <div class="img-zoom rounded-3xl overflow-hidden group relative">
        <img src="${item.image}" alt="${item.alt}" loading="lazy" class="w-full h-auto object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div class="text-paper">
            <div class="text-xs uppercase tracking-wider opacity-80">${item.category}</div>
            <div class="font-display font-semibold text-xl mt-1">${item.title}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================
// Renderizar testimonios
// ============================================
export function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;

  grid.innerHTML = TESTIMONIALS.map((t, i) => `
    <article class="card-hover bg-white dark:bg-white/5 rounded-3xl p-8 border border-paper-dim dark:border-white/10 reveal" style="transition-delay:${i * 80}ms">
      <div class="flex gap-1 text-mint mb-5" aria-label="5 de 5 estrellas">
        ${STAR_SVG.repeat(5)}
      </div>
      <p class="text-ink leading-relaxed">"${t.text}"</p>
      <div class="mt-6 flex items-center gap-3">
        <div class="w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-display font-semibold">${t.initials}</div>
        <div>
          <div class="font-medium text-sm">${t.name}</div>
          <div class="text-xs text-ink-soft">${t.role}</div>
        </div>
      </div>
    </article>
  `).join('');
}

// ============================================
// Renderizar FAQ
// ============================================
export function renderFAQ() {
  const container = document.getElementById('faqContainer');
  if (!container) return;

  container.innerHTML = FAQS.map((faq, i) => `
    <div class="faq-item bg-white dark:bg-white/5 rounded-2xl border border-paper-dim dark:border-white/10 reveal" style="transition-delay:${i * 60}ms">
      <button class="faq-toggle w-full flex items-center justify-between p-6 text-left" aria-expanded="false">
        <span class="font-display font-semibold text-lg pr-4">${faq.question}</span>
        <span class="faq-icon w-8 h-8 rounded-full bg-mint/30 dark:bg-mint/10 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>
        </span>
      </button>
      <div class="faq-answer px-6 text-ink-soft">${faq.answer}</div>
    </div>
  `).join('');

  initFAQAccordion(container);
}

// ============================================
// Acordeón de FAQ
// ============================================
function initFAQAccordion(container) {
  container.querySelectorAll('.faq-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      container.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-toggle').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}