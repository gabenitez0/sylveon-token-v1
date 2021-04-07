import Head from 'next/head';
import '../styles/globals.css';

import Nav from './components/nav';
import Footer from './components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="favicon.gif" type="image/gif" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:image" content="/1.png" />
      </Head>
      <Nav/>
      <Component {...pageProps}/>
      <Footer/>
    </>
  );
}

export default MyApp
