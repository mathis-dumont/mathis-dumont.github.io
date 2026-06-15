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
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        light: {
          bg:      '#EDE8DF',
          sidebar: '#E3DDD3',
          text:    '#1C1714',
          muted:   '#7D6B5E',
          border:  '#CFC5B5',
          accent:  '#8B5E3C',
        },
        dark: {
          bg:      '#1A1714',
          sidebar: '#141210',
          text:    '#EDE8DF',
          muted:   '#7D6B5E',
          border:  '#2E2822',
          accent:  '#C4833A',
        },
      },
    },
  },
  plugins: [],
}