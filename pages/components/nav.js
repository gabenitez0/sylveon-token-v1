import styles from '../../styles/nav.module.css';
import Link from 'next/link';

export default function Nav({visible, setVisible, nav}) {

    return (<>
        <nav className={styles.nav} style={nav}>
            <div className={styles.logo}>
                <img src="/2.gif"/>
                <h1>Sylveon Protocol</h1>
            </div>
            <div className={styles.menu}>
                {/*<Link href="/"><a onClick={() => setVisible(false)}>Home</a></Link>
                <Link href="/roadmap"><a onClick={() => setVisible(false)}>Roadmap</a></Link>*/}
                <a href="https://bscscan.com" target="_blank">Contract</a>
                <a href="https://t.me/sylveonprotocol" target="_blank">Telegram</a>
                <a href="https://pancakeswap.finance" target="_blank">BUY NOW</a>
            </div>
        </nav>
        <div className={styles.open} onClick={() => visible ? setVisible(false) : setVisible(true)}>
            {visible ? <img src="/close.png"/> : <img src="/menu.png"/>}
        </div>
    </>)
}