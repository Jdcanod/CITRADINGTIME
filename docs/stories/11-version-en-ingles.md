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

## Sugerencia automática de idioma (en vez de pop-up)
El cliente pidió un pop-up inicial que preguntara el idioma. Se propuso y aceptó una alternativa
menos invasiva: una **barra delgada arriba** que solo aparece cuando el idioma del navegador no
coincide con el de la página (por ejemplo, navegador en inglés entrando a la página en español).
Razones: dos de cada tres visitantes son de Colombia y Panamá y no necesitan elegir nada, y Google
penaliza en móvil las ventanas que tapan el contenido al entrar.

- La decisión se guarda en `localStorage` (`langBannerDismissed`), así que no vuelve a aparecer.
- Los botones ES/EN del menú llevan banderas en **SVG dibujado a mano, no emojis**: Windows no
  renderiza los emojis de bandera (ya había pasado con la bandera de Colombia, que salía como "CO").
- Bandera de España para ES y de EE.UU. para EN, según pidió el cliente. Alternativa posible si
  más adelante lo prefieren: bandera de Colombia para el español, dado que el público es
  colombiano y panameño.

## Notas de mantenimiento
- **Al cambiar un texto, hay que tocar los dos archivos.** Si más adelante crecen las páginas, conviene reevaluar.
- La sección "Nuestras mipymes" sigue oculta y **no se replicó** en inglés. Si se reactiva, hay que traducirla y agregarla a `en/index.html`.
- Los correos (`gerencia@`, `facturacion@`, `administracion@`) son los mismos en ambos idiomas; solo cambian las etiquetas (Management, Billing, Administration).
