import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *{
    font-family: 'Silkscreen', cursive;
    margin: 0;
    padding: 0;
    scrollbar-width: auto;
    scrollbar-color: #376672 #2e5358;

  ::-webkit-scrollbar {
    width: 16px;
  }
  ::-webkit-scrollbar-track {
    background: #18363a;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f2f5f0;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  }
  body {
   background: #1c232c;
  }
`

export default GlobalStyles
