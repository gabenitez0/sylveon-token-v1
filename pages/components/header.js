import styles from '../../styles/header.module.css';

export default function Nav() {
    return (
        <div class={styles.header}>
            <div class={styles.grid}>
                <div class={styles.card}>
                    <h1 className={styles.title}>Sylveon Protocol</h1>
                    <p>On the Binance Smart Chain, Sylveon is a reflectionary, deflationary token that burns 1.2% of all fees and reflects 0.6% of all fees back to its holders & 0.6% is burnt reducing the total supply!</p>
                </div>
                <div class={styles.card}>
                    <img src="/1.png" className={styles.imgHeader}/>
                </div>
            </div>
        </div>
    )
}