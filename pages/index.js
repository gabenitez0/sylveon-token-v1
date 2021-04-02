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
        <Header title="Sylveon Protocol" desc="Sylveon is a reflectionary, deflationary token that burns 1.2% of all fees and reflects 0.6% of all fees back to its holders & 0.6% is burnt reducing the total supply!"/>
        <div className={styles.info}>
          <motion.div className={styles.countdown} initial="hidden" animate="visible" variants={variants} transition={{ delay: 1, duration: 1 }}>
            <h2>Fair Launch Countdown!</h2>
            <Countdown date={hoy + ahora} />
          </motion.div>
          <div className={styles.box}>
            <h2>About Sylveon Protocol</h2>
            <p>Sylveon has the ability to reflect any token it receives back to the suppliers of its token. It rewards holders for holding Sylveon Token. Instant yield.</p>
          </div>
          <div className={styles.box}>
            <h2>Tokenomics</h2>
            <p>Sylveon is a passive farming deflationary token. Every transaction has a fee of 1.2% where 0.6% is distributed among holders & 0.6% is burnt reducing the supply!</p>
          </div>
          <div className={styles.box}>
            <h2>Fast and low cost</h2>
            <p>Sylveon run on Binance Smart Chain. Token holders pay very little fees and get quick confirmations on the blockchain.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
