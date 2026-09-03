# Story 6 — Integraciones de contacto + GA4

**Como** dueño del negocio, **quiero** que todos los botones de contacto funcionen y se pueda medir la conversión, **para que** pueda dar seguimiento a los leads generados por la landing.

## Criterios de aceptación
- [x] Todos los enlaces de WhatsApp usan `wa.me` con número configurable en una sola constante
- [x] Todos los enlaces de Instagram apuntan a `@citradingtime`
- [x] Snippet de GA4 presente pero condicionado a un Measurement ID configurable (no rompe si está vacío)
- [x] Clics en cada CTA disparan evento de GA4 (`contact_click`) cuando GA4 está activo

## Notas
- ✅ Número de WhatsApp real (`573168337106`) confirmado vía la presentación oficial (ver [historia 08](./08-contenido-real.md)).
- El botón de Telegram se retiró: no hay un usuario real confirmado en ningún material recibido. Si aparece uno, se puede reintroducir siguiendo el mismo patrón que WhatsApp (`buildWhatsappUrl` en `js/main.js`).
