import styles from '../../styles/header.module.css';
import { motion } from "framer-motion";

export default function Nav({title, desc}) {
    const variants = {
      hidden: { opacity: 0, left: "-100px" },
      visible: { opacity: 1, left: 0 },
    }
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <motion.div className={styles.intro} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0, duration: 1 }}>
                    <img src="/2.gif"/>
                    <h1>{title}</h1>
                    <span>{desc}</span>
                    <div className={styles.buttons}>
                        <a href="https://telegram.com" target="_blank">Join on Telegram</a>
                        <a href="https://bscscan.com" target="_blank">Buy on Pancake</a>
                    </div>
                </motion.div>
                <div className={styles.grid}>
                    <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.4, duration: 1 }}>
                        <h2>About</h2>
                        <p>$SYL is programmed to reward holders while increasing in both liquidity and value.</p>
                    </motion.div>
                    <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.8, duration: 1 }}>
                        <h2>Tokenomics</h2>
                        <p>2% goes to holders</p>
                        <p>2% goes to auto locked liquidity</p>
                        <p>100% SAFU</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}