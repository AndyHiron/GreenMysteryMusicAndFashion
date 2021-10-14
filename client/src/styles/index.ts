import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.notoSans};
    background-color: ${({ theme }) => theme.colors.white.medium};
    height: 100%;
  }

  #app {
    height: 100%;
  }

  .Toastify__toast-container {
    width: 450px;
  }

  .Toastify__toast {
    border-radius: 4px;
  }

  .Toastify__toast-body {
    margin: auto 10px;
  }

  .Toastify__toast--error {
    background-color: ${({ theme }) => theme.colors.red};
  }

  .Toastify__toast--success {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export default globalStyle;
