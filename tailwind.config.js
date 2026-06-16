/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        body: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        paper:  'rgb(var(--c-paper) / <alpha-value>)',   // warm bg
        raised: 'rgb(var(--c-raised) / <alpha-value>)',  // cards / insets
        ink:    'rgb(var(--c-ink) / <alpha-value>)',     // primary text
        muted:  'rgb(var(--c-muted) / <alpha-value>)',   // secondary text
        faint:  'rgb(var(--c-faint) / <alpha-value>)',   // tertiary
        line:   'rgb(var(--c-line) / <alpha-value>)',    // hairlines
        accent: 'rgb(var(--c-accent) / <alpha-value>)',  // oxblood — links / active only
      },
    },
  },
  plugins: [],
}
