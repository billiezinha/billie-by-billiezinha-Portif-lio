"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.titulo}>
        <h1>Billie Eilish</h1>
        <div className={styles.textotitulo}>
          <p>by billiezinha: <br /> Portifólio</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="menu"
        >
          ☰
        </button>
        <ul id="menu" className={`${styles.ul} ${menuOpen ? styles.showMenu : ''}`}>
          <li><Link href="/" className={styles.a}>Discográfia</Link></li>
          <li><Link href="/perfil" className={styles.a}>Links</Link></li>
          <li><Link href="/sobre" className={styles.a}>Sobre</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
