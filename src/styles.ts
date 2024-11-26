import { createGlobalStyle } from 'styled-components'

export const colors = {
  gray: '#2d3436',
  blue: '#0984e3',
  red: '#d63031',
  redTwo: '#ff7675'
}

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
    }

    body {
    background-color: ${colors.gray};
    }
`
