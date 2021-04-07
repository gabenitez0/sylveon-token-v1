import Head from 'next/head';
import Header from './components/header';
import styles from '../styles/index.module.css';
import { motion } from "framer-motion";
//import Countdown from "react-countdown";

export default function Home() {
  //const ahora = Date.now();
  //const hoy = new Date(); hoy.setHours(24, 0, 0);

  const variants = {
    hidden: { opacity: 0, left: "-100px" },
    visible: { opacity: 1, left: 0 },
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Sylveon Protocol Token</title>
        <meta
          name="description"
          content="$SYL is a BSC Token programmed to reward holders through a deflationary ecosystem. In each transaction, a burning and repurchase of tokens is carried out, in addition to contributing to continue growing."
        />
      </Head>
      <main className={styles.main}>
        <Header title="Welcome Sylveon Protocol" desc={/*<Countdown date={hoy + ahora}/>*/ "Fair Launch Coming Soon"} />
        <div className={styles.content}>
          <div className={styles.grid}>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.4, duration: 1 }}>
                <h2>About</h2>
                <p>$SYL is a BSC Token programmed to reward holders through a deflationary ecosystem. In each transaction, a burning and repurchase of tokens is carried out, in addition to contributing to continue growing.</p>
            </motion.div>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.8, duration: 1 }}>
                <h2>Tokenomics</h2>
                <p>1% goes to burn 🔥</p>
                <p>1% goes to re-buy tokens 💰</p>
                <p>1% goes to dev & marketing costs 🎯</p>
            </motion.div>
        </div>
      </div>
      </main>
    </div>
  )
}
