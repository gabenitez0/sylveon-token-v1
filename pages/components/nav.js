import styles from '../../styles/nav.module.css';
import Link from 'next/link';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Nav() {
    const [visible, setVisible] = useState(false);
    const [isTop, setIsTop] = useState(true);
    const { scrollY } = useViewportScroll();

    
    const nav = {
        background: isTop ? "none" : "rgb(23 49 74 / 51%)",
        boxShadow: isTop ? "none" : "2px 2px 11px -3px rgb(0 0 0 / 30%)"
    };
    const phone = {
        opacity: visible ? 1 : 0,
        zIndex: visible ? 10 : -1,
        right: visible ? 0 : -400
    };

    const yRange = useTransform(scrollY, [0, 1], [0, 1]);
    useEffect(() => yRange.onChange((v) => v > 0 ? setIsTop(false) : setIsTop(true)), [yRange]);

    return (<>
        <nav className={styles.nav} style={nav}>
            <div className={styles.logo}>
                <img src="/2.gif" style={{maxWidth: isTop ? "35%" : "22%"}}/>
                <h1 style={{fontSize: isTop ? "2.5rem" : "2rem"}}>Sylveon Protocol</h1>
            </div>
            <div className={styles.menu}>
                <Link href="/"><a onClick={() => setVisible(false)}>Home</a></Link>
                <Link href="/roadmap"><a onClick={() => setVisible(false)}>Roadmap</a></Link>
                <a href="https://t.me/sylveon_protocol" target="_blank">Telegram</a>
                <a>Contract</a>
                <a>BUY NOW</a>
            </div>
        </nav>
        <div className={styles.open} onClick={() => visible ? setVisible(false) : setVisible(true)}>
            {visible ? <img src="/close.png"/> : <img src="/menu.png"/>}
        </div>
        <motion.div className={styles.phone} style={phone}>
            <div className={styles.logo}>
                <img src="/2.gif"/>
                <h1>Sylveon Protocol</h1>
            </div>
            <div className={styles.menu}>
                <Link href="/"><a onClick={() => setVisible(false)}>Home</a></Link>
                <Link href="/roadmap"><a onClick={() => setVisible(false)}>Roadmap</a></Link>
                <a href="https://t.me/sylveon_protocol" target="_blank">Telegram</a>
                <a>Contract</a>
                <a>BUY NOW</a>
            </div>
        </motion.div>
    </>)
}