import { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#333",
  white: "#fff"
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
    color: ${props => (props.darkMode ? props.theme.white : props.theme.black)};
    background-color: ${props =>
      props.darkMode ? props.theme.black : props.theme.white};
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
		font-family: buddymx;
    letter-spacing:.3rem;
  }

  p, ul, li {
    font-size: 1.8rem;
  }

  .center {
    text-align: center;
  }

  .tooltip {
    position: relative;

    &:hover .tooltiptext {
      visibility: visible;
    }
  }

  .instagram {color:#fb3958;}
  .facebook {color:#3b5998;}
  .twitter {color:#1da1f2;}
  /* .linkedin {color:} */
`;
