 import './Home.css';

import imgFundo from '../../assets/img/imgFundo.png';


function Home() {
  return (
    <div className="home-container" id='home'>
      <img src={imgFundo} alt="" className='imgHome' />
      <h1 className='titleHome'>Seja bem vindo(a)</h1>
      <p className='textHome'>  O Grupo Socorrista Francisco de Assis (GFSA) foi fundado em 17 de dezembro de 1990, com caráter religioso e filantrópico, dedicado ao estudo, prática e divulgação do Espiritismo, além de atividades de assistência material, moral e espiritual, sempre sem distinções de raça, credo ou condição social.
   A casa teve como grande referência espiritual Inês Assumpção, que, com dedicação e amor, deixou um legado de trabalho em nome do Mestre Jesus, ainda vivo no coração de todos.</p>
    </div>
  );
}
export default Home;