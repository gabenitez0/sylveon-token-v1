import Head from 'next/head'
import Nav from './components/nav'
import styles from '../styles/index.module.css'

export default function Roadmap() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roadmap | Sylveon Protocol</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <main className={styles.main}>
        <div class={styles.header}>
          <h1 className={styles.title}>Roadmap</h1>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/1.png" className={styles.imgHeader}/>
          </div>

          <div className={styles.card}>
            <h3>Welcome Sylveon Protocol</h3>
            <p>On the Binance Smart Chain, Sylveon is a reflectionary, deflationary token that burns 1.2% of all fees and reflects 0.6% of all fees back to its holders & 0.6% is burnt reducing the total supply!</p>
            <h4>Config:</h4>
            <p>→ Set Slippage 6%</p>
            <p>→ Total Supply: 12.000.000</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
