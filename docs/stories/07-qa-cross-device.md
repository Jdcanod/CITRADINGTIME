# Story 7 — QA cross-device y performance

**Como** equipo de QA, **quiero** validar la landing en distintos dispositivos y medir su performance, **para que** cumpla los NFRs del PRD antes de publicarse.

## Criterios de aceptación
- [x] Verificado visualmente en 375px, 768px y 1280px sin errores de layout
- [x] Sin scroll horizontal en ningún breakpoint
- [x] Menú móvil probado (abre/cierra, aria-expanded correcto)
- [x] Enlaces de contacto verificados (wa.me, t.me, Instagram)
- [x] Checklist completo en [architecture.md](../architecture.md#6-qa-cross-device--checklist)

## Bug encontrado y corregido
En 768px el nav de escritorio se activaba mientras el espacio era insuficiente,
provocando que "Quiénes somos" se envolviera en dos líneas y se superpusiera
con el logo. Fix: el menú hamburguesa ahora se usa hasta 1023px; el nav
horizontal completo solo aparece desde 1024px (ver `css/styles.css`).

Pendiente para antes de publicar: probar en Safari real (iOS) y correr Lighthouse
una vez el sitio esté desplegado en un dominio público (Lighthouse no corre
sobre `localhost` desde este entorno).
