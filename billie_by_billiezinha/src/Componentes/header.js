import Link from 'next/link';
import styles from './Header.module.css'; // Certifique-se de que o caminho está correto

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.titulo}>
        <h1>Billie Eilish</h1>
        <div className={styles.textotitulo}>
          <p>by billiezinha: <br /> Portifólio</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li><Link href="/" className={styles.a}>Discográfia</Link></li>
          <li><Link href="/sobre" className={styles.a}>Sobre</Link></li>
          <li><Link href="/perfil" className={styles.a}>Links</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
