# Portafolio profesional de Gabriel Esteban Enríquez Castillo — Diseño

Fecha: 2026-09-06. Aprobado por el usuario en chat.

## Objetivo
Sitio de una página para enlazar desde LinkedIn (linkedin.com/in/gaboenriquez). Público: reclutadores, empresas palmeras, organizaciones ESG/RSPO, colegas agrónomos.

## Contenido (fuente: PDF de LinkedIn del usuario)
- Nombre, titular, extracto, 4 cargos (Cenipalma 2018–, Cenipalma 2013–2017, Campo Verde 2011–2013, consultor 2010), formación (U. Nariño, U. Magdalena, U. La Sabana), certificaciones RSPO/HCV.
- Contacto público: correo y LinkedIn. Nunca el teléfono.
- Nada del informe OxG confidencial de Palmas San José.

## Secciones
1. Portada: etiqueta mono, nombre, titular con palabra acento en cursiva, foto, botones correo/LinkedIn.
2. Sobre mí: extracto en 3 párrafos + cifras (19+ años, 9 departamentos, 13 núcleos).
3. Trabajo destacado: 4 tarjetas (OxG + ANA; TEA nutrición/agua; EUDR/RSPO trazabilidad; IA en extensión).
4. IA aplicada (añadido): qué hace con IA, herramientas, cómo forma a su equipo, principios.
5. Experiencia: línea de tiempo con 4 cargos.
6. Formación y certificaciones: dos columnas.
7. Notas y experiencias (añadido): lista de entradas; cada nota es un HTML en `notas/`. Una nota inicial marcada como borrador. README explica cómo añadir notas.
8. Contacto.

## Estilo
Referencia: tt-a1i.github.io/archify y openpi-dev.github.io/openpi. Fondo crema, tinta casi negra, acento naranja tierra, Fraunces (display), Inter (cuerpo), JetBrains Mono (etiquetas). Selector ES/EN arriba a la derecha, textos en diccionario JS, idioma recordado en localStorage. Responsivo móvil-primero.

## Técnica
HTML/CSS/JS estáticos sin build. Archivos: index.html, styles.css, script.js, assets/retrato.jpg (optimizada), notas/*.html, README.md. Open Graph + meta descripción. Publicación en GitHub Pages.

## Verificación
Revisión visual en navegador integrado a 1280px y 375px; validación de enlaces; comprobación del selector de idioma y de que ninguna cadena queda sin traducir.
