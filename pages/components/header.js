import styles from '../../styles/header.module.css';

export default function Nav({title, desc}) {
    return (
        <div className={styles.header}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                    <a href="https://pancakeswap.finance/" target="_blank" className={styles.button}>BUY NOW</a>
                </div>
                <div className={styles.card}>
                    <img src="/1.png" className={styles.imgHeader}/>
                </div>
            </div>
        </div>
    )
}