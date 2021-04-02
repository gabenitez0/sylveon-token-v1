import styles from '../../styles/nav.module.css';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/roadmap"><a>Roadmap</a></Link>
            <a href="https://bscscan.com" target="_blank">Contract</a>
            <a href="https://telegram.com" target="_blank">Telegram</a>
            <a href="https://pancakeswap.finance" target="_blank">BUY NOW</a>
        </nav>
    )
}