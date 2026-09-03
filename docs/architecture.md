# Arquitectura técnica — Landing Page TradingTime

**Tipo de documento:** Architecture Doc (BMAD-METHOD)
**Entrada:** [prd.md](./prd.md), [front-end-spec.md](./front-end-spec.md)
**Fecha:** 2026-08-25

---

## 1. Stack

- **HTML5 + CSS3 + JavaScript vanilla** (sin framework de build). Justificación: una sola página, sin estado complejo ni backend — un framework (React/Next) añadiría peso y complejidad innecesarios para el objetivo de carga <2.5s.
- Google Fonts (`Playfair Display`, `Inter`) vía `<link>`.
- Sin dependencias npm, sin bundler. Editable directamente y desplegable como sitio estático.

## 2. Estructura de archivos

```
TradingTme/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── logo.jpeg
│   ├── gallery/    (fotos reales optimizadas, extraídas de la presentación oficial)
│   └── icons/      (íconos decorativos de línea, extraídos de la presentación)
└── docs/
    ├── project-brief.md
    ├── prd.md
    ├── front-end-spec.md
    ├── architecture.md
    └── stories/
```

## 3. Hosting, dominio y correo (🟡 pendiente confirmación de proveedor existente)

**Recomendación:** Vercel o Netlify para el hosting estático (plan gratuito cubre el MVP):
- Despliegue por arrastrar carpeta o conectar repo Git
- SSL automático (Let's Encrypt) sin configuración manual
- Dominio propio: se conecta apuntando los DNS (registros A/CNAME) al proveedor

**Correo corporativo `@tradingtime.com`:** el hosting estático no provee correo. Se recomienda Google Workspace o Zoho Mail (plan gratuito hasta 5 usuarios) configurado vía registros MX en el mismo DNS del dominio.

**Pasos DNS típicos:**
1. Comprar/confirmar dominio `tradingtime.com`
2. Apuntar registro A / CNAME al hosting elegido (Vercel/Netlify)
3. Agregar registros MX + TXT (SPF/DKIM) del proveedor de correo elegido
4. Esperar propagación (hasta 48h) y verificar SSL activo

## 4. Integraciones

- **WhatsApp:** enlace `https://wa.me/57<numero>?text=<mensaje-urlencoded>` — 🟡 falta número real, se usa placeholder `+57 300 000 0000` en el código, buscar `TODO-WHATSAPP`.
- **Telegram:** enlace `https://t.me/<usuario>` — 🟡 falta usuario real, placeholder `tradingtime`, buscar `TODO-TELEGRAM`.
- **Instagram:** `https://www.instagram.com/citradingtime` (confirmado).
- **GA4:** snippet estándar en `<head>`, Measurement ID como constante en `js/main.js` (`TODO-GA4-ID`) — desactivado hasta tener el ID real.

## 5. Performance

- Imágenes en formato WebP cuando se agreguen (logo actual en JPEG se mantiene, optimizado)
- CSS y JS sin minificar en desarrollo; minificar antes de producción (opcional, con esbuild/terser si se agrega build step)
- Google Fonts con `font-display: swap`
- Sin librerías de terceros pesadas (no jQuery, no frameworks CSS completos)

## 6. QA cross-device — checklist

- [ ] Chrome desktop (1280px+)
- [ ] Safari desktop
- [ ] Chrome Android (375px–414px)
- [ ] Safari iOS (375px–414px)
- [ ] Tablet (768px, portrait y landscape)
- [ ] Enlaces WhatsApp/Telegram/Instagram abren correctamente en cada plataforma
- [ ] Menú hamburguesa funcional en móvil
- [ ] Sin scroll horizontal en ningún breakpoint
- [ ] Lighthouse mobile ≥ 90 (Performance/Accessibility/Best Practices/SEO)

## 7. Siguiente paso

→ [Dev stories](./stories/)
