module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    options: {
      whitelist: ['animated'],
      whitelistPatterns: [
        /-enter-active$/,
        /-leave-active$/,
        /-enter$/,
        /-enter-to$/,
        /-leave$/,
        /-leave-to$/,
      ],
    },
  },
  target: 'relaxed',
  prefix: '',
  important: true,
  separator: ':',
  theme: {
    // 1 | SCREEN SIZES

    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
      '3xl': '2000px',
    },

    // 2 | COLORS

    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#F6F6F6',
        300: '#e6e6e6',
        500: '#B3B2B2',
        700: '#8a8a8a',
        800: '#4d4d4d',
        900: '#2F2F2F',
      },
      red: {
        200: '#FFC6BF',
        300: '#FF9B91',
        500: '#FF8778',
      },
      yellow: {
        300: '#FEE4B4',
        500: '#FDC96A',
      },
      green: {
        300: '#D8EEE3',
        500: '#82C8A5',
      },
      teal: {
        300: '#7FCAD1',
        400: '#60CBCE',
        500: '#0097A2',
        700: '#00737A',
      },
    },

    // 3 | SIZES

    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '11': '2.75rem',
      '12': '3rem',
      '13': '3.25rem',
      '14': '3.5rem',
      '15': '3.75rem',
      '16': '4rem',
      '17': '4.25rem',
      '18': '4.5rem',
      '19': '4.75rem',
      '20': '5rem',
      '21': '5.25rem',
      '22': '5.5rem',
      '23': '5.75rem',
      '24': '6rem',
      '25': '6.25rem',
      '26': '6.5rem',
      '27': '6.75rem',
      '28': '7rem',
      '29': '7.25rem',
      '30': '7.5rem',
      '31': '7.75rem',
      '32': '8rem',
      '34': '8.5rem',
      '35': '8.75rem',
      '36': '9rem',
      '37': '9.25rem',
      '38': '9.5rem',
      '39': '9.75rem',
      '40': '10rem',
      '41': '10.25rem',
      '42': '10.5rem',
      '43': '10.75rem',
      '44': '11rem',
      '45': '11.25rem',
      '46': '11.5rem',
      '47': '11.75rem',
      '48': '12rem',
      '49': '12.25rem',
      '50': '12.5rem',
      '51': '12.75rem',
      '52': '13rem',
      '53': '13.25rem',
      '54': '13.5rem',
      '56': '14rem',
      '58': '14.5rem',
      '59': '14.75rem',
      '60': '15rem',
      '64': '16rem',
      '68': '17rem',
      '70': '17.5rem',
      '72': '18rem',
      '75': '18.75rem',
      '80': '20rem',
      '88': '22rem',
      '90': '22.5rem',
      '92': '23rem',
      '96': '24rem',
      '100': '25rem',
      '108': '27rem',
      '114': '28.5rem',
      '118': '29.5rem',
      '119': '29.75rem',
      '120': '30rem',
      '122': '30.5rem',
      '128': '32rem',
      '132': '33rem',
      '133': '33.25rem',
      '140': '35rem',
      '144': '36rem',
      '148': '37rem',
      '160': '40rem',
      '192': '48rem',
      '194': '48.5rem',
    },

    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333334%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333334%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333334%',
      '4/7': '57.142857%',
      '3/8': '37.5%',
      '5/8': '62.5%',
      '7/8': '87.5%',
      '3/10': '30%',
      '7/10': '70%',
      '9/10': '90%',
      '1/12': '8.333334%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333334%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333334%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333334%',
      '11/12': '91.666667%',
      '7/20': '35%',
      '13/20': '65%',
      '8/23': '34.782609%',
      '9/23': '39.130435%',
      '10/23': '43.478261%',
      '15/23': '65.217391%',
      '5/24': '20.833334%',
      '7/24': '29.166667%',
      '14/24': '58.333333%',
      '5/18': '27.777778%',
      '7/18': '38.888889%',
      '5/36': '13.888889%',
      '7/36': '19.444445%',
      '13/36': '36.111112%',
      full: '100%',
      screen: '100vw',
    }),

    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/3': '33.33334%',
      '1/4': '25%',
      '2/5': '40%',
      '4/5': '80%',
      '5/6': '83.333334%',
      '3/8': '37.5%',
      '7/8': '87.5%',
      full: '100%',
      '25screen': '25vh',
      '33screen': '33vh',
      halfscreen: '50vh',
      screen: '100vh',
    }),

    maxWidth: {
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      'container-sm': '75rem',
      container: '90rem',
      'container-lg': '100rem',
      full: '100%',
    },

    maxHeight: (theme) => ({
      ...theme('spacing'),
      auto: 'auto',
      '0': '0',
      full: '100%',
      screen: '100vh',
      'medium-screen': '50rem',
      'large-screen': '67.5rem',
    }),

    minWidth: (theme) => ({
      ...theme('spacing'),
      '0': '0',
      full: '100%',
      screen: '100vh',
    }),

    minHeight: (theme) => ({
      ...theme('spacing'),
      '0': '0',
      full: '100%',
      halfscreen: '50vh',
      screen: '100vh',
    }),

    // 4 | POSITIONING

    margin: (theme, { negative }) => ({
      auto: 'auto',
      '1/6': '16.6666667%',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),

    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      '60': '60',
      '70': '70',
      sticky: '900',
      youtube: '950',
      menu: '1000',
    },

    // 5 | BOX STYLING

    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },

    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default:
        '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md:
        '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(127, 202, 209, 0.75)',
      none: 'none',
    },

    // 6 | TYPOGRAPHY

    fontFamily: {
      sans: [
        '"DIN Next Rounded"',
        'DINNextRoundedLTPro',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },

    fontSize: {
      '2xs': '0.625rem', // 10px
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.5rem', // 24px
      '4xl': '1.625rem', // 26px
      '5xl': '1.75rem', // 28px
      '6xl': '1.875rem', // 30px
      '7xl': '2rem', // 32px
      '8xl': '2.25rem', // 36px
      '9xl': '2.5rem', // 40px
      '10xl': '2.75rem', // 44px
      '11xl': '3rem', // 48px
      '12xl': '3.625rem', // 58px
      '13xl': '4rem', // 64px
    },

    lineHeight: {
      none: '1',
      tighter: '1.125',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
}
