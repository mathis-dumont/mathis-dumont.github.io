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
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode - Off-white surface, charcoal text
        light: {
          bg: '#F9FAFB',
          surface: '#F5F7FA',
          text: '#1F2937',
          muted: '#6B7280',
          border: '#D1D5DB',
        },
        // Dark mode - Material Design dark grey, soft white text
        dark: {
          bg: '#121212',
          surface: '#1E1E1E',
          text: '#F3F4F6',
          muted: '#9CA3AF',
          border: '#374151',
        }
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      }
    },
  },
  plugins: [],
}
