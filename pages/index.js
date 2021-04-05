import Head from 'next/head';
import Header from './components/header';
import styles from '../styles/index.module.css';
import Countdown from "react-countdown";
import { motion } from "framer-motion";

export default function Home() {
  const ahora = Date.now();
  const hoy = new Date(); hoy.setHours(24, 0, 0);

  const variants = {
    hidden: { opacity: 0, left: "-100px" },
    visible: { opacity: 1, left: 0 },
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sylveon Protocol</title>
        <meta
          name="description"
          content="Sylveon is a passive farming deflationary token. Every transaction has a fee of 1.2% where 0.6% is distributed among holders & 0.6% is burnt reducing the supply!"
        />
      </Head>
      <main className={styles.main}>
        <Header title="Fair Launch Countdown" desc={<Countdown date={hoy + ahora}/>} />
        <div className={styles.grid}>
          <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.4, duration: 1 }}>
              <h2>About</h2>
              <p>🤖 $SYL is programmed to reward holders while increasing in both liquidity and value. On each transaction the protocol automotically distribute rewards to holder, auto-locks liquidity, buy back tokens, and insure funds. It does this by applying a, 4% tax on transactions.</p>
          </motion.div>
          <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.8, duration: 1 }}>
              <h2>Tokenomics</h2>
              <p>2% goes to holders 🤝</p>
              <p>2% goes to burn 🔥</p>
              <p>$0.00002 Initial Price 💎</p>
              <p>Use 6% slippage tolerance 🚀</p>
          </motion.div>
      </div>
      </main>
    </div>
  )
}
