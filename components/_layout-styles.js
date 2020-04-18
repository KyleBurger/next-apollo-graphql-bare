import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: { primary: "#333", white: "#fff" },

  breakpoints: {
    desktopsm: "61.875rem", // 990px
    tablet: "48rem", // 768px
    phone: "35rem", // 560px
    phonesm: "30rem", // 480px
    phonexs: "20rem", // 320px
  },
};

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-x: hidden;
    overflow-y: scroll;
  }

  html,
  body {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 67.5%;
    margin: 0;

    * {
      box-sizing: border-box;
    }
  }

  body {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
  }

  main {
    min-height: calc(100vh - 35rem);
    overflow: hidden;
  }

  h1 { font-size: 4.2rem; }
  h2 { font-size: 3.2rem; }
  h3 { font-size: 2.8rem; }
  h4 { font-size: 2.4rem; }
  h5 { font-size: 2rem; }
  h6 { font-size: 1.6rem; }
  div, p, span, a, li { font-size: 1.6rem; }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    letter-spacing:.3rem;
  }

  p, ul, li {
    font-size: 1.8rem;
  }

  .instagram {color:#fb3958;}
  .facebook {color:#3b5998;}
  .twitter {color:#1da1f2;}
  /* .linkedin {color:} */
`;
