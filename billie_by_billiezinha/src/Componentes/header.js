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
          <li><Link href="/">Página Inicial</Link></li>
          <li><Link href="/amigos">Amigos</Link></li>
          <li><Link href="/perfil">Perfil</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
