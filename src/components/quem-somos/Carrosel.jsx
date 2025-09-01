import './QuemSomos.css'
import img from '../../assets/img/imgExemplo.png'
import img2 from '../../assets/img/logoP.png'
import img3 from '../../assets/img/logoG.png'

function Carrosel() {
  return (
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src={img} alt="" className="d-block w-100"/>
        </div>
        <div className="carousel-item" data-bs-interval="20000">
          <img src={img2} alt="" className="d-block w-100"/>
        </div>
        <div className="carousel-item">
          <img src={img3} alt="" className="d-block w-100"/>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
    </div>
  )
}

export default Carrosel;
