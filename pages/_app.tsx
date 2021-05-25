import React from 'react';
import Head from 'next/head'
import withRedux from "next-redux-wrapper";
import { AppInitialProps } from 'next/app';
import { Provider } from "react-redux";
import { appStore } from "../redux/store";
import { Store } from "redux";

type MyAppType = {
  Component: any,
  pageProps: any
}

function MyApp(props: MyAppType) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>NextJS App</title>
      </Head>
      <Provider store={ appStore }>
        <Component { ...pageProps } />
      </Provider>
    </>
  )
}

MyApp.getInitialProps = async function (props: any): Promise<AppInitialProps> {
  const pageProps = props.Component.getInitialProps ? await props.Component.getInitialProps(props.ctx) : {};

  return { pageProps: pageProps };
}

const makeStore = (): Store<any, any> => appStore;

export default withRedux(makeStore)(MyApp);
