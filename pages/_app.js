import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";
import TagManager from "react-gtm";
import { theme } from "../components/_layout-styles";

const tagManagerArgs = {
  id: "GTM-YOURTAGHERE",
};

class BuddyApp extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withData(BuddyApp);
