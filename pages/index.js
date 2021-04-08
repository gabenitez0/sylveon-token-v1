import Head from 'next/head';
import Header from './components/header';
import styles from '../styles/index.module.css';
import { motion } from "framer-motion";
import Countdown from "react-countdown";

export default function Home(props) {
  const { home } = props;

  const lanzamiento = new Date(2021, 4, 10, 0, 0, 0);

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
        <Header title={home.title} button1={home.button1} button2={home.button2} desc={<Countdown date={lanzamiento}/>} />
        <div className={styles.content}>
          <div className={styles.grid}>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.4, duration: 1 }}>
                <h2>{home.about.title}</h2>
                <p>{home.about.desc}</p>
            </motion.div>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.8, duration: 1 }}>
                <h2>{home.tokenomics.title}</h2>
                <p>{home.tokenomics.desc}</p>
                <ul>
                  {home.tokenomics.list.map(li =>
                    <li key={Math.random()}>{li}</li>
                  )}
                </ul>
            </motion.div>
        </div>
      </div>
      </main>
    </div>
  )
}

export async function getStaticProps({locale}) {
  const response = await import(`./lang/${locale}.json`);
  return {
    props: {
      home: response.default.home,
    }
  }
}