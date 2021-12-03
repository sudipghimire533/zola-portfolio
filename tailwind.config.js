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
        },
        width: {
            '2px': '2px'
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
