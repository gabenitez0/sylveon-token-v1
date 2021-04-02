import styles from '../../styles/header.module.css';
import { motion } from "framer-motion";

export default function Nav({title, desc}) {
    const variants = {
      hidden: { opacity: 0, left: "-100px" },
      visible: { opacity: 1, left: 0 },
    }
    return (
        <div className={styles.header}>
            <div className={styles.grid}>
                <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0, duration: 1 }}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <a href="https://pancakeswap.finance/" target="_blank" className={styles.button}>BUY NOW</a>
                </motion.div>
                <motion.div className={styles.card} initial="hidden" animate="visible" variants={variants} transition={{ delay: 0.5, duration: 1 }}>
                    <img src="/1.png" className={styles.imgHeader}/>
                </motion.div>
            </div>
        </div>
    )
}