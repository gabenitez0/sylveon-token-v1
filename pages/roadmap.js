import Head from 'next/head'
import Header from './components/header'
import styles from '../styles/index.module.css';
import { motion } from "framer-motion";
//import Countdown from "react-countdown";

export default function Home() {
  const variants = {
    hidden: { opacity: 0, left: "-100px" },
    visible: { opacity: 1, left: 0 },
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Roadmap | Sylveon Protocol Token</title>
        <meta
          name="description"
          content="How are we going to achieve goals .$SYL is a BSC Token programmed to reward holders through a deflationary ecosystem."
        />
      </Head>
      <main className={styles.main}>
        <Header title="Roadmap" desc="How are we going to achieve goals"/>
        <div className={styles.content}>
          <div className={styles.grid}>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 1.2, duration: 1 }}>
                <h2>Urgent Priority</h2>
                <p>These are our short-term objectives and focused on the first investors and holders.</p>
                <ul>
                  <li>Unique burn mechanism & deflationary ecosystem ✅</li>
                  <li>100 Members on Telegram to Website Deploy ✅</li>
                  <li>Deployment of smart contracts & Liquidity Lock</li>
                  <li>300 Members on Telegram to Fair Launch!</li>
                </ul>
            </motion.div>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 1.6, duration: 1 }}>
                <h2>High Priority</h2>
                <p>These objectives are so that more people continue to come to the project and that the first holders begin to see the price of their tokens grow.</p>
                <ul>
                  <li>Marketing and advertising campaing</li>
                  <li>Instagram, Twitter & Reddit fanpage</li>
                  <li>Medium site</li>
                  <li>Gitbook site</li>
                </ul>
            </motion.div>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 2.0, duration: 1 }}>
                <h2>Future objectives</h2>
                <p>These are our future goals so that the price continues to grow and more people continue to join the project.</p>
                <ul>
                  <li>Yield Farming (AMM)</li>
                  <li>Fully operational exchange</li>
                  <li>Betting, Lotteries & Games</li>
                  <li>New Tokens</li>
                  <li>Community ideas</li>
                </ul>
                <p>PS: this section of the roadmap will be updated and improved over time.</p>
            </motion.div>
        </div>
      </div>
      </main>
    </div>
  )
}
