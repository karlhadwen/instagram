module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    fill: (theme) => ({
      red: theme('colors.red.primary'),
    }),
    colors: {
      white: '#ffffff',
      blue: {
        medium: '#0095f6',
      },
      black: {
        light: '#262626',
        faded: '#00000059',
      },
      gray: {
        base: '#8e8e8e',
        background: '#fafafa',
        primary: '#dbdbdb',
      },
      red: {
        primary: '#ed4956',
      },
    },
  },
  variants: {
    display: ['group-hover'],
  },
};
