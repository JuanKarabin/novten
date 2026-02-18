# 📅 Guía de Integración de Calendly

Esta guía te ayudará a integrar tu widget de Calendly en la sección de Contacto de la landing page de Novten.

## 🎯 Pasos para Integrar Calendly

### 1. Obtener tu URL de Calendly

1. Inicia sesión en tu cuenta de [Calendly](https://calendly.com)
2. Ve a tu evento/tipo de reunión que quieras mostrar
3. Copia la URL de tu página de Calendly
   - Ejemplo: `https://calendly.com/tu-usuario/reunion-30min`

### 2. Editar el archivo `index.html`

Busca la sección de Contacto (línea ~570-580) y encontrarás este comentario:

```html
<!-- Cuando tengas el link de Calendly, descomenta esto y agrega tu URL:
<div class="calendly-inline-widget" 
     data-url="TU_URL_DE_CALENDLY_AQUI" 
     style="min-width:320px;height:100%;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
-->
```

### 3. Descomenta y Reemplaza

**ANTES:**
```html
<div class="contacto-calendly-placeholder">
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
  <p class="contacto-calendly-text">
    El widget de Calendly<br>se integrará aquí
  </p>
  <p class="contacto-calendly-note">
    (Esperando link de Calendly)
  </p>
</div>

<!-- Cuando tengas el link de Calendly, descomenta esto y agrega tu URL:
<div class="calendly-inline-widget" 
     data-url="TU_URL_DE_CALENDLY_AQUI" 
     style="min-width:320px;height:100%;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
-->
```

**DESPUÉS:**
```html
<!-- Elimina o comenta el placeholder -->

<!-- Widget de Calendly Activo -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/tu-usuario/reunion-30min" 
     style="min-width:320px;height:100%;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

### 4. Personalización Avanzada (Opcional)

Si quieres personalizar más el widget de Calendly, puedes agregar parámetros adicionales:

```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/tu-usuario/reunion-30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3142dd"
     style="min-width:320px;height:100%;"></div>
```

**Parámetros disponibles:**
- `hide_event_type_details=1` - Oculta detalles del evento
- `hide_gdpr_banner=1` - Oculta el banner de GDPR
- `primary_color=3142dd` - Color principal (azul de Novten)
- `text_color=03030a` - Color del texto
- `background_color=ffffff` - Color de fondo

### 5. Verificar la Integración

1. Guarda los cambios en `index.html`
2. Abre la página en tu navegador
3. Navega a la sección de Contacto
4. Verifica que el widget de Calendly se muestre correctamente
5. Prueba agendar una reunión de prueba

## 🎨 Estilos Personalizados

El widget ya está estilizado para integrarse perfectamente con el diseño de Novten:

- ✅ Fondo blanco con bordes redondeados
- ✅ Sombra sutil para profundidad
- ✅ Sticky en desktop (se mantiene visible al hacer scroll)
- ✅ Altura mínima de 700px en desktop
- ✅ Totalmente responsive en móviles

## 📱 Consideraciones Mobile

En dispositivos móviles:
- El widget se adapta automáticamente
- La altura mínima es de 450px
- Las cards de información se muestran arriba del widget
- El diseño cambia a una sola columna

## 🔧 Troubleshooting

### El widget no se muestra

1. **Verifica la URL**: Asegúrate de que la URL de Calendly sea correcta y esté activa
2. **Revisa la consola**: Abre las herramientas de desarrollador (F12) y busca errores
3. **Script cargado**: Verifica que el script de Calendly se esté cargando correctamente

### El widget se ve cortado

1. Ajusta la altura mínima en el CSS:
```css
.contacto-calendly-wrapper {
  min-height: 800px; /* Aumenta si es necesario */
}
```

### Problemas de color

1. Usa el parámetro `primary_color` en la URL para que coincida con el azul de Novten:
```
?primary_color=3142dd
```

## 📚 Recursos Adicionales

- [Documentación oficial de Calendly](https://help.calendly.com/hc/en-us/articles/223147027-Embed-options-overview)
- [Generador de embeds de Calendly](https://help.calendly.com/hc/en-us/articles/223195488-Embed-widget-generator)
- [API de Calendly](https://developer.calendly.com/)

## 💡 Tips

1. **Prueba primero**: Crea un evento de prueba en Calendly antes de integrarlo en producción
2. **Configura disponibilidad**: Asegúrate de tener tu disponibilidad configurada correctamente
3. **Notificaciones**: Configura las notificaciones de email para ti y tus clientes
4. **Confirmaciones automáticas**: Activa las confirmaciones y recordatorios automáticos

## ✅ Checklist de Integración

- [ ] Cuenta de Calendly creada y configurada
- [ ] Evento/tipo de reunión creado
- [ ] URL de Calendly copiada
- [ ] `index.html` editado con la URL correcta
- [ ] Placeholder eliminado o comentado
- [ ] Widget probado en desktop
- [ ] Widget probado en móvil
- [ ] Prueba de agendamiento realizada
- [ ] Notificaciones configuradas
- [ ] Página subida a producción

---

**¿Necesitas ayuda?** Contacta al equipo de desarrollo o consulta la documentación de Calendly.

© 2026 Novten - Todos los derechos reservados
