import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {AppProvider} from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import enTranslations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';
import ApolloClient from 'apollo-boost';
import '@shopify/polaris/dist/styles.css';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
    fetchOptions:{
        credentials:'include'
    }
})
export default class WrappedApp extends App {
    constructor(props) {
        super(props)  
        this.state = {
            isuserLoggedin:false,
            config: {
                apiKey: API_KEY, 
                shopOrigin: Cookies.get('shopOrigin'),
                forceRedirect: true
            }
        }
    }
  render() {
      const {Component, pageProps} = this.props;
      return (
          <React.Fragment>
            <Head>
              <title>Ace Interiors</title>
              <meta charSet="utf-8" />
            </Head>
              <AppProvider i18n={enTranslations}>
                <Provider
                  config={{
                    apiKey=API_KEY,
                    shopOrigin:shopOrigin,
                    forceRedirect: true
                  }}
                >
                <ApolloProvider client={client}>
                  <Component {...pageProps} />
                </ApolloProvider>
                </Provider>
              </AppProvider>
          </React.Fragment>
      );
  }
}