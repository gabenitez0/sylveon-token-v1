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
            <h1>Roadmap</h1>
            <p>Sylveon has the ability to reflect any token it receives back to the suppliers of its token. It rewards holders for holding Sylveon Token. Instant yield.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
