import Head from 'next/head'
import Header from './components/header'
import styles from '../styles/index.module.css';
import Countdown from "react-countdown";

export default function Home() {
  const ahora = Date.now();
  const hoy = new Date(); hoy.setHours(24, 0, 0);
  return (
    <div className={styles.container}>
      <Head>
        <title>Roadmap | Sylveon Protocol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header title="Roadmap" desc="You can know our objetives with this project"/>
        <div className={styles.info}>
          <div className={styles.box}>
            <h1>Roadmap</h1>
            <p>Sylveon has the ability to reflect any token it receives back to the suppliers of its token. It rewards holders for holding Sylveon Token. Instant yield.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
