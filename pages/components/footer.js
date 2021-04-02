import Link from 'next/link';
import styles from '../../styles/footer.module.css';

export default function Footer() {
  return (<>
      <footer className={styles.footer}>
          <div className={styles.box}>
            <h2>Sylveon Protocol</h2>
            <div className={styles.menu}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/roadmap"><a>Roadmap</a></Link>
                <a href="https://telegram.com" target="_blank">Join Telegram</a>
                <a href="https://telegram.com" target="_blank">View Contract</a>
                <a href="https://telegram.com" target="_blank">BUY NOW</a>
            </div>
          </div>
      </footer>
      </>
  );
}
