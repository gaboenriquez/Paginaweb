# Sitio web de Gabriel Esteban Enríquez Castillo

Portafolio profesional de una página, en español e inglés, para enlazar desde LinkedIn.
Hecho con HTML, CSS y JavaScript sin frameworks ni proceso de compilación.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La página principal. Todo el texto en español está aquí. |
| `script.js` | Selector ES/EN (el texto en inglés vive aquí), menú móvil y animación de aparición. |
| `styles.css` | Estilos. Colores y tipografías al inicio del archivo, en `:root`. |
| `assets/retrato.jpg` | Tu foto optimizada. `retrato-sm.jpg` es la versión para móvil. |
| `notas/` | Una página HTML por cada nota. |
| `docs/superpowers/specs/` | El diseño acordado antes de construir. |

## Cómo editar el texto

Abre `index.html` con cualquier editor de texto y cambia el texto en español directamente.
Cada texto traducible tiene un atributo `data-i18n="clave"`. Para cambiar la versión en inglés,
busca esa misma clave en `script.js` y edita el valor.

Si añades un párrafo nuevo y quieres que tenga traducción, ponle un `data-i18n` con una clave
nueva y añade esa clave al diccionario `EN` en `script.js`. Si no le pones `data-i18n`,
se mostrará igual en ambos idiomas.

## Cómo añadir una nota

1. Copia `notas/ia-como-companero-de-pensamiento.html` con un nombre nuevo, en minúsculas y con
   guiones, por ejemplo `notas/polinizacion-ana-lecciones.html`.
2. Cambia el `<title>`, las etiquetas `og:`, el `<h1>`, la fecha en `note-meta` y el contenido
   dentro de `<div class="prose">`. Borra la etiqueta `<span class="draft">` cuando la nota esté lista.
3. En `index.html`, dentro de `<ul class="notes-list">`, copia el bloque `<li>` existente y
   ajusta el enlace, la fecha, el título y el resumen. Añade las claves nuevas al diccionario
   `EN` en `script.js` si quieres el título y el resumen en inglés.

Las notas se escriben en el idioma que prefieras. El selector ES/EN solo afecta a la página principal.

## Publicar en GitHub Pages

El repositorio es `gaboenriquez/Paginaweb` y el sitio queda en `https://gaboenriquez.github.io/Paginaweb/`.
GitHub Pages solo funciona en repositorios públicos con el plan gratuito, así que el repositorio debe ser público.

Primera publicación, desde la Terminal en esta carpeta:

```bash
git init
git add .
git commit -m "Sitio web inicial"
git branch -M main
git remote add origin https://github.com/gaboenriquez/Paginaweb.git
git push -u origin main
gh repo edit gaboenriquez/Paginaweb --visibility public --accept-visibility-change-consequences
gh api -X POST repos/gaboenriquez/Paginaweb/pages -f build_type=legacy -f 'source[branch]=main' -f 'source[path]=/'
```

En uno o dos minutos el sitio estará en `https://gaboenriquez.github.io/Paginaweb/`.

Para actualizar el sitio después de cualquier cambio:

```bash
git add . && git commit -m "Actualizo contenido" && git push
```

## Añadir el enlace en LinkedIn

En tu perfil, pulsa el lápiz de la sección de presentación, baja hasta "Sitio web",
pega la URL y elige el tipo "Portafolio". También puedes añadirlo en la sección
"Información de contacto".

## Archivo original de la foto

`IMG_6757.jpg` es el original sin optimizar. No lo usa el sitio; puedes borrarlo o guardarlo aparte.
