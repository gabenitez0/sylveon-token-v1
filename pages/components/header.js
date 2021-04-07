import styles from '../../styles/header.module.css';
import Link from 'next/link';
import { useViewportScroll, useTransform, motion } from "framer-motion";

export default function Nav({title, desc}) {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150])

    const container = {
        hidden: { opacity: 0 },
        show: { 
            opacity: 1, 
            left: 0,
            transition : {
                staggerChildren: 0.4,
                duration: 1.5
            }
        },
    }

    const items = {
        hidden: { opacity: 0, left: "-100px", position: "relative" },
        show: { 
            opacity: 1, 
            left: 0,
            transition : {
                duration: 1
            }
        },
    }

    return (
        <motion.div className={styles.header}>
            <div className={styles.container}>
                <motion.div className={styles.intro} initial="hidden" animate="show" variants={container} style={{ y: y1 }}>
                    <motion.img src="/2.gif"/>
                    <motion.h1 variants={items}>{title}</motion.h1>
                    <motion.span variants={items}>{desc}</motion.span>
                    
                    <div className={styles.buttons}>
                        <Link href="/roadmap"><motion.a variants={items}>View Roadmap</motion.a></Link>
                        <motion.a variants={items} href="https://t.me/sylveon_protocol" target="_blank">Join on Telegram</motion.a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}