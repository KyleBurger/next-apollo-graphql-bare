import React, { Component } from "react";
import styled from "styled-components";
import { GlobalStyle, theme } from "./_layout-styles";
import Meta from "./Meta";

// Higher order component to use for the layout
const withLayout = (Page) => {
  return (props) => (
    <>
      <GlobalStyle darkMode={props.darkMode} />
      <Meta />
      <main>
        <MainContent>
          <Page />
        </MainContent>
      </main>
    </>
  );
};

// Layout component that wraps the children in a parent element
export class Layout extends Component {
  render() {
    return (
      <>
        <GlobalStyle darkMode={props.darkMode} />
        <Meta />
        <main>
          <MainContent>{this.props.children}</MainContent>
        </main>
      </>
    );
  }
}

export default withLayout;

// TODO: Feel free to change all of the styles below to your own styles
const MainContent = styled.section`
  text-align: center;

  .rotate {
    animation: rotation 8s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
