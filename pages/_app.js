import React from "react";
import App from "next/app";
import styled from "styled-components";
import { ApolloProvider } from "react-apollo";
import withData from "../lib/withData";
import TagManager from "react-gtm";

const tagManagerArgs = {
  id: "GTM-YOUR_TAG_HERE"
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
        <BannerContainer>
          <CookieBanner />
        </BannerContainer>
      </ApolloProvider>
    );
  }
}

export default withData(BuddyApp);

const BannerContainer = styled.aside`
  p {
    font-size: 1.5rem;
  }

  div > div {
    font-size: 3.2rem;
  }
`;
