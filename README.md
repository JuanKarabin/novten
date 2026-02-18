# 🌐 Novten - Landing Page

Landing page responsive y moderna para Novten, diseñada siguiendo estrictamente la identidad visual corporativa.

## 📋 Estructura del Proyecto

```
novten/
├── images/
│   ├── empresario-laptop.png      # Imagen del profesional con laptop
│   ├── fondos-18.png              # Fondo azul/blanco (reservado)
│   ├── fondos-24.png              # Fondo del hero
│   ├── fondos-29.png              # Fondo oscuro testimonios
│   ├── joven-empresario.png       # Imagen hero principal
│   ├── logo-blanco.png            # Logo blanco (footer)
│   ├── logo-lila.png              # Logo lila (navegación)
│   ├── n-logo-lila.png            # Logo N lila (card contacto)
│   └── recurso-n.png              # Elemento decorativo flotante
├── index.html                      # Estructura HTML5 semántica
├── styles.css                      # Estilos CSS con variables de diseño
├── script.js                       # Funcionalidades JavaScript
├── README.md                       # Documentación del proyecto
└── CALENDLY-INTEGRATION.md         # Guía de integración de Calendly
```

## 🎨 Sistema de Diseño

### Colores

| Color | HEX | CMYK | Uso |
|-------|-----|------|-----|
| **Principal** | `#3142dd` | 88-73-0-0 | Títulos destacados, CTAs, elementos principales |
| **Secundario** | `#ffffff` | 0-0-0-0 | Fondos, textos sobre fondos oscuros |
| **Terciario** | `#ececec` | 9-6-7-0 | Fondos secundarios, separadores |
| **Acento** | `#787365` | 48-33-0-0 | Textos descriptivos, bajadas |
| **Contraste** | `#03030a` | 91-79-60-93 | Textos principales, títulos |

### Tipografía

**Fuente:** Syne (Google Fonts)
- **Variables:** Regular (400) y Semibold (600)
- **Uso en mayúsculas:** Titulares, textos cortos, bullets, destacados
- **Uso en minúsculas:** Textos extensos, bajadas, aclaraciones
- **Nunca:** Minúsculas para titulares

### Jerarquía Tipográfica

- **H1:** 48px - 96px (responsive) | Semibold | Mayúsculas
- **H2:** 36px - 72px (responsive) | Semibold | Mayúsculas
- **H3:** 24px - 48px (responsive) | Semibold | Mayúsculas
- **Párrafos:** 16px - 20px (responsive) | Regular | Minúsculas
- **Small:** 14px - 16px (responsive) | Regular | Minúsculas

### Elementos Gráficos

- **Flechas:** 38pt | Regular | Dirección y bullets (→)
- **Números grandes:** 229pt | Decorativos
- **Números pequeños:** 38pt | Estadísticas
- **Logos:**
  * `logo-lila.png` - Navegación superior (PNG transparente)
  * `logo-blanco.png` - Footer (PNG con texto blanco)
  * `n-logo-lila.png` - Card especial de contacto
  * `recurso-n.png` - Elemento decorativo flotante (secciones Nosotros y Servicios)

## 🚀 Secciones

### ✅ Implementadas

1. **Inicio (Hero)**
   - Título principal con jerarquía visual
   - Descripción del servicio
   - Botones CTA (Agendar llamada, Conocer servicios)
   - Estadísticas destacadas (+200 empresas, +15 países, 99% retención)
   - Imagen del profesional con efectos visuales
   - Fondo con gradiente y overlay de imagen

2. **Navegación**
   - Fija en la parte superior
   - Transparente inicialmente
   - Fondo blanco al hacer scroll
   - Menú responsive con hamburguesa en móvil
   - Enlaces a todas las secciones

3. **Nosotros**
   - Franja animada con palabras clave (marquee infinito)
   - Sección "De la expansión intuitiva a la consolidación estratégica"
   - Imagen del empresario con laptop
   - Sección "Operar en el exterior sin complicaciones"
   - Tarjetas de Misión y Visión con diseños diferenciados
   - Grid de valores (5 valores con numeración)
   - Animación de pausa en marquee al hover
   - Diseño completamente responsive

4. **Servicios**
   - Encabezado centrado con título y descripción
   - Grid de 6 tarjetas de servicios (3 columnas en desktop)
   - Íconos SVG personalizados para cada servicio
   - Lista de características con bullets en flecha
   - Efectos hover con elevación y sombra
   - CTA principal "Consultá por tu proyecto"
   - Layout responsive (3 col → 2 col → 1 col)

