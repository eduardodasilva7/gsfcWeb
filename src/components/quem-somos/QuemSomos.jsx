import "./QuemSomos.css";

import img from "../../assets/img/juntos.jpg";

function QuemSomos() {
  return (
    <div className="quemSomos">
      <div className="banner" style={{ backgroundImage: `url(${img})` }}>
        <h2>Tradição, Fé e Compromisso com a Caridade</h2>
      </div>
      <section className="sobre">
        <h2>A Fundação do Grupo Socorrista Francisco de Assis (GFSA)</h2>
        <p>
          Em 17 de dezembro de 1990, um grupo de pessoas se reuniu com o
          propósito de criar uma sociedade civil de caráter religioso e
          filantrópico voltada ao Espiritismo e à caridade. Nessa ocasião,
          Carlos Alberto Venturini foi nomeado presidente, dando início ao
          projeto legalmente constituído.
        </p>

        <h2>Princípios e Missão</h2>
        <p>
          O GFSA foi fundado com base nos ensinamentos codificados por Allan
          Kardec, promovendo o estudo, prática e divulgação do Espiritismo. Suas
          atividades — assistenciais, materiais, morais e espirituais — são
          pautadas pela inclusão, sem qualquer distinção de sexo, raça, cor,
          profissão, nacionalidade, condição social ou crença.
        </p>
        <h2>Evolução da Sede</h2>
        <p>
          Inicialmente, os encontros ocorriam no porão da Creche Mamãe, em Santo
          Amaro. Com o crescimento do grupo, foi necessário buscar novos
          espaços: Rua Cabiúna, 166 – Vila Santa Catarina Rua Estilo Barroco –
          Santo Amaro Rua Diogo de Quadros, 363 – sede atual há 18 anos
        </p>

        <h2>Legado de Inês Assumpção</h2>
        <p>
          Inês Assumpção liderou espiritualmente o GFSA por muitos anos, com
          dedicação, firmeza e afeto. Reconhecida por seu papel acolhedor e
          orientador, deixou um legado de amor e sabedoria que permanece vivo na
          memória e no coração dos integrantes da casa.
        </p>

        <div className="info">
          <div>
            <h3>📍 Endereço</h3>
            <p>Rua Diogo de Quadros 363</p>
          </div>
          <div>
            <h3>🎁 Entrada</h3>
            <p>Gratuita</p>
          </div>
          <div>
            <h3>💬 Quem pode ir </h3>
            <p>Jovens,crianças,Adultos e Idosos</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuemSomos;
