import './Doacao.css'


function Doacao() {
  return (
    <div className="doacao-container">
      <h1>Doações</h1>
      <div className='cards' >
        <div className='grid-card'>

          <div className="row linha1">
            <div className="col col-xl-6" style={{backgroundColor: '#A8E6CF'}}>
              <h3>Jeitos de Doar</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta provident dolore hic sunt accusamus natus voluptas ex excepturi placeat unde officiis exercitationem explicabo, fugit dolorem porro error, atque beatae nostrum?</p>
            </div>
            <div className="col col-xxl-6" style={{backgroundColor: '#B5EAD7'}}>
              <h3>Texto</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum sapiente nostrum laboriosam dicta accusantium officia obcaecati sit, qui atque animi non expedita perferendis cum aspernatur ducimus unde beatae modi.</p>
              <a href="">Saiba Mais</a>
            </div>
          </div>

          <div className="row linha2">
            <div className="col col-xl-4" style={{backgroundColor: '#66CDAA'}}>
              <h3>Rotary</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio provident adipisci distinctio, accusamus recusandae omnis eos facilis sed, nobis dolorum vero sequi laudantium sapiente. Placeat vitae sint itaque atque.</p>
            </div>
            <div className="col col-xl-4" style={{backgroundColor: '#45B29D'}}>
              <h3>Avulsos</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur in est esse harum consequatur excepturi ullam maxime quidem fuga soluta, ratione eaque recusandae voluptatum ducimus, error quas totam. Pariatur!</p>
            </div>
            <div className="col col-xl-4" style={{backgroundColor: '#A3F4D8'}}>
              <h3>Drive-Thru</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolorem nihil facilis eum delectus esse ratione reprehenderit repellendus eligendi, assumenda pariatur corporis eos consequatur aut blanditiis corrupti, consectetur quam. Facilis?</p>
            </div>
          </div>

          <div className='row linha3'>
            <div className="col col-xl-12" style={{backgroundColor: '#A8E6CF'}}>
              <h3>Contato</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default Doacao;
