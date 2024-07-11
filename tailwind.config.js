/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.25s linear infinite',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        mono: {
          50: 'rgb(255, 255, 255)', // white
          100: 'rgb(240, 240, 240)', // very light grey
          200: 'rgb(231, 231, 231)', // very light grey
          300: 'rgb(229, 229, 229)', // light grey
          400: 'rgb(200, 200, 200)', // grey
          500: 'rgb(181, 181, 181)', // grey
          600: 'rgb(146, 146, 146)', // dark grey
          700: 'rgb(125, 125, 125)', // dark grey
          800: 'rgb(85, 85, 85)', // very dark grey
          900: 'rgb(17, 17, 17)', // almost black
        },
      },
    },
  },
  plugins: [],
}
