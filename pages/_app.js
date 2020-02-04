import React from "react";
import App from "next/app";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";
import TagManager from "react-gtm";

const tagManagerArgs = {
  id: "GTM-YOURTAGHERE"
};

class BuddyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  }

  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withData(BuddyApp);
