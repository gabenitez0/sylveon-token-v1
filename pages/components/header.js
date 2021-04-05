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
                        <a href="https://t.me/sylveon_protocol" target="_blank">Join on Telegram</a>
                        <a href="https://pancakeswap.finance" target="_blank">Buy on Pancake</a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}