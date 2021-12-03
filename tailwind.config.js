module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        transitionProperty: {
            'bg': 'background'
        },
        maxHeight: {
            '300px': '300px',
        },
        maxWidth: {
            '360px': '360px'
        },
        minHeight: {
            'screen': '100vh'
        }
    }
  },
  variants: {
    extend: {
        width: ['group-focus', 'group-hover'],
    },
  },
  plugins: [],
}
