import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-font: #767D92;
  }

  body {
    background: #081b33;
    color: var(--color-font);
    padding: 0 15px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

`

export default GlobalStyle
