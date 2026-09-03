# PRD — Landing Page TradingTime

**Tipo de documento:** Product Requirements Document (BMAD-METHOD)
**Entrada:** [project-brief.md](./project-brief.md)
**Fecha:** 2026-08-25
**Autor:** Juan Cano (con apoyo de Claude)
**Estado:** Borrador — supuestos marcados con 🟡 pendientes de confirmación del stakeholder

> Este PRD resuelve los puntos `[PENDIENTE]` del Project Brief con supuestos razonables para poder avanzar a diseño y desarrollo sin bloquear el proyecto. Los supuestos están marcados con 🟡 y deben confirmarse antes de publicar en producción.

---

## 1. Objetivo del producto

Landing page de una sola página para C.I Trading Time S.A.S. que comunique su propuesta de valor como comercializadora internacional B2B y convierta visitantes en contactos calificados vía WhatsApp, Telegram e Instagram.

## 2. Resolución de puntos pendientes del Brief

| Punto pendiente | Decisión adoptada | Estado |
|---|---|---|
| Disparador del proyecto | Construcción de presencia digital / credibilidad de marca (no depende de un evento específico) | 🟡 confirmar |
| Sectores prioritarios | ✅ Confirmado con el catálogo real (`catalogo.xlsx`): 6 categorías — Agroalimentos, Proteínas de origen animal, Construcción, Papelería, Fármacos y químicos, Dotaciones empresariales | ✅ decidido |
| Pauta paga | Fuera de alcance del MVP; la landing se optimiza para SEO básico y para recibir tráfico de Instagram/referidos | 🟡 confirmar |
| Formulario de contacto | **No se incluye.** Solo enlaces directos a WhatsApp / Telegram / Instagram, según el alcance ya acordado (sin backend) | ✅ decidido |
| Analítica | Se incluye Google Analytics 4 (GA4) vía snippet, con Measurement ID a configurar por el cliente. Sin costo, sin backend | 🟡 confirmar Measurement ID cuando exista |
| Servicios exactos | ✅ Reemplazados por las 6 categorías reales del catálogo, con productos específicos como tags (ver sección 5) | ✅ decidido |
| WhatsApp / correo real | ✅ Confirmados en la presentación oficial: WhatsApp `+57 316 833 71 06`, correo `cittsas@gmail.com`. El correo `@tradingtime.com` del Brief aún no existe — se usa el Gmail real mientras tanto | ✅ decidido (🟡 migrar a `@tradingtime.com` cuando el correo corporativo esté activo) |
| Usuario de Telegram | ✅ Se retiró el botón de Telegram de toda la landing: no existe un usuario real en ningún material recibido y un enlace inventado sería un canal de contacto roto. Se puede volver a agregar cuando exista uno real | ✅ decidido |
| Mipymes / marcas representadas | ✅ Confirmadas 8 mipymes reales vía la presentación PDF: CFS Coffee, Raso Maker LLC, Nunchuah, Terra Dulce, Frudaqui, Monte Real, Ladys Confecciones, Neutral Arquitectura — ahora tienen su propia sección "Nuestras mipymes" en la landing | ✅ decidido |
| Consultoría y asesoría | ✅ Confirmado como línea de servicio propia (comercio internacional empresarial, potencialización de mipymes, logística internacional) — se agregó como sección independiente | ✅ decidido |
| "Cómo trabajamos" | Se define un proceso de 4 pasos estándar (contacto → diagnóstico → conexión → acompañamiento) | 🟡 confirmar |
| Proveedor de hosting/DNS | Se recomienda Vercel o Netlify (gratis, SSL automático, fácil conexión de dominio propio) — ver [architecture.md](./architecture.md) | 🟡 confirmar si ya existe proveedor |
| Copy definitivo | Se redacta copy inicial en tono institucional/profesional a partir de la bio de Instagram; el cliente puede reemplazarlo | 🟡 pendiente validación |
| Logo definitivo | Se usa `Logo TT.jpeg` provisto, tal cual, en el hero, header y footer | ✅ decidido |
| Presupuesto y cronograma | Fuera del alcance de este PRD (ya definidos en la estimación comercial según el Brief) | N/A |

## 3. Requisitos funcionales

