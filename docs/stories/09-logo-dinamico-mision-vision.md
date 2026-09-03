# Story 9 — Logo dinámico + espacio para Misión/Visión

**Como** stakeholder, **quiero** que el logo se sienta más vivo y que ya exista un lugar reservado para Misión y Visión, **para que** la página luzca más dinámica y quede lista para recibir ese contenido apenas lo tengamos.

## Criterios de aceptación
- [x] El logo del hero rota como un globo/moneda sobre su eje vertical (rotación 3D `rotateY`, 10s por vuelta), con un leve oscurecimiento en el punto medio que simula profundidad — el texto nunca se ve boca abajo ni espejado
- [x] Se usan dos copias superpuestas del logo (técnica "doble cara", cada una con `backface-visibility: hidden`) para que, cuando una cara gira hacia el fondo, la otra ya esté mostrando el diseño en la orientación correcta — evita el texto espejado que se veía con una rotación 3D de una sola cara
- [x] La animación respeta `prefers-reduced-motion` (se desactiva por completo si el usuario lo pide)
- [x] Nueva sección "Misión" y "Visión" dentro de "Quiénes somos", con tarjetas claramente marcadas como **pendientes de contenido** (borde punteado, etiqueta "Pendiente de contenido", texto en cursiva entre corchetes)
- [x] Responsive: 1 columna en móvil, 2 en desktop
- [x] Verificado sin errores de consola ni overflow horizontal

## Notas
- El logo del header (nav) se dejó estático a propósito — animarlo permanentemente mientras el usuario hace scroll/lee sería una distracción; el efecto dinámico se reserva para el hero, donde se ve una sola vez con impacto.
- Las tarjetas de Misión/Visión están intencionalmente marcadas como placeholder — reemplazar el texto entre corchetes apenas el cliente entregue el contenido real, y quitar la clase `placeholder-card` (o el estilo punteado) al hacerlo.
