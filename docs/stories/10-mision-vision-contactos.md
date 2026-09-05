# Story 10 — Misión/Visión reales, mipymes oculta, segundo contacto

**Como** stakeholder, **quiero** ocultar temporalmente la sección de mipymes, mostrar la Misión y Visión reales, y agregar un segundo contacto de WhatsApp, **para** ajustar el sitio a la etapa actual del negocio.

## Criterios de aceptación
- [x] Sección "Nuestras mipymes" oculta (comentada en el HTML, no eliminada — fácil de reactivar) y su link del menú retirado
- [x] Tarjetas de Misión y Visión reemplazadas con el texto real de la presentación oficial (ya no son placeholder)
- [x] Nuevo bloque "¿Con quién prefieres hablar?" en la sección de contacto, con dos botones de WhatsApp nombrados: Álvaro Echeverri (número ya existente) y Nicolás Echeverri (3013566558, nuevo)
- [x] Verificado sin errores de consola ni overflow horizontal; los dos enlaces de WhatsApp resuelven a los números correctos

## Notas
- Para reactivar "Nuestras mipymes" más adelante: quitar el comentario `<!-- ... -->` que envuelve la sección en `index.html` y volver a agregar `<a href="#mipymes">Mipymes</a>` al menú.
- El botón principal de WhatsApp del hero sigue apuntando directo al número de Álvaro (sin menú) — es la acción rápida de arriba de la página.

## Ajuste posterior: menú desplegable en vez de botones duplicados
El primer intento (botón "WhatsApp" genérico + fila aparte "¿Con quién prefieres hablar?" con Álvaro
y Nicolás) se sentía redundante — se veían los mismos tres nombres/iconos juntos. Se reemplazó por
un solo botón "WhatsApp" con flecha (`.wa-picker`) que al hacer clic despliega un menú con los dos
contactos. El menú detecta si hay espacio debajo del botón (`spaceBelow` vs. la altura del menú) y
se abre hacia arriba (`.wa-picker--up`) si no lo hay, para no quedar cortado por el borde de la
pantalla en móvil. Cierra al hacer clic afuera o con Escape.
