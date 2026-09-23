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
      typography: ({ theme }) => ({
        roast: {
          css: {
            '--tw-prose-body': theme('colors.roast.800'),
            '--tw-prose-headings': theme('colors.roast.950'),
            '--tw-prose-links': theme('colors.roast.700'),
            '--tw-prose-bold': theme('colors.roast.950'),
            '--tw-prose-counters': theme('colors.roast.500'),
            '--tw-prose-bullets': theme('colors.roast.400'),
            '--tw-prose-hr': theme('colors.roast.100'),
            '--tw-prose-quotes': theme('colors.roast.900'),
            '--tw-prose-quote-borders': theme('colors.roast.200'),
            '--tw-prose-captions': theme('colors.roast.600'),
            '--tw-prose-code': theme('colors.roast.950'),
            '--tw-prose-pre-code': theme('colors.roast.100'),
            '--tw-prose-pre-bg': theme('colors.roast.950'),
            '--tw-prose-th-borders': theme('colors.roast.200'),
            '--tw-prose-td-borders': theme('colors.roast.100'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
