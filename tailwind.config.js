module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.liked'),
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#0095f6',
      },
      black: {
        light: '#262626',
      },
      gray: {
        base: '#8e8e8e',
        background: '#fafafa',
        primary: '#dbdbdb',
      },
      red: {
        liked: '#ed4956',
      },
    },
  },
};
