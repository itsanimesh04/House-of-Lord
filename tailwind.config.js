/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2332',
          dark: '#111a27',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#d4b96a',
        },
        cream: {
          DEFAULT: '#f5f0e8',
          dark: '#ede8dc',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0, 0, 0, .08)',
        'md': '0 8px 32px rgba(0, 0, 0, .14)',
        'lg': '0 20px 60px rgba(0, 0, 0, .18)',
      },
    },
  },
  plugins: [],
}
