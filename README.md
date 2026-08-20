# Mathis Dumont - Portfolio

Personal portfolio: <https://mathis-dumont.github.io/>

## Stack

None. Hand-written HTML and one CSS file, plus one script for the homepage
background animation. No build step, no dependencies.

## Structure

Everything published lives in `site/`:

- `index.html` — intro, about, skills
- `work.html` — projects
- `cv.html` — experience, education, volunteering, currently learning
- `styles.css` — all styling; the palette is the variables at the top
- `bg.js` — a training log typing itself in the bottom of the left margin;
  index only, hidden when the margin cannot fit it and when printing
- `images/`, `documents/`, `favicon.svg`, `robots.txt`, `sitemap.xml`

The head and bottom nav bar are duplicated across the three pages. Editing one means
editing the other two.

## Development

Open `site/index.html` in a browser, or serve it so root-absolute paths resolve:

```bash
python3 -m http.server -d site 8000
```

## Deployment

Pushing to `main` publishes `site/` to GitHub Pages via `.github/workflows/deploy.yml`.
