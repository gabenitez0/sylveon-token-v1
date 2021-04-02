import Head from 'next/head'
import Nav from './components/nav'
import Header from './components/header'
import styles from '../styles/index.module.css';
import Countdown from "react-countdown";

export default function Home() {
  const ahora = Date.now();
  const hoy = new Date(); hoy.setHours(24, 0, 0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Sylveon Protocol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav/>
        <Header/>
        <div className={styles.info}>
          <div className={styles.box}>
            <h1>Fair Launch Countdown!</h1>
            <Countdown date={hoy + ahora} />
          </div>
          <div className={styles.box}>
            <h1>About Sylveon Protocol</h1>
            <p>Sylveon has the ability to reflect any token it receives back to the suppliers of its token. It rewards holders for holding Sylveon Token. Instant yield.</p>
          </div>
          <div className={styles.box}>
            <h1>Tokenomics</h1>
            <p>Sylveon is a passive farming deflationary token. Every transaction has a fee of 1.2% where 0.6% is distributed among holders & 0.6% is burnt reducing the supply!</p>
          </div>
          <div className={styles.box}>
            <h1>Fast and low cost</h1>
            <p>Sylveon run on Binance Smart Chain. Token holders pay very little fees and get quick confirmations on the blockchain.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
