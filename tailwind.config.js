/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cream': {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e7',
          300: '#f5e6d3',
          400: '#eed5b7',
          500: '#e4c29f',
          600: '#d4a574',
          700: '#c4925c',
          800: '#a0784d',
          900: '#826142',
        },
        'rose': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'sage': {
          50: '#f6f8f6',
          100: '#e3ebe3',
          200: '#c7d6c7',
          300: '#a1bba1',
          400: '#7a9b7a',
          500: '#5d7f5d',
          600: '#4a6449',
          700: '#3d533c',
          800: '#334332',
          900: '#2c392b',
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};