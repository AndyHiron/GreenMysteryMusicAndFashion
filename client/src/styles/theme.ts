import 'styled-components';

const theme = {
  colors: {
    white: Object.assign('#FFFFFF', {
      medium: '#FCFCFA',
      dark: '#F4F5F2',
    }),
    black: Object.assign('#000000', {
      light: '#4C4C4C',
    }),
    gray: Object.assign('#989898', {
      light: '#F4F4F4',
    }),
    green: '#ff5800',
    red: '#DC3545',
    orange: '#FF6000',
  },
  shadows: {
    interactiveElement: '0px 1px 1px 0px rgba(0,0,0,0.1)',
    overlay: '0px 2px 4px 0px rgba(0,0,0,0.1)',
  },
  fonts: {
    notoSans: 'noto-sans, sans-serif',
  },
} as const;

export default theme;
