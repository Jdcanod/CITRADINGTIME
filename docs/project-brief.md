# Project Brief — Landing Page TradingTime

**Tipo de documento:** Project Brief (BMAD-METHOD)
**Proyecto:** Trading_Time landing page
**Fecha:** 2026-08-25
**Autor:** Juan Cano (con apoyo de Claude)
**Estado:** Borrador inicial — pendiente de validar con stakeholders

> Este documento sigue la estructura de *Project Brief* de BMAD-METHOD (Breakthrough Method for Agile AI-Driven Development). Es el punto de partida del flujo BMAD: de aquí se deriva el PRD, luego la arquitectura/UX y finalmente las historias de desarrollo (dev stories) que ejecuta el agente Dev.

---

## 1. Resumen ejecutivo

TradingTime necesita una landing page de una sola página (one-page), responsive, cuyo objetivo principal es dirigir al visitante a contacto directo por WhatsApp y/o Telegram. El alcance es deliberadamente acotado: sin backend complejo, con dominio propio, correos corporativos `@tradingtime.com` y despliegue con SSL.

## 2. Problema / contexto

**Qué es TradingTime (confirmado vía Instagram @citradingtime):** C.I Trading Time S.A.S. — "C.I." (Comercializadora Internacional) es una figura legal colombiana para empresas de comercio exterior. Es una comercializadora internacional gerenciada por Álvaro de Jesús Echeverri Castrillón, dedicada a **comercio internacional B2B**: conecta empresas y productores colombianos con compradores en mercados globales (exportaciones/importaciones), transformando esas conexiones en relaciones comerciales sostenibles y de largo plazo.

Bio de marca (IG): *"Conectamos productos con propósito e historia, con empresas que le apuesten a la sostenibilidad."*
Mensaje recurrente: *"Conectamos empresas colombianas con el mundo."*

La cuenta de Instagram es reciente (24 seguidores) y el contenido combina mensajes institucionales del gerente (liderazgo/crecimiento empresarial), piezas de marca país (Colombia) y temas de comercio exterior. Esto sugiere que la empresa está en fase de construir presencia digital — la landing es parte de ese esfuerzo de credibilidad y captación de contactos B2B.

- [PENDIENTE] Confirmar el disparador concreto de este proyecto (lanzamiento oficial, campaña de captación de clientes/proveedores, feria o rueda de negocios próxima, etc.)

## 3. Solución propuesta

Una landing page de una sola página, con una imagen profesional acorde a una comercializadora internacional (seria, confiable, orientada a negocios B2B), que comunique la propuesta de valor de TradingTime — conectar empresas colombianas con mercados globales bajo un enfoque de sostenibilidad — y convierta visitantes en contactos calificados vía WhatsApp/Telegram, con dominio y correos corporativos propios, sin la complejidad de un backend a medida.

## 4. Usuarios objetivo

Dos perfiles principales (negocio B2B, no B2C):

1. **Productores/empresas colombianas** que buscan exportar o expandirse a mercados internacionales y necesitan un aliado comercial con red de contactos.
2. **Compradores/empresas internacionales** interesados en productos colombianos "con propósito e historia" (enfoque en sostenibilidad, valor agregado, trazabilidad).

- [PENDIENTE] Confirmar si hay sectores o categorías de producto prioritarios (agro, artesanías, alimentos, etc.)
- Canal de origen del tráfico probable: Instagram (@citradingtime), referidos y contacto directo/redes profesionales — [PENDIENTE confirmar si habrá pauta paga]

## 5. Objetivos y métricas de éxito

**Objetivo principal:** generar contacto comercial calificado (empresas interesadas en exportar/importar o en aliarse con TradingTime) vía WhatsApp/Telegram.

Métricas sugeridas (a validar):
- Nº de clics en botón de WhatsApp / Telegram
- Tasa de conversión (visitantes → clics de contacto)
- Tiempo de carga de la página (objetivo: <2.5s en móvil)
- Compatibilidad cross-device sin errores visuales

## 6. Alcance del MVP

