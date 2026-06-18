# itinnitus-home

Landing "link-in-bio" para [itinnitus.com](https://itinnitus.com) — una página
estática con los enlaces de Carlos Alfonso Romero Muñoz (GitHub y libros).

## Estructura
- `index.html` — la página completa (HTML + CSS embebido, sin dependencias ni build).
- `assets/logo.svg` — logo tricolor de itinnitus.

## Editar
Todo vive en `index.html`. Para añadir un enlace, copia un bloque `<a class="link ...">`
dentro de la `<nav class="links">` correspondiente. Los acentos de color disponibles son
`accent-blue`, `accent-red` y `accent-yellow`.

> **Pendiente:** reemplazar los `href="#"` de la sección *Libros* por las URLs reales
> de Amazon (`https://www.amazon.com/dp/ASIN`) o la página de Author Central.

## Vista previa local
```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Deploy (Cloudflare Pages)
```bash
npx wrangler pages deploy ./ --project-name itinnitus-home
```
Luego se añade `itinnitus.com` como dominio personalizado del proyecto Pages.
