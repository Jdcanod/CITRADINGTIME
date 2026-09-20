# Story 11 — Versión en inglés

**Como** comercializadora internacional, **quiero** el sitio en inglés además de español, **para** poder compartirlo con compradores en Estados Unidos, Panamá y otros mercados.

## Decisión: páginas separadas, no un botón que traduce
Se evaluaron dos caminos: un solo archivo con un botón que cambia los textos por JavaScript, o dos páginas.
Se eligió **dos páginas** (`/` en español, `/en/` en inglés) porque:
- Google indexa las dos versiones por separado y las puede mostrar según el idioma del usuario.
- Se puede enviar a un comprador extranjero el link directo en inglés.
- La vista previa al compartir por WhatsApp sale en el idioma correcto.

Costo asumido: cada cambio de texto futuro hay que hacerlo en los dos archivos.

## Criterios de aceptación
- [x] `en/index.html` con la traducción completa de todas las secciones
- [x] Reutiliza el mismo CSS, JS e imágenes (rutas `../`), sin duplicar assets
- [x] Botón **EN** en el menú español y **ES** en el inglés
- [x] `hreflang` (es, en, x-default) en las dos páginas para que Google las relacione
- [x] El mensaje que se autocompleta en WhatsApp sale en inglés desde `/en/` (vía `data-wa-message` en `<body>`)
- [x] El texto del botón de menú móvil respeta el idioma (vía `data-label-open` / `data-label-close`)
- [x] Verificado: sin errores de consola, sin peticiones fallidas, sin overflow horizontal, CSS e imágenes cargando bien desde `/en/`

## Notas de mantenimiento
- **Al cambiar un texto, hay que tocar los dos archivos.** Si más adelante crecen las páginas, conviene reevaluar.
- La sección "Nuestras mipymes" sigue oculta y **no se replicó** en inglés. Si se reactiva, hay que traducirla y agregarla a `en/index.html`.
- Los correos (`gerencia@`, `facturacion@`, `administracion@`) son los mismos en ambos idiomas; solo cambian las etiquetas (Management, Billing, Administration).
