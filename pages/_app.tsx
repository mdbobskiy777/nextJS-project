import React from 'react';
import '../styles/globals.css';

type MyAppType = {
  Component: any,
  pageProps: any
}

function MyApp(props: MyAppType) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

export default MyApp;
