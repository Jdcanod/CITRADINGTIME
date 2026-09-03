# UX/UI Spec — Landing Page TradingTime

**Tipo de documento:** Front-End Specification (BMAD-METHOD)
**Entrada:** [prd.md](./prd.md)
**Fecha:** 2026-08-25

---

## 1. Identidad visual (extraída de `assets/logo.jpeg`)

**Paleta:**

| Token | Hex | Uso |
|---|---|---|
| `--color-navy` | `#0A1F44` | Texto principal, fondos oscuros, wordmark "Trading" |
| `--color-gold` | `#B8935F` | Acentos, bordes, íconos, wordmark "Time", CTAs secundarios |
| `--color-gold-light` | `#D4B483` | Hover states, degradados sutiles |
| `--color-cream` | `#FAF7F2` | Fondos claros alternos entre secciones |
| `--color-white` | `#FFFFFF` | Fondo base |
| `--color-text-muted` | `#5C6470` | Texto secundario |
| `--color-whatsapp` | `#25D366` | Botón WhatsApp (color de marca reconocible) |
| `--color-telegram` | `#26A5E4` | Botón Telegram (color de marca reconocible) |

**Tipografía:**
- Titulares: serif elegante (Google Fonts `Playfair Display`) — coherente con el wordmark del logo
- Cuerpo/UI: sans-serif legible (Google Fonts `Inter`)

**Tono:** profesional, institucional, inspiracional; orgullo por lo colombiano; énfasis en sostenibilidad y relaciones de largo plazo.

## 2. Layout — wireframe de secciones (mobile-first)

```
┌─────────────────────────────┐
│ HEADER (sticky)              │
│ [Logo] · Nav (desktop) · ☰   │
├─────────────────────────────┤
│ HERO                         │
│ Titular + subtítulo          │
│ [WhatsApp] [Telegram] [IG]   │
│ (fondo navy + patrón sutil)  │
├─────────────────────────────┤
│ QUIÉNES SOMOS                │
│ Texto + mención gerente      │
├─────────────────────────────┤
│ QUÉ HACEMOS (grid 5 cards)   │
├─────────────────────────────┤
│ POR QUÉ TRADINGTIME          │
│ 3-4 pilares con íconos       │
├─────────────────────────────┤
│ CÓMO TRABAJAMOS              │
│ Timeline 4 pasos             │
├─────────────────────────────┤
│ PRUEBA SOCIAL / CREDIBILIDAD │
│ Bio del gerente + cifras     │
├─────────────────────────────┤
│ CTA FINAL (fondo navy)       │
│ [WhatsApp] [Telegram] [IG]   │
├─────────────────────────────┤
│ FOOTER                       │
│ Logo · redes · correo · ©    │
└─────────────────────────────┘
```

En desktop (≥1024px): "Qué hacemos" pasa a grid de 3 columnas x 2 filas; "Por qué TradingTime" a 4 columnas; "Cómo trabajamos" a timeline horizontal.

## 3. Breakpoints

- Móvil: 375px – 767px (1 columna)
- Tablet: 768px – 1023px (2 columnas donde aplique)
- Desktop: ≥ 1024px (grid completo, nav horizontal)

## 4. Componentes clave

- **Botón CTA WhatsApp:** ícono + texto "Escríbenos por WhatsApp", fondo `--color-whatsapp`, texto blanco, radio 8px.
- **Botón CTA Telegram:** ícono + texto "Contáctanos por Telegram", fondo `--color-telegram`.
- **Botón Instagram:** estilo outline dorado, ícono + "@citradingtime".
- **Header sticky:** fondo blanco con sombra sutil al hacer scroll; en móvil colapsa a menú hamburguesa.
- **Cards de servicio:** fondo blanco, borde superior dorado de 3px, ícono, título, descripción corta.
- **Botón flotante WhatsApp:** visible en todas las secciones al hacer scroll (esquina inferior derecha), especialmente útil en móvil.

## 5. Accesibilidad

- Contraste mínimo AA (texto navy sobre blanco/crema cumple; verificar texto blanco sobre dorado claro)
- Todos los enlaces de contacto con `aria-label` descriptivo
- Imágenes con `alt` text
- Navegación por teclado funcional (focus visible)

## 6. Siguiente paso

→ [Arquitectura técnica](./architecture.md)
