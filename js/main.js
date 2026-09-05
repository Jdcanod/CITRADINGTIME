// ===== Configuración de contacto =====
// WhatsApp y correo confirmados en la presentación oficial (cittsas@gmail.com, +57 316 833 71 06).
// Telegram se retiró de la landing: no hay un usuario real confirmado en ningún material recibido.
const CONTACT = {
  whatsappNumber: '573168337106',
  whatsappMessage: 'Hola TradingTime, quiero conocer más sobre sus servicios de comercio internacional.',
};

const GA4_MEASUREMENT_ID = ''; // TODO-GA4-ID: ej. 'G-XXXXXXXXXX'. Vacío = GA4 desactivado.

// ===== Enlaces de contacto =====
function buildWhatsappUrl(number) {
  const text = encodeURIComponent(CONTACT.whatsappMessage);
  return `https://wa.me/${number}?text=${text}`;
}

document.querySelectorAll('[data-channel="whatsapp"]').forEach((el) => {
  el.href = buildWhatsappUrl(CONTACT.whatsappNumber);
});

// Contactos individuales del equipo (dentro del menú desplegable de WhatsApp)
document.querySelectorAll('[data-wa-contact]').forEach((el) => {
  el.href = buildWhatsappUrl(el.dataset.waContact);
});

// ===== Selector de contacto de WhatsApp (un botón, menú con las personas) =====
document.querySelectorAll('.wa-picker__toggle').forEach((toggle) => {
  const picker = toggle.closest('.wa-picker');
  const menu = picker.querySelector('.wa-picker__menu');
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = picker.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      const spaceBelow = window.innerHeight - toggle.getBoundingClientRect().bottom;
      const menuHeight = menu.offsetHeight || 140;
      picker.classList.toggle('wa-picker--up', spaceBelow < menuHeight + 16);
    }
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.wa-picker.is-open').forEach((picker) => {
    picker.classList.remove('is-open');
    picker.querySelector('.wa-picker__toggle').setAttribute('aria-expanded', 'false');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  document.querySelectorAll('.wa-picker.is-open').forEach((picker) => {
    picker.classList.remove('is-open');
    picker.querySelector('.wa-picker__toggle').setAttribute('aria-expanded', 'false');
  });
});

// ===== Menú móvil =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Abrir menú');
    });
  });
}

// ===== Botón flotante de WhatsApp: visible tras salir del hero =====
const fab = document.querySelector('.fab-whatsapp');
const hero = document.getElementById('hero');

if (fab && hero) {
  const observer = new IntersectionObserver(
    ([entry]) => fab.classList.toggle('is-visible', !entry.isIntersecting),
    { threshold: 0 }
  );
  observer.observe(hero);
}

// ===== Año dinámico en footer =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== GA4 (opcional, solo si hay Measurement ID) =====
if (GA4_MEASUREMENT_ID) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID);
  window.gtag = gtag;
}

document.querySelectorAll('[data-channel], [data-wa-contact], .btn--instagram').forEach((el) => {
  el.addEventListener('click', () => {
    const channel = el.dataset.channel || (el.dataset.waContact ? 'whatsapp_equipo' : 'instagram');
    if (window.gtag) window.gtag('event', 'contact_click', { channel });
  });
});

// ===== Scroll-driven experience (progress bar, header state, hero parallax) =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollProgress = document.getElementById('scrollProgress');
const header = document.getElementById('header');
const heroInner = document.querySelector('.hero__inner');
const heroRoutes = document.querySelector('.hero__routes');

function updateScrollFx() {
  const scrollY = window.scrollY;

  if (scrollProgress) {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = `${pct}%`;
  }

  if (header) header.classList.toggle('is-scrolled', scrollY > 10);

  if (!prefersReducedMotion && hero && heroInner) {
    const heroHeight = hero.offsetHeight || 1;
    const progress = Math.min(scrollY / heroHeight, 1);
    heroInner.style.transform = `translateY(${scrollY * 0.12}px)`;
    heroInner.style.opacity = String(1 - progress * 0.9);
  }
}

let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      updateScrollFx();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });
updateScrollFx();

// Draw the hero "routes" illustration once, shortly after load
if (heroRoutes) {
  requestAnimationFrame(() => {
    setTimeout(() => heroRoutes.classList.add('is-drawn'), 250);
  });
}

// ===== Scroll reveal for content sections =====
const revealEls = document.querySelectorAll('[data-reveal]');
if (revealEls.length) {
  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    revealEls.forEach((el) => {
      const siblings = [...el.parentElement.children].filter((s) => s.hasAttribute('data-reveal'));
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = `${Math.min(idx * 90, 360)}ms`;
    });

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach((el) => revealObserver.observe(el));
  }
}

// ===== Timeline scrollytelling: active steps + progress track =====
const timelineItems = [...document.querySelectorAll('.timeline li')];
const timelineFill = document.querySelector('.timeline__track-fill');

if (timelineItems.length) {
  if (prefersReducedMotion) {
    timelineItems.forEach((li) => li.classList.add('is-active'));
    if (timelineFill) timelineFill.style.transform = 'scale(1)';
  } else {
    let maxActiveIndex = -1;
    const isDesktopTimeline = () => window.matchMedia('(min-width: 1024px)').matches;

    const updateTimelineFill = () => {
      if (!timelineFill) return;
      const fraction = timelineItems.length > 1 ? maxActiveIndex / (timelineItems.length - 1) : 0;
      timelineFill.style.transform = isDesktopTimeline() ? `scaleX(${fraction})` : `scaleY(${fraction})`;
    };

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idx = timelineItems.indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add('is-active');
          if (idx > maxActiveIndex) {
            maxActiveIndex = idx;
            updateTimelineFill();
          }
        }
      });
    }, { threshold: 0, rootMargin: '-40% 0px -40% 0px' });

    timelineItems.forEach((li) => timelineObserver.observe(li));
    window.addEventListener('resize', updateTimelineFill);
  }
}
