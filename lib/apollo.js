import Head from 'next/head';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-unfetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { endpoint } from '../config';

export function withApollo(PageComponent) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState);

        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    WithApollo.getInitialProps = async ctx => {
        const { AppTree } = ctx;
        const apolloClient = (ctx.apolloClient = initApolloClient());

        let pageProps = {};
        if (PageComponent.getInitialProps) {
            pageProps = await PageComponent.getInitialProps(ctx);
        }

        // If on server
        if (typeof window === 'undefined') {
            if (ctx.res && ctx.res.finished) {
                return pageProps;
            }

            try {
                const { getDataFromTree } = await import('@apollo/react-ssr');
                await getDataFromTree(<AppTree pageProps={{ ...pageProps, apolloClient }} />);
            } catch (e) {
                console.error(e);
            }

            Head.rewind();
        }

        const apolloState = apolloClient.cache.extract();
        return {
            ...pageProps,
            apolloState
        };
    };

    return WithApollo;
}

const initApolloClient = (initialState = {}) => {
    const isDev = process.env.NODE_ENV !== 'production';
    const url = isDev ? endpoint : endpoint;
    const cache = new InMemoryCache().restore(initialState);

    const client = new ApolloClient({
        uri: url,
        cache,
        fetch,
        request: operation => {
            operation.setContext({
                fetchOptions: {
                    credentials: 'include'
                }
            });
        }
    });
    return client;
};