5. **Testimonios**
   - Fondo oscuro con gradiente y overlay de imagen
   - Carrusel interactivo con 3 testimonios
   - Layout: 1 tarjeta grande + 2 tarjetas pequeñas
   - Navegación con flechas (anterior/siguiente)
   - Indicadores de posición con puntos
   - Click en tarjetas pequeñas para mostrarlas en grande
   - Navegación con teclado (flechas izquierda/derecha)
   - Animaciones de transición suaves
   - Diseño completamente responsive

6. **Contacto**
   - Encabezado con título y descripción llamativa
   - Grid de 2 columnas: Cards de info + Calendly
   - 4 cards de información con íconos:
     * Email (con enlace mailto)
     * Teléfono (con enlace tel)
     * Ubicación (Miami, Florida)
     * Card especial con logo y mensaje
   - Espacio preparado para integración de Calendly
   - Placeholder visual para el widget
   - Sticky sidebar de Calendly (desktop)
   - Layout responsive (2 col → 1 col)
   - Efectos hover en cards

7. **Footer**
   - Fondo oscuro con gradiente (mismo que testimonios)
   - Grid de 3 columnas (desktop):
     * Columna izquierda: Logo + descripción + CTA
     * Columna central: Links de navegación
     * Columna derecha: Links de servicios
   - Separador decorativo con gradiente
   - Footer bottom con copyright y tagline
   - Créditos "Designed by KALLI DIGITAL"
   - Enlaces con efectos hover
   - Layout responsive (3 col → 2 col → 1 col)

## 💻 Funcionalidades JavaScript

- ✅ Cambio de color de la navegación al hacer scroll
- ✅ Menú hamburguesa responsive para móviles
- ✅ Smooth scroll a secciones
- ✅ Animaciones al scroll con Intersection Observer
- ✅ Cierre de menú móvil al hacer clic fuera
- ✅ Prevención de scroll horizontal
- ✅ Animación de marquee infinito con pausa al hover
- ✅ Responsive handler para cierre automático de menú
- ✅ Carrusel de testimonios interactivo
- ✅ Navegación con flechas y teclado
- ✅ Indicadores de posición con navegación directa
- ✅ Animaciones de transición entre testimonios

## 📱 Responsive Design

### Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

### Características Responsive

- Grid de 2 columnas en desktop → 1 columna en mobile
- Menú hamburguesa en dispositivos móviles
- Imágenes adaptativas con `object-fit`
- Textos con `clamp()` para escalado fluido
- Botones de ancho completo en móvil

## 🌐 Compatibilidad

- ✅ Chrome (última versión)
- ✅ Firefox (última versión)
- ✅ Safari (última versión)
- ✅ Edge (última versión)
- ✅ Dispositivos móviles iOS y Android

## 📦 Dependencias

- **Google Fonts:** Syne (Regular 400, Semibold 600)
- **Sin frameworks:** CSS Vanilla puro
- **Sin librerías externas:** JavaScript Vanilla

## 🚀 Cómo usar

1. **Abrir el proyecto:**
   ```bash
   # Simplemente abre index.html en tu navegador
   ```

2. **Desarrollo local con servidor:**
   ```bash
   # Opción 1: Python
   python -m http.server 8000
   
   # Opción 2: Node.js
   npx serve
   
   # Opción 3: PHP
   php -S localhost:8000
   ```

3. **Acceder:**
   - Abre `http://localhost:8000` en tu navegador

## 📝 Próximos Pasos

- [x] Implementar sección "Nosotros" ✅
- [x] Implementar sección "Servicios" con cards ✅
- [x] Implementar sección "Testimonios" con carrusel ✅
- [x] Implementar sección "Contacto" ✅
- [x] Agregar footer completo ✅
- [ ] Integrar link de Calendly (pendiente URL del cliente)
- [ ] Optimizar imágenes para web (conversión a WebP)
- [ ] Agregar meta tags para SEO y Open Graph
- [ ] Implementar animaciones adicionales (scroll reveals)
- [ ] Agregar Google Analytics o tracking
- [ ] Testing cross-browser completo
- [ ] Optimización de performance (Lighthouse)
- [ ] Agregar redes sociales (opcional)

## 🎯 Características Destacadas

- ✨ Diseño 100% fiel a la identidad visual de Novten
- 🎨 Variables CSS para fácil mantenimiento
- 📱 Totalmente responsive y mobile-first
- ⚡ Optimizado para rendimiento
- ♿ Semántica HTML5 para accesibilidad
- 🚀 Sin dependencias de frameworks pesados
- 💫 Animaciones suaves y profesionales

## 📄 Licencia

© 2026 Novten. Todos los derechos reservados.

---

**Desarrollado con** ❤️ **para Novten**
