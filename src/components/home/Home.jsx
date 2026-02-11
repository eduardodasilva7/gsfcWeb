 import './Home.css';

import imgFundo from '../../assets/img/imgFundo.png';


function Home() {
  return (
    <div className="home-container" id='home'>
      <img src={imgFundo} alt="" className='imgHome' />
      <h1 className='titleHome'>Seja bem-vindo(a)</h1>
      <p className='textHome'>  O Grupo Socorrista Francisco de Assis (GFSA) realiza diversas atividades voltadas à caridade, ao estudo do Espiritismo e à assistência espiritual e social. Entre suas ações estão as Palestras Públicas, que promovem reflexão e aprendizado sobre temas evangélicos e de vida; a Assistência Espiritual, com atendimentos individuais para apoio emocional e equilíbrio interior; e o atendimento a Gestantes e Crianças, oferecendo suporte espiritual e material às famílias.
      </p>
      <p className='textHome'>  A ONG também realiza eventos solidários — como bazares e encontros — para integrar a comunidade e arrecadar fundos para suas atividades. Por meio da Escola de Aprendizes do Evangelho, promove o estudo da Doutrina Espírita e o desenvolvimento pessoal. Já o setor da Juventude trabalha valores morais e espirituais com crianças e adolescentes de forma lúdica e educativa.
      </p>
    </div>
  );
}
export default Home;