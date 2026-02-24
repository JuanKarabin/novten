/**
 * NOVTEN - Landing Page JavaScript
 * Funcionalidades principales
 */

// ========================================
// NAVEGACIÓN - Cambio de color al hacer scroll
// ========================================
const navbar = document.getElementById('navbar');
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');

// Función para detectar el scroll
function handleScroll() {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Event listener para el scroll
window.addEventListener('scroll', handleScroll);

// ========================================
// MENÚ MÓVIL - Toggle
// ========================================
const navbarOverlay = document.getElementById('navbarOverlay');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');
  navbarOverlay.classList.toggle('active');
  
  // Animación del icono hamburguesa
  this.classList.toggle('active');
  
  // Prevenir scroll del body cuando el menú está abierto
  document.body.style.overflow = navbarMenu.classList.contains('active') ? 'hidden' : '';
});

// Cerrar menú móvil al hacer clic en un link
const navLinks = document.querySelectorAll('.navbar-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
    navbarOverlay.classList.remove('active');
    navbarToggle.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Cerrar menú móvil al hacer clic en el overlay
navbarOverlay.addEventListener('click', function() {
  navbarMenu.classList.remove('active');
  navbarOverlay.classList.remove('active');
  navbarToggle.classList.remove('active');
  document.body.style.overflow = '';
});

// ========================================
// SMOOTH SCROLL - Navegación suave a secciones
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Resaltar tarjeta de servicio si viene del footer
      if (targetId.startsWith('#servicio-') && targetElement.classList.contains('servicio-card')) {
        targetElement.classList.remove('servicio-card-highlight');
        void targetElement.offsetWidth; // Fuerza reflow para reiniciar animación
        targetElement.classList.add('servicio-card-highlight');
        setTimeout(() => {
          targetElement.classList.remove('servicio-card-highlight');
        }, 2500);
      }
    }
  });
});

// ========================================
// ANIMACIONES AL HACER SCROLL (Intersection Observer)
// ========================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -80px 0px'
};

const scrollObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observar elementos que queremos animar
document.addEventListener('DOMContentLoaded', function() {
  const fadeElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');
  
  fadeElements.forEach(el => {
    // No observar value-cards individualmente; se animan todas juntas desde el grid
    if (!el.classList.contains('value-card')) {
      scrollObserver.observe(el);
    }
  });
});

// Observer especial para el grid de valores: añade .visible a todas las cards a la vez
const valuesGridObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.value-card');
      cards.forEach(card => card.classList.add('visible'));
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  const valuesGrid = document.querySelector('.nosotros-values-grid');
  if (valuesGrid) {
    valuesGridObserver.observe(valuesGrid);
  }
});

// ========================================
// PREVENIR SCROLL HORIZONTAL
// ========================================
window.addEventListener('load', function() {
  document.body.style.overflowX = 'hidden';
});

// ========================================
// RESIZE HANDLER
// ========================================
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    // Cerrar menú móvil si la ventana se agranda
    if (window.innerWidth > 768) {
      navbarMenu.classList.remove('active');
      navbarToggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  }, 250);
});

// ========================================
// MARQUEE - Pausa al hover (mejor UX)
// ========================================
const marqueeTrack = document.querySelector('.marquee-track');

