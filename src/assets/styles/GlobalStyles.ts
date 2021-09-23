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

  @media (max-width: 940px) {
    html {
      font-size: 75%;
    }
  }

  @media (max-width: 813px) {
    html {
      font-size: 70%;
      font-family: sans-serif;
    }
  }

  @media (max-width: 750px) {
    html {
      font-size: 55%;
      font-family: sans-serif;
    }
  }

  @media (max-width: 620px) {
    html {
      font-size: 40%;
      font-family: sans-serif;
    }
  }

  @media (max-width: 440px) {
    html {
      font-size: 30%;
      font-family: sans-serif;
    }
  }
`