import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F8F2F5;
    --green: #66ffbd;
    --shape: #FFFFFF;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(---background);
    -webkit-font-smoothing: antiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