### Incluye (según estimación acordada)
- Desarrollo de 1 landing page responsive (una sola página)
- Enlaces directos a WhatsApp, Telegram e **Instagram** ([@citradingtime](https://www.instagram.com/citradingtime)) como canales de contacto
- Copy y ajustes de contenido
- Configuración de dominio + DNS
- Despliegue con certificado SSL
- Correos corporativos `@tradingtime.com`
- Pruebas cross-device (desktop, tablet, móvil)

### No incluye (fuera de alcance)
- Backend complejo (áreas de usuario, pagos, base de datos, CMS a medida)
- Múltiples páginas o blog
- [PENDIENTE] Confirmar si se necesita formulario de contacto además de WhatsApp/Telegram, o solo enlaces directos
- [PENDIENTE] Confirmar si hay integración con analítica (Google Analytics / Meta Pixel) — recomendable para medir conversión

## 7. Estructura propuesta de la landing (secciones)

1. **Hero** — "Conectamos empresas colombianas con el mundo" + CTA principal (botones de WhatsApp, Telegram e Instagram)
2. **Quiénes somos** — C.I Trading Time S.A.S., comercializadora internacional, con mención del gerente Álvaro Echeverri como respaldo de credibilidad
3. **Qué hacemos / servicios** — comercio internacional (exportaciones/importaciones), conexión entre productores colombianos y compradores globales, asesoría comercial — [PENDIENTE listar servicios exactos]
4. **Por qué TradingTime** — sostenibilidad, relaciones comerciales duraderas, productos "con propósito e historia", red de contactos internacional
5. **Cómo trabajamos** — pasos del proceso (contacto → diagnóstico → conexión con mercado → acompañamiento), si aplica al modelo de negocio — [PENDIENTE]
6. **Prueba social / credibilidad** — logros, alianzas o testimonios si existen; si no, se puede usar la trayectoria del gerente
7. **CTA final** — repetición del llamado a la acción con botones WhatsApp, Telegram e Instagram
8. **Footer** — datos de contacto, íconos de redes sociales (incluye Instagram), correo corporativo @tradingtime.com

*Nota: la estructura se ajusta a un negocio B2B de comercio internacional, no B2C. [PENDIENTE: validar con copy real y confirmar servicios/sectores específicos]*

## 8. Requisitos técnicos

- **Tipo de sitio:** landing estática de una sola página, responsive
- **Dominio:** tradingtime.com (o el que se defina) + configuración DNS
- **Correo:** cuentas corporativas `@tradingtime.com`
- **Seguridad:** despliegue con SSL (HTTPS)
- **Integraciones:** enlaces directos a WhatsApp (`wa.me`), Telegram (`t.me`) e Instagram (perfil [@citradingtime](https://www.instagram.com/citradingtime))
- **Compatibilidad:** pruebas cross-device (Chrome/Safari en desktop, iOS, Android)
- **Stack sugerido:** HTML/CSS/JS estático o framework ligero (a decidir en fase de arquitectura) — sin backend a medida
- [PENDIENTE] Proveedor de hosting/DNS preferido (si ya existe uno)

## 9. Marca y contenido

- **Logo (confirmado):** insignia circular dorada/beige con ícono de reloj + "T", wordmark "TradingTime" en serif elegante — estética premium/corporativa
- **Paleta sugerida (a partir del logo):** dorado/champán + azul marino o negro + blanco — transmite seriedad y confianza (B2B)
- **Tono de voz (confirmado por el contenido de IG):** profesional, institucional, inspiracional — mensajes de liderazgo y crecimiento empresarial, con orgullo por lo colombiano ("Colombia al mundo") y enfoque en sostenibilidad
- **Redes activas:** Instagram [@citradingtime](https://www.instagram.com/citradingtime) (cuenta reciente, contenido de marca y mensajes del gerente)
- [PENDIENTE] Copy definitivo o material de referencia adicional para redactar los textos finales
- [PENDIENTE] Confirmar si el logo actual es el definitivo para la landing o si se ajustará

## 10. Supuestos y restricciones

- Se asume que no se requiere backend ni base de datos para esta fase (MVP de una sola página)
- Se asume que el dominio aún no está registrado o está pendiente de configurar
- Presupuesto y cronograma: [PENDIENTE — definir en la estimación comercial]

## 11. Riesgos

- Falta de contenido/copy definitivo puede retrasar el desarrollo
- Ambigüedad sobre qué es TradingTime exactamente puede afectar el mensaje de la landing
- Dependencia de terceros para DNS/dominio puede generar demoras fuera de control del equipo de desarrollo

## 12. Próximos pasos (flujo BMAD)

1. **Validar este brief** con el stakeholder (Juan) y completar los puntos marcados como `[PENDIENTE]`
2. **PRD (Product Requirements Document):** usar este brief como entrada para definir requisitos funcionales/no funcionales detallados de la landing
3. **UX/UI spec:** definir wireframe de una página, paleta de marca y jerarquía visual
4. **Arquitectura técnica:** confirmar stack, hosting, DNS y flujo de despliegue con SSL
5. **Dev stories:** descomponer en historias pequeñas (hero, secciones, integraciones WhatsApp/Telegram, configuración de dominio/correo, QA cross-device)
6. **QA:** checklist de pruebas cross-device y validación de enlaces de contacto

---

*Documento generado como punto de partida (BMAD Project Brief). Complete las secciones marcadas `[PENDIENTE]` antes de avanzar a la fase de PRD.*
