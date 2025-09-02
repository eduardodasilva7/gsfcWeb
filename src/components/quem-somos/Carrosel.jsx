import './QuemSomos.css';
import img from '../../assets/img/imgExemplo.png'
import img2 from '../../assets/img/logoP.png'
import img3 from '../../assets/img/logoG.png'

function Carrosel() {

  return (
    <div className="carousel" >
      <div className="cartao" style={{backgroundImage: `url(${img})`}}></div>
      <div className="cartao" style={{backgroundImage: `url(${img2})`}}></div>
      <div className="cartao" style={{backgroundImage: `url(${img3})`}}></div>
      <div className="cartao" style={{backgroundImage: `url(${img})`}}></div>
      
      

    </div> 
  )
}

export default Carrosel;
