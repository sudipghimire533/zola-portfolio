module.exports = {
  purge: {
        content: [
            'templates/**/*.html',
        ],
        options: {
            keyframes: true
        },
    },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        screens: {
            'xms': '480px',
        },
        minWidth: {
            'screen': '100vh',
            'auto': 'auto',
            '320px': '320px',
        },
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
        visibility: ['group-hover']
    },
  },
  plugins: [],
}
