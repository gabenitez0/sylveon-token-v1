import styles from '../../styles/header.module.css';

export default function Nav({title, desc}) {
    return (
        <div className={styles.header}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h1 className={styles.title}>{title}</h1>
                    <p>{desc}</p>
                </div>
                <div className={styles.card}>
                    <img src="/1.png" className={styles.imgHeader}/>
                </div>
            </div>
        </div>
    )
}