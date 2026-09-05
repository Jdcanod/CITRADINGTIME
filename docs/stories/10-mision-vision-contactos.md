# Story 10 — Misión/Visión reales, mipymes oculta, segundo contacto

**Como** stakeholder, **quiero** ocultar temporalmente la sección de mipymes, mostrar la Misión y Visión reales, y agregar un segundo contacto de WhatsApp, **para** ajustar el sitio a la etapa actual del negocio.

## Criterios de aceptación
- [x] Sección "Nuestras mipymes" oculta (comentada en el HTML, no eliminada — fácil de reactivar) y su link del menú retirado
- [x] Tarjetas de Misión y Visión reemplazadas con el texto real de la presentación oficial (ya no son placeholder)
- [x] Nuevo bloque "¿Con quién prefieres hablar?" en la sección de contacto, con dos botones de WhatsApp nombrados: Álvaro Echeverri (número ya existente) y Nicolás Echeverri (3013566558, nuevo)
- [x] Verificado sin errores de consola ni overflow horizontal; los dos enlaces de WhatsApp resuelven a los números correctos

## Notas
- Para reactivar "Nuestras mipymes" más adelante: quitar el comentario `<!-- ... -->` que envuelve la sección en `index.html` y volver a agregar `<a href="#mipymes">Mipymes</a>` al menú.
- El botón principal de WhatsApp (hero y CTA final) sigue apuntando al número de Álvaro por defecto; los botones nuevos son un contacto directo adicional, no un reemplazo.
