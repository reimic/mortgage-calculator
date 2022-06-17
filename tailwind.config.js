/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        bebas: ['BebasNeue', 'cursive'],
        inria: ['InriaSans', 'serif']
      },
      colors: {
        'red-light': '#FF85A1',
        'red': '#FF053E',
        'red-dark': '#8F0021',
        'magenta-light': '#FF70C6',
        'magenta': '#EE008F',
        'magenta-dark': '#7A0049',
        'orange-light': '#F7CC8D',
        'orange': '#EF9A1A',
        'orange-dark': '#865409',
        'blue-light': '#B3CFFA',
        'blue': '#327EF1',
        'blue-dark': '#0C4CAC',
        'green-light': '#B3FABA',
        'green': '#30F144',
        'green-dark': '#0CAC1C',
      },
      boxShadow: {
        'basic': '4px 4px 0px rgba(0, 0, 0, 1)',
      },
      rotate: {
        'basic': '-4.38deg',
      }
    }
  },
  plugins: [],
}
