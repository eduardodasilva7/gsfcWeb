 import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import imgEx from '../../assets/img/imgExemplo.png';
import imagemMaps from '../../assets/img/imagemMaps.png';

function Home() {
  return (
    <div className="home-container" id='home'>
        <div className="esquerda">
          
          <h3 className='subtitle'>Sobre a ONG</h3>
          <h2 className='title'>História e Fundação do Grupo Socorrista Francisco de Assis</h2>
          <p className='text textApresentation'>Fundado em 1990, o Grupo Socorrista Francisco de Assis nasceu com o propósito de estudar e praticar o Espiritismo, promovendo a caridade sem distinções. Ao longo dos anos, mudou de endereço até chegar à sede atual, sempre guiado por amor, fé e dedicação, como a da inesquecível Inês Assumpção.</p>
          <a href="" className='btn btn-info'>Saiba Mais</a>
          <img src={imgEx} alt="" className='img imgONG' />
        </div>
      
      
        <div className="direita">
          <h2 className='title'>Como chegar na nossa ONG</h2>
          <a href="https://bit.ly/460ZEAa" target="_blank"><img src={imagemMaps} alt="" className='maps' /></a>
          <p className='text textLogradouro'>Rua Diogo de Quadros, 363 - Chácara Santo António/Brooklin Santo Amaro - São Paulo - SP 04710-010</p>
          <a href="https://bit.ly/460ZEAa" className='btnMaps' target="_blank">
            <FontAwesomeIcon icon={faMapLocationDot} />
            Ver no Maps
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
        

    </div>
  );
}
export default Home;