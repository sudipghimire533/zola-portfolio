module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        transitionProperty: {
            'bg': 'background',
        },
        minHeight: {
            'screen': '100vh',
        },
        width: {
            '2px': '2px',
        },
        maxWidth: {
            '370px': '370px',
            '400px': '400px',
        },
    },
  },
  variants: {
    extend: {
        width: ['group-focus', 'group-hover'],
    },
  },
  plugins: [],
}
