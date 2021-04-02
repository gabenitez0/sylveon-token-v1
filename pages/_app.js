import Head from 'next/head';
import '../styles/globals.css';
import { useState } from "react";

import Nav from './components/nav';

function MyApp({ Component, pageProps }) {
  const [visible, setVisible] = useState(false);
  const nav = {
    opacity: visible ? 1 : 0,
    zIndex: visible ? 10 : -1,
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:image" content="/1.png" />
      </Head>
      <Nav visible={visible} setVisible={setVisible} nav={nav}/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
