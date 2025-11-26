import './QuemSomos.css';
import img from '../../assets/img/imgExemplo.png'
import img2 from '../../assets/img/logoP.png'
import img3 from '../../assets/img/logoG.png'

function Carrosel() {

  

  return (
    <div className="carouselQS">
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner carouselQS-imgs ">
          <div className="carousel-item active">
            <img src={img} alt="" className="carouselQS-img" />
          </div>
          <div className="carousel-item">
            <img src={img} alt="" className="carouselQS-img" />
          </div>
          <div className="carousel-item">
            <img src={img} alt="" className="carouselQS-img" />
          </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
        </div>
    </div>


    
  )
}

export default Carrosel;
