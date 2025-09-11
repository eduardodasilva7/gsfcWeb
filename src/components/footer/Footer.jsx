import './Footer.css';
import logo from '../../assets/img/logoP-remove.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="footer">
      <div className="direitos">
        <h1>GSFA</h1>
        <img src={logo} alt="Logo" className="logo-footer" />
        <p>&copy; 2025 TDS01. Todos os direitos reservados.</p>
      </div>

      <div className="sede">
        <h3>Sede</h3>
        <p>Rua Diogo de Quadros, 363 - Chácara Santo António/Brooklin Santo Amaro -São Paulo - SP 04710-010</p>
      </div>

      <div className="perguntas">
        <h3>Perguntas</h3>
        <a href="" className='icones'>
          <FontAwesomeIcon icon={faCircleQuestion} className='icon' />
          Fale Conosco
        </a> 
      </div>

      <div className="redes-sociais">
        <h3>Redes Sociais</h3>
        <a href="https://www.instagram.com/gruposocorristafrancisco/" target='_blank' >
          <FontAwesomeIcon icon={faInstagram} className='icon' /> 
          Instagram
        </a>
        <a href="https://www.facebook.com/gruposocorristafranciscodeassis/?locale=pt_BR" className='icones' target='_blank'>
          <FontAwesomeIcon icon={faFacebook} className='icon' />
          Facebook 
        </a>
        <a href="" >
          <FontAwesomeIcon icon={faEnvelope} className='icon' />
          Email
        </a>
      </div>
    </footer>
  );
}

export default Footer;