// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="titulo">
        <h1>Billie Eilish</h1>
        <div className="textotitulo">
          <p>by billiezinha: <br /> Portifólio</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link href="/">Discográfia</Link></li>
          <li><Link href="/amigos">Historia</Link></li>
          <li><Link href="/perfil">Links</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
