module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },

      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont',],
        'serif': ['Georgia', 'Cambria',],
        'mono': ['SFMono-Regular', 'Menlo',],
        'h1': ['Oswald', ],
        'body': ['Open Sans',],}
    },
    screens: {
      'portrait': {'raw': '(orientation: portrait)'},
      // => @media (orientation: portrait) { ... }
    },
  },
  variants: {},
  plugins: [],
}
