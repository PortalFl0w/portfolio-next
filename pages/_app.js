import React from 'react';
import App from 'next/app';
import '../styles/globals.css'
import { wrapper } from '../components/store'

class MyApp extends App {
  static getInitialProps = wrapper.getInitialAppProps(store => async ({Component, ctx}) => {

    console.log('Setting initial global props');
    store.dispatch({type: 'TIME_SPEED', payload: 1000});
    store.dispatch({type: 'MAX_TIME', payload: 86400});
    store.dispatch({type: 'TICK_RATE', payload: 1000});

    return {
        pageProps: {
            // Call page-level getInitialProps
            // DON'T FORGET TO PROVIDE STORE TO PAGE
            ...(Component.getInitialProps ? await Component.getInitialProps({...ctx, store}) : {})
        },
    };

  });

  render() {
    const {Component, pageProps} = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default wrapper.withRedux(MyApp)
