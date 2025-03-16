/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#203732',
          light: '#4a7d76',
          dark: '#152521',
        },
        secondary: {
          DEFAULT: '#6c757d',
          light: '#868e96',
          dark: '#495057',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#203732',
          dark: '#e0e0e0',
        },
      },
      fontFamily: {
        sans: ['Yanone Kaffeesatz', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
