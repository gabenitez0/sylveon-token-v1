import Head from 'next/head';
import '../styles/globals.css';
import { useState } from "react";

import Nav from './components/nav';
import Footer from './components/footer';

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
        <link rel="icon" href="favicon.gif" type="image/gif" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:image" content="/public/2.png" />
      </Head>
      <Nav visible={visible} setVisible={setVisible} nav={nav}/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
