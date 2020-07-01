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
        colorPrimary: '#2017CC',
        colorSecondary: '#FFCCD5'
      }
    }
  },
  variants: {},
  plugins: [],
}
