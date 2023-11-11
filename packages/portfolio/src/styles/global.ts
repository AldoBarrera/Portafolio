import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: 
      url('/fonts/Manrope-200.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: 
      url('/fonts/Manrope-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: 
      url('/fonts/Manrope-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: 
      url('/fonts/Manrope-500.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: 
      url('/fonts/Manrope-600.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: 
      url('/fonts/Manrope-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: 
      url('/fonts/Manrope-800.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 200;
    font-display: swap;
    src: url("/fonts/Nunito-200.woff2") format("woff2");
  }
  
  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 200;
    font-display: swap;
    src: url("/fonts/Nunito-200italic.woff2") format("woff2");
  }
  
  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url("/fonts/Nunito-300.woff2") format("woff2");
  }
  
  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url("/fonts/Nunito-300italic.woff2") format("woff2");
  }
  
  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Nunito-Regular.woff2") format("woff2");
  }
  
  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Nunito-Italic.woff2") format("woff2");
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url("/fonts/Nunito-600.woff2") format("woff2");
  }

  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url("/fonts/Nunito-600italic.woff2") format("woff2");
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/Nunito-700.woff2") format("woff2");
  }

  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url("/fonts/Nunito-700italic.woff2") format("woff2");
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url("/fonts/Nunito-800.woff2") format("woff2");
  }

  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url("/fonts/Nunito-800italic.woff2") format("woff2");
  }

  @font-face {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url("/fonts/Nunito-900.woff2") format("woff2");
  }

  @font-face {
    font-family: "Nunito";
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: url("/fonts/Nunito-900italic.woff2") format("woff2");
  }

  img {
    width: 100%;
  }

  ${() => css`
    html {
      font-size: 62.5%;
    }

    body,
    button {
      font-size: 1.6rem;
    }
  `}
`

export default GlobalStyles
