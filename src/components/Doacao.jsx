import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Doacao.css'


function Doacao() {
  return (
    <div className="doacao-container">
      <h1>Doações</h1>
      <div className='cards' >
        <div className='grid-card'>

          <div className="row linha1">
            <div className="col-12 col-md-6 col-xl-6 cardTitle cartao" style={{backgroundColor: '#A8E6CF'}}>
              <h3 className='title'>Jeitos de Doar</h3>
            </div>
            <div className="col-12 col-md-6 col-xxl-6 cardSaibaMais cartao" style={{backgroundColor: '#B5EAD7'}}>
              <p>As doações podem ser feitas de diferentes formas, como entrega presencial em pontos de coleta, contribuição em campanhas avulsas, participação em eventos drive-thru, ou ainda doações em parceria com organizações sociais como o Rotary.</p>
              <a href="">Saiba Mais <FontAwesomeIcon icon={faArrowRight} /></a>
            </div>
          </div>

          <div className="row linha2">
            <div className="col-12 col-md-4 col-xl-4 cartao" style={{backgroundColor: '#66CDAA'}}>
              <h3>Rotary</h3>
              <p>O Rotary é uma organização internacional de voluntários, presente em diversos países, que atua em projetos sociais, humanitários e educacionais. Ele apoia iniciativas que melhoram comunidades locais, incluindo campanhas de arrecadação de alimentos e produtos essenciais.</p>
            </div>
            <div className="col-12 col-md-4 col-xl-4 cartao" style={{backgroundColor: '#45B29D'}}>
              <h3>Avulsos</h3>
              <p>O termo “avulso” refere-se a doações feitas de maneira independente, sem necessidade de vínculo ou inscrição em uma campanha contínua. A pessoa pode doar um item ou uma quantidade pontual, de acordo com sua disponibilidade.</p>
            </div>
            <div className="col-12 col-md-4 col-xl-4 cartao" style={{backgroundColor: '#A3F4D8'}}>
              <h3>Drive-Thru</h3>
              <p>O drive-thru de doações é um modelo prático em que a pessoa não precisa sair do carro. Ela passa por um ponto de coleta e entrega os itens diretamente aos voluntários, de forma rápida, segura e organizada.</p>
            </div>
          </div>

          <div className='row linha3'>
            <div className="col-12 col-md-12 col-xl-12 cartao" style={{backgroundColor: '#A8E6CF'}}>
              <h3>Aviso!</h3>
              <p>Pedimos que não sejam doados produtos próximos do vencimento ou em mau estado de conservação. Isso garante a segurança alimentar e evita desperdício, permitindo que as doações realmente cheguem em boas condições a quem precisa.</p>
            </div>
          </div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente alias blanditiis, porro tempora enim cumque aut illum, voluptatum esse, quas ipsam magni. Quisquam accusamus ducimus quas quasi rerum odit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim vero expedita sit adipisci magnam quas consectetur voluptatem eius quam ratione eos sint totam iste, laudantium excepturi a, deleniti placeat perferendis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus amet laudantium? Blanditiis repudiandae sed aut quos quia vel autem dolorem? Autem quisquam omnis consectetur libero perspiciatis laborum iusto inventore?</p>
    </div>
  );
}
export default Doacao;
