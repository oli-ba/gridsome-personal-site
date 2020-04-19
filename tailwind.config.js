const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {
      display: ['Libre Baskerville', 'serif']
    },
    extend: {
      fontFamily: {
        sans: [
          'Kulim Park',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      },
      colors: {
        pink: '#FFCCD5',
        pblue: '#2017CC'
      }
    }
  },
  variants: {},
  plugins: [],
}
