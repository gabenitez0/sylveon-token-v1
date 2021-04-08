import Head from 'next/head'
import Header from './components/header'
import styles from '../styles/index.module.css';
import { motion } from "framer-motion";
//import Countdown from "react-countdown";

export default function Home(props) {
  const { roadmap } = props;

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
        <Header title={roadmap.title} desc={roadmap.subtitle}/>
        <div className={styles.content}>
          <div className={styles.grid}>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 1.2, duration: 1 }}>
                <h2>{roadmap.first.title}</h2>
                <p>{roadmap.first.desc}</p>
                <ul>
                  {roadmap.first.list.map(li =>
                    <li key={Math.random()}>{li}</li>
                  )}
                </ul>
            </motion.div>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 1.6, duration: 1 }}>
            <h2>{roadmap.second.title}</h2>
                <p>{roadmap.second.desc}</p>
                <ul>
                  {roadmap.second.list.map(li =>
                    <li>{li}</li>
                  )}
                </ul>
            </motion.div>
            <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 2.0, duration: 1 }}>
              <h2>{roadmap.third.title}</h2>
                <p>{roadmap.third.desc}</p>
                <ul>
                  {roadmap.third.list.map(li =>
                    <li>{li}</li>
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
      roadmap: response.default.roadmap,
    }
  }
}