- RF1: La página debe mostrar un header fijo con logo y navegación a las secciones (scroll suave, anchors).
- RF2: El Hero debe incluir titular principal, subtítulo y 3 botones de CTA (WhatsApp, Telegram, Instagram) visibles sin scroll (above the fold) en desktop y móvil.
- RF3: Todo botón de WhatsApp debe abrir `https://wa.me/<numero>` en una pestaña nueva, con mensaje prellenado opcional.
- RF4: Todo botón de Telegram debe abrir `https://t.me/<usuario>` en una pestaña nueva.
- RF5: Todo enlace de Instagram debe abrir `https://www.instagram.com/citradingtime` en una pestaña nueva.
- RF6: La página debe incluir las 8 secciones definidas en el Brief (Hero, Quiénes somos, Qué hacemos, Por qué TradingTime, Cómo trabajamos, Prueba social, CTA final, Footer).
- RF7: El footer debe incluir correo `@tradingtime.com`, íconos de redes sociales y año dinámico de copyright.
- RF8: La página debe integrar GA4 mediante snippet configurable (Measurement ID en una variable fácil de editar).
- RF9: Debe existir un menú móvil (hamburguesa) funcional en breakpoints < 768px.

## 4. Requisitos no funcionales

- RNF1: Tiempo de carga < 2.5s en móvil (conexión 4G simulada), sin frameworks pesados.
- RNF2: 100% responsive: desktop, tablet, móvil — sin errores visuales (breakpoints 375px, 768px, 1280px+).
- RNF3: Compatible con Chrome, Safari (desktop e iOS) y Android Chrome.
- RNF4: HTTPS obligatorio en producción (SSL).
- RNF5: HTML semántico y accesible (etiquetas ARIA básicas, contraste AA en texto sobre fondo, alt text en imágenes).
- RNF6: SEO on-page básico: `<title>`, meta description, Open Graph tags, favicon.
- RNF7: Sin dependencias de backend ni base de datos.

## 5. Contenido — categorías reales (fuente: `catalogo.xlsx` y presentación oficial)

1. **Agroalimentos** — cafés especiales, chocolates, chocolates orgánicos, fruta deshidratada, licores a base de café, granadilla, banano, aguacate, plátano, cacao
2. **Proteínas de origen animal** — carne de cerdo, carne de res, pollo, pescado, lácteos
3. **Construcción** — materiales de acabado, metalurgia, ventanería
4. **Papelería** — cajas de cartón, papel kraft, empaques para alimentos, bolsas de papel, papelería de seguridad
5. **Fármacos y químicos** — bases farmacológicas, químicos, gases, fármacos genéricos
6. **Dotaciones empresariales** — botas y calzado industrial/hospitalario, uniformes hospitalarios, dotaciones con marca, jean, polos

Más consultoría y asesoría integral en exportaciones/importaciones, distribución física internacional y potencialización de mipymes.

### Mipymes representadas (portafolio real)

CFS Coffee, Raso Maker LLC, Nunchuah, Terra Dulce, Frudaqui, Monte Real, Ladys Confecciones, Neutral Arquitectura — cada una con su propia tarjeta en la sección "Nuestras mipymes" de la landing, con foto o ícono representativo extraído de la presentación oficial.

## 6. Fuera de alcance (confirmado, ver Brief)

- Backend, CMS, base de datos, áreas de usuario, pagos
- Múltiples páginas o blog
- Formulario de contacto con almacenamiento de datos
- Internacionalización (multi-idioma) — 🟡 confirmar si se requiere inglés además de español

## 7. Criterios de aceptación (Definition of Done)

- [ ] Las 8 secciones están implementadas y con copy revisado por el cliente
- [ ] Los 3 canales de contacto (WhatsApp, Telegram, Instagram) funcionan en desktop y móvil
- [ ] Lighthouse mobile ≥ 90 en Performance, Accessibility, Best Practices, SEO
- [ ] Sin errores de consola en Chrome/Safari
- [ ] Dominio propio configurado con SSL activo
- [ ] Correos `@tradingtime.com` funcionando
- [ ] QA cross-device completado (ver checklist en [architecture.md](./architecture.md))

## 8. Siguiente paso en el flujo BMAD

→ [UX/UI Spec](./front-end-spec.md) → [Arquitectura técnica](./architecture.md) → [Dev stories](./stories/)
