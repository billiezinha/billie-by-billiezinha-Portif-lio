import Header from '../Componentes/header'; // Corrija o caminho para o componente Header
import styles from './page.module.css'; // Verifique se o caminho está correto

export default function Discografia() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.dont}>
        <div className={styles.donttitulo}>
          <h1>dont smile at me</h1>
        </div>
        <div className={styles.mscdont}>
          <iframe
            title="dont"
            className={styles.teste}
            src="https://open.spotify.com/embed/album/7fRrTyKvE4Skh93v97gtcU?utm_source=generator"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <div className={styles.when}>
        <div className={styles.conteudowhen}>
          <img className={styles.whentitulo} src="/img/when-titulo.webp.webp" alt="WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?" />
          <div className={styles.mscwhen}>
            <iframe
              title="when"
              className={styles.teste}
              src="https://open.spotify.com/embed/album/0S0KGZnfBGSIssfF54WSJh?utm_source=generator&theme=0"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.happier}>
        <div>
          <img className={styles.happiertitulo} src="img/titulo-happier_resized.webp" alt="Happier Than Ever" />
          <div className={styles.mschappier}>
            <iframe
              title="happier"
              className={styles.teste}
              src="https://open.spotify.com/embed/album/0JGOiO34nwfUdDrD612dOp?utm_source=generator"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.hitme}>
        <div className={styles.HITMEtitulo}>
          <h1>HIT ME HARD AND SOFT</h1>
        </div>
        <div className={styles.mschitme}>
          <iframe
            title="hitme"
            className={styles.teste}
            src="https://open.spotify.com/embed/album/7aJuG4TFXa2hmE4z1yxc3n?utm_source=generator"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
