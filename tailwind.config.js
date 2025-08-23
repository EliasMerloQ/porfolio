/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          750: '#1f2937',
        },
      },
      spacing: {
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
      },
      minWidth: {
        '40': '10rem',
      },
    },
  },
  plugins: [],
};