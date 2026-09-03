# Story 8 — Integración de contenido real (PDF + catálogo)

**Como** stakeholder, **quiero** que la landing use el contenido y las imágenes reales de mi material oficial en vez de copy genérico, **para que** el sitio refleje con precisión mi negocio y gane credibilidad.

## Fuentes usadas
- `Presentación C.I Trading Time S.A.S. Empresas.pdf` (22 páginas): texto institucional, contacto real, descripciones de cada mipyme y fotografías/ilustraciones.
- `catalogo.xlsx`: 6 categorías reales de producto con ítems específicos.

## Criterios de aceptación
- [x] WhatsApp real (`+57 316 833 71 06`) reemplaza el número placeholder en todos los botones
- [x] Correo real (`cittsas@gmail.com`) reemplaza el placeholder `@tradingtime.com` en el footer, hasta que el correo corporativo esté activo
- [x] Sección "Qué hacemos" reemplazada por las 6 categorías reales del catálogo, con productos específicos como tags
- [x] Nueva sección "Nuestras mipymes" con las 8 marcas reales (CFS Coffee, Raso Maker, Nunchuah, Terra Dulce, Frudaqui, Monte Real, Ladys Confecciones, Neutral Arquitectura), cada una con descripción real extraída del PDF
- [x] Nueva franja "Consultoría y asesoría" con los 3 servicios reales (comercio internacional empresarial, potencialización de mipymes, logística internacional)
- [x] Fotografías reales extraídas del PDF, optimizadas para web (18–180 KB c/u) en `assets/gallery/` y `assets/icons/`, usadas en: hero, categorías de servicio, mipymes y sección de credibilidad
- [x] "Quiénes somos" ampliado con el párrafo real de propósito (integración con CFS Coffee y Raso Maker)

## Bugs encontrados y corregidos durante la integración
- Los íconos decorativos extraídos del PDF (taza de café, canasta de frutas, fábrica) tenían fondo negro opaco, no transparente — se aplicó chroma-key para hacerlos transparentes, y se les dio fondo navy (no crema) porque su trazo es blanco.
- El emoji de bandera de Colombia (🇨🇴) se renderiza como texto "CO" en Windows por limitaciones de la fuente de emoji del sistema — se reemplazó por un SVG inline de la bandera.

## Corrección: CFS Coffee y Raso Maker LLC
El PDF nunca describe a Raso Maker LLC por separado: solo aparece nombrada junto a CFS Coffee
en la página 2 ("MIPYME: CFS COFFEE ... RASOMAKER LLC") y en el párrafo de propósito de la
página 3. La descripción individual que se le había dado a Raso Maker era una inferencia mía,
no un dato extraído — el usuario lo notó y tenía razón en cuestionarlo. Se corrigió fusionando
ambas en una sola tarjeta ("CFS Coffee & Raso Maker LLC") con una descripción que sí está
respaldada por el texto real del PDF.

## Fotos reales por mipyme (una por marca, todas distintas entre sí)
| Mipyme | Imagen | Fuente en el PDF |
|---|---|---|
| CFS Coffee & Raso Maker LLC | Costal de café (ilustración) | página 2 |
| Nunchuah | Productor con cacao en mano | página 5 |
| Terra Dulce | Empaque/logo "TD" | página 7 |
| Frudaqui | Empaque "Harina de banano verde" | página 10 |
| Monte Real | Botella "Brûlé Crema de Café" con logo | página 12 |
| Ladys Confecciones | Uniforme corporativo (foto distinta a la de "Qué hacemos") | página 14 |
| Neutral Arquitectura | Espacio comercial con muro verde (foto distinta a la de "Qué hacemos") | página 19 |

Ninguna imagen se repite dos veces en la misma página — las categorías de "Qué hacemos" y las
tarjetas de "Nuestras mipymes" usan fotos distintas aunque sean de la misma marca/sector.

## Pulido posterior (misma sesión)
- Se retiró el botón de Telegram de toda la landing (hero, CTA final, copy de "Cómo trabajamos"): no existe un usuario real en ningún material recibido.
- Se agregó `alt` text descriptivo a las fotos con contenido real (antes estaban vacíos por error).
- Se corrigió una redacción confusa en la cita de credibilidad ("más de una trayectoria" → "una trayectoria").
- `og:image` ahora usa una foto real en vez del logo, para mejores previews al compartir el link.

## Fotos generadas por IA para categorías sin foto en el PDF
El catálogo (`catalogo.xlsx`) no trae imágenes. Para 3 de las 6 categorías de "Qué hacemos"
(Proteínas de origen animal, Papelería, Fármacos y químicos) se generaron fotos con IA a partir
de prompts específicos en estilo editorial/comercial, coherente con el resto de fotografías
reales de la página. El usuario las generó y las dejó en la carpeta del proyecto; se optimizaron
(1200px, JPEG ~80-150 KB) y se movieron a `assets/gallery/`.

## Corrección de encuadre (todas las fotos de mipymes)
Primer intento: recortar manualmente Nunchuah y Ladys Confecciones a ~1.8:1 y subir la altura
de la tarjeta (140px → 210px), pero `object-fit: cover` seguía recortando cabeza/corcho de
botella en varias fotos — cualquier tarjeta de altura fija con `cover` recorta algo si el
aspect ratio de la foto no calza exacto. El usuario lo notó y pidió que ninguna imagen se viera
cortada, aunque quedara más pequeña.

Fix definitivo: `object-fit: contain` en `.brand-card__img` (antes solo se usaba en los íconos),
con fondo crema de relleno y altura de tarjeta subida a 260px. Ahora la foto completa siempre
es visible — se ve "enmarcada" con un borde crema en vez de recortada.

El recorte manual previo de Nunchuah/Ladys terminó siendo parte del problema: aunque técnicamente
no perdía información con `contain`, sí le quitaba contexto importante de antemano (la mano con
granos de cacao de Nunchuah, el uniforme completo de Ladys). Se restauraron las fotos originales
sin recortar — ahora Nunchuah muestra la mano con el cacao y Ladys el uniforme completo de arriba
a abajo.

## Pendiente
- 🟡 Migrar el correo de contacto a `@tradingtime.com` cuando exista.
- 🟡 Si en el futuro se confirma un usuario real de Telegram, volver a agregar el botón (ver commit/historia anterior para el patrón).
