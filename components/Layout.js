import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./_layout-styles";
import Meta from "./Meta";

// Higher order component to use for the layout
const withLayout = Page => {
  return props => (
    <ThemeProvider theme={theme}>
      <GlobalStyle darkMode={props.darkMode} />
      <Meta />
      <MainStyles>
        <nav>NavBar Here</nav>
        <Page />
        <footer>Footer content here</footer>
      </MainStyles>
    </ThemeProvider>
  );
};

// Layout component that wraps the children in a parent element
export class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle darkMode={props.darkMode} />
        <Meta />
        <MainStyles>
          <nav>NavBar Here</nav>
          {this.props.children}
          <footer>Footer content here</footer>{" "}
        </MainStyles>
      </ThemeProvider>
    );
  }
}

export default withLayout;

const MainStyles = styled.main``;
