# Mathis Dumont - Portfolio

Personal portfolio website showcasing AI/ML projects and engineering work.

## Tech Stack

- **React** + **Vite** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## Development

```bash
# Install dependencies (requires Node.js)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

Configured for GitHub Pages deployment. The site is built with a base path of `/mathis-dumont/` (update in `vite.config.ts` if needed).

## Project Structure

```
src/
├── components/       # React components
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── ProjectCard.tsx
│   ├── Skills.tsx
│   ├── Lab.tsx
│   └── DarkModeToggle.tsx
├── data/
│   └── projects.ts   # Single source of truth for project data
├── App.tsx
├── main.tsx
└── index.css
```

## Features

- 🌓 Dark mode support with system preference detection
- 📱 Fully responsive design
- ✨ Subtle entrance animations
- 🎨 Clean, academic-inspired aesthetic
- 🚀 Optimized for GitHub Pages

## License

MIT
