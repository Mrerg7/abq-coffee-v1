/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        roast: {
          50: '#f8f4f0',
          100: '#efe6dc',
          200: '#e0ccb8',
          300: '#cba888',
          400: '#b5835e',
          500: '#a46b47',
          600: '#8b5539',
          700: '#714432',
          800: '#5d3a2d',
          900: '#4e3329',
          950: '#2a1913',
        },
        cream: {
          50: '#fbf8f4',
          100: '#f4eee6',
          200: '#e8d9c8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
