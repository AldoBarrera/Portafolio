import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
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
