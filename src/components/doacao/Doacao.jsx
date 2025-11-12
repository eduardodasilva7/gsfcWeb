// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Doacao.css';
import imgDoacao from '../../assets/img/doacao.png';
import { useNavigate } from 'react-router-dom';


function Doacao() {

  const navigate = useNavigate();

  const pageInfo = () => {
    navigate('/informativos')
  }

  return (
    <div className="doacao-container" id='doacao'>
        
        <img src={imgDoacao} alt="" className='imgDoacao' />

        <div className='doacao'>
          <h1 className='titleDoacao'>Doações</h1>
          <p className='textDoacao'>As doações podem ser feitas de diferentes formas, como entrega presencial em pontos de coleta, contribuição em campanhas avulsas, participação em eventos drive-thru, ou ainda doações em parceria com organizações sociais como o Rotary. Pedimos que não sejam doados produtos próximos do vencimento ou em mau estado de conservação. Isso garante a segurança alimentar e evita desperdício, permitindo que as doações realmente cheguem em boas condições a quem precisa.</p>
        </div>

      <div className='cards' >
        <div className="cartoes">
          <div className="cartaoDoacao" >

            <h3 className='titulosCartao'>Drive-Thru</h3>
            <p className='textoCartao'>O drive-thru de doações é um modelo prático em que a pessoa não precisa sair do carro. Ela passa por um ponto de coleta e entrega os itens diretamente aos voluntários, de forma rápida, segura e organizada.</p>
          </div>

          <div className="cartaoDoacao" >
            <h3 className='titulosCartao'>Rotary</h3>
            <p className='textoCartao'>O Rotary é uma organização internacional de voluntários, presente em diversos países, que atua em projetos sociais, humanitários e educacionais. Ele apoia iniciativas que melhoram comunidades locais, incluindo campanhas de arrecadação de alimentos e produtos essenciais.
</p>
          </div>

          <div className="cartaoDoacao" >
            <h3 className='titulosCartao'>Avulsos</h3>
            <p className='textoCartao'> O termo “avulso” refere-se a doações feitas de maneira independente, sem necessidade de vínculo ou inscrição em uma campanha contínua. A pessoa pode doar um item ou uma quantidade pontual, de acordo com sua disponibilidade.</p>
          </div>
          
        </div>
        <button className='btnSaibaMais' onClick={pageInfo}> Saiba Mais</button>
      </div>


    </div>
  );
}
export default Doacao;
