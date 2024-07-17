import Header from '../../Componentes/header'; // Corrija o caminho para o componente Header
import styles from './page.module.css'; // Verifique se o caminho está correto

export default function Sobre() {
  return (
    <div className={styles.body}>
      <Header />
      <picture><img src="" alt="" /></picture>
      <main className={styles.main}>
        <h2 className={styles.titulo}>Sobre</h2>
        <p className={styles.texto}>Billie Eilish é uma cantora e compositora americana nascida em 18 de dezembro de 2001, em Los Angeles, Califórnia. Desde jovem, ela demonstrou interesse pela música, influenciada por sua família artística. Sua carreira começou a decolar em 2015, quando ela lançou a música "Ocean Eyes" no SoundCloud, que rapidamente se tornou um sucesso. <br />

Billie é conhecida por seu estilo único e letras introspectivas, abordando temas como saúde mental, relacionamentos e identidade. Seu álbum de estreia, "When We All Fall Asleep, Where Do We Go?", lançado em 2019, foi um marco na sua carreira, conquistando prêmios Grammy e consolidando-a como uma das vozes mais influentes da música contemporânea. <br />

Além de sua música, Billie também se destaca por seu estilo visual, frequentemente usando roupas largas e coloridas, e por sua postura em questões sociais, como saúde mental e direitos dos jovens. Ela continua a ser uma figura importante na indústria musical e uma inspiração para muitos fãs ao redor do mundo.</p>
      </main>
    </div>
  );
}
