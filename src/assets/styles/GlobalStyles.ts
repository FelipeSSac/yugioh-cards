import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: sans-serif;
  }

  @media (max-width: 1200px) {
    html {
      font-size: 90%;
    }
  }

  @media (max-width: 1000px) {
    html {
      font-size: 85%;
    }
  }

  @media (max-width: 800px) {
    html {
      font-size: 75%;
    }
  }

  @media (max-width: 600px) {
    html {
      font-size: 70%;
      font-family: sans-serif;
    }
  }
`