if (marqueeTrack) {
  const marqueeContainer = document.querySelector('.marquee-container');
  
  marqueeContainer.addEventListener('mouseenter', function() {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  
  marqueeContainer.addEventListener('mouseleave', function() {
    marqueeTrack.style.animationPlayState = 'running';
  });
}

// ========================================
// CARRUSEL DE TESTIMONIOS
// ========================================
const testimoniosData = [
  {
    quote: "Novten nos dio la claridad que necesitábamos para dar el salto. Pasamos de operar con miedo a tener una estructura sólida en Estados Unidos en menos de 90 días.",
    name: "Martín Ferreyra",
    role: "CEO, Agencia de Marketing Digital",
    location: "Buenos Aires, Argentina"
  },
  {
    quote: "El acompañamiento de Novten fue clave para entender las regulaciones y armar una LLC que se adapte a nuestra operación real. No improvisamos: cada paso fue planificado.",
    name: "Luciana Méndez",
    role: "Co-founder, SaaS B2B",
    location: "Montevideo, Uruguay"
  },
  {
    quote: "Lo que más valoro es que hablan nuestro idioma, entienden de dónde venimos y conocen el mercado al que queremos llegar. Eso es invaluable cuando estás expandiéndote.",
    name: "Santiago Ríos",
    role: "Director, Consultora IT",
    location: "Medellín, Colombia"
  }
];

let currentTestimonioIndex = 0;

// Elementos del DOM
const testimonioMain = document.getElementById('testimonioMain');
const testimonioSmall1 = document.getElementById('testimonioSmall1');
const testimonioSmall2 = document.getElementById('testimonioSmall2');
const prevBtn = document.getElementById('prevTestimonio');
const nextBtn = document.getElementById('nextTestimonio');
const indicatorsContainer = document.getElementById('testimoniosIndicators');

// Función para crear HTML de testimonio grande
function createTestimonioLarge(testimonio) {
  return `
    <div class="testimonio-quote-large">${testimonio.quote}</div>
    <div class="testimonio-author-large">
      <div class="testimonio-name-large">${testimonio.name}</div>
      <div class="testimonio-role-large">${testimonio.role}</div>
      <div class="testimonio-location-large">${testimonio.location}</div>
    </div>
  `;
}

// Función para crear HTML de testimonio pequeño
function createTestimonioSmall(testimonio) {
  return `
    <div class="testimonio-quote-small">${testimonio.quote}</div>
    <div class="testimonio-author-small">
      <div class="testimonio-name-small">${testimonio.name}</div>
      <div class="testimonio-role-small">${testimonio.role}</div>
      <div class="testimonio-location-small">${testimonio.location}</div>
    </div>
  `;
}

// Función para actualizar los testimonios
function updateTestimonios() {
  if (!testimonioMain) return;
  
  const mainIndex = currentTestimonioIndex;
  const small1Index = (currentTestimonioIndex + 1) % testimoniosData.length;
  const small2Index = (currentTestimonioIndex + 2) % testimoniosData.length;
  
  // Actualizar contenido con animación
  testimonioMain.classList.remove('fade-in');
  testimonioSmall1.classList.remove('fade-in');
  testimonioSmall2.classList.remove('fade-in');
  
  setTimeout(() => {
    testimonioMain.innerHTML = createTestimonioLarge(testimoniosData[mainIndex]);
    testimonioSmall1.innerHTML = createTestimonioSmall(testimoniosData[small1Index]);
    testimonioSmall2.innerHTML = createTestimonioSmall(testimoniosData[small2Index]);
    
    testimonioMain.classList.add('fade-in');
    testimonioSmall1.classList.add('fade-in');
    testimonioSmall2.classList.add('fade-in');
  }, 100);
  
  // Actualizar indicadores
  updateIndicators();
}

// Función para crear indicadores
function createIndicators() {
  if (!indicatorsContainer) return;
  
  indicatorsContainer.innerHTML = '';
  
  testimoniosData.forEach((_, index) => {
    const indicator = document.createElement('button');
    indicator.classList.add('testimonios-indicator');
    if (index === currentTestimonioIndex) {
      indicator.classList.add('active');
    }
    indicator.addEventListener('click', () => {
      currentTestimonioIndex = index;
      updateTestimonios();
    });
    indicatorsContainer.appendChild(indicator);
  });
}

// Función para actualizar indicadores
function updateIndicators() {
  const indicators = document.querySelectorAll('.testimonios-indicator');
  indicators.forEach((indicator, index) => {
    if (index === currentTestimonioIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Event listeners para botones de navegación
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentTestimonioIndex = (currentTestimonioIndex - 1 + testimoniosData.length) % testimoniosData.length;
    updateTestimonios();
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentTestimonioIndex = (currentTestimonioIndex + 1) % testimoniosData.length;
    updateTestimonios();
  });
}

// Event listeners para tarjetas pequeñas (click para hacer grande)
if (testimonioSmall1) {
  testimonioSmall1.addEventListener('click', () => {
    currentTestimonioIndex = (currentTestimonioIndex + 1) % testimoniosData.length;
    updateTestimonios();
  });
}

if (testimonioSmall2) {
  testimonioSmall2.addEventListener('click', () => {
    currentTestimonioIndex = (currentTestimonioIndex + 2) % testimoniosData.length;
    updateTestimonios();
  });
}

// Navegación con teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevBtn && prevBtn.click();
  } else if (e.key === 'ArrowRight') {
    nextBtn && nextBtn.click();
  }
});

// Inicializar testimonios al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  if (testimonioMain) {
    createIndicators();
    updateTestimonios();
  }
});

// ========================================
// ANILLO DE TEXTO GIRATORIO 3D
// ========================================
function initSingleRing(ring) {
  if (!ring) return;

  const text = ring.innerText;
  ring.innerText = '';

  const chars = text.split('');

  let totalAngle = 0;
  const charAngles = chars.map(char => char === ' ' ? 0.4 : 1);
  const totalWeight = charAngles.reduce((sum, weight) => sum + weight, 0);
  const baseAngle = 360 / totalWeight;

  const container = ring.closest('.circle-container');
  const radius = getComputedStyle(container).getPropertyValue('--ring-radius').trim();
  const radiusValue = parseInt(radius);

  chars.forEach((char, i) => {
    const span = document.createElement('span');
    span.innerText = char;
    span.className = 'char';
    span.style.transform = `
      rotateZ(${totalAngle}deg) 
      translateY(-${radiusValue}px) 
      rotateX(-90deg)
    `;
    totalAngle += baseAngle * charAngles[i];
    ring.appendChild(span);
  });
}

function initTextRing() {
  document.querySelectorAll('.text-ring').forEach(ring => {
    initSingleRing(ring);
  });
}

// Inicializar todos los anillos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  initTextRing();
});

// Reinicializar todos los anillos cuando cambia el tamaño de la ventana
let ringResizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(ringResizeTimer);
  ringResizeTimer = setTimeout(function() {
    document.querySelectorAll('.text-ring').forEach(ring => {
      const originalText = ring.textContent;
      ring.textContent = originalText;
      initSingleRing(ring);
    });
  }, 250);
});

// ========================================
// ANIMACIÓN SECUENCIAL DE FRASES DESTACADAS
// ========================================
function initHighlightPhrases() {
  const highlightContainer = document.querySelector('.nosotros-highlight-animated');
  
  if (!highlightContainer) return;
  
  const phrases = highlightContainer.querySelectorAll('.highlight-phrase');
  let hasAnimated = false;
  
  const phraseObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true; // Solo animar una vez
        
        // Animar cada frase con delay
        phrases.forEach((phrase, index) => {
          const delay = parseInt(phrase.getAttribute('data-delay'));
          setTimeout(() => {
            phrase.classList.add('animate');
          }, delay * 600); // 600ms entre cada frase
        });
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  });
  
  phraseObserver.observe(highlightContainer);
}

// Inicializar animación de frases
document.addEventListener('DOMContentLoaded', function() {
  initHighlightPhrases();
});

// ========================================
// LOG DE INICIALIZACIÓN
// ========================================
console.log('🚀 Novten - Landing page cargada correctamente');
