import React from 'react';
import '../eventos/eventos.css';
import { Link } from 'react-router-dom';

const Eventos = () => {
  return (
    <div lang="pt-BR">
      <header className="menu-principal">
        <a href="/" className="voltar-btn">← Voltar</a>
      </header>

      <main>
        <h1 className="titulo-principal-container">Eventos</h1>
        <p className="subtitulo">Saiba tudo sobre nossos eventos</p>

        <div className="main-eventos">
          <div>
            <div className="eventos">
              <div className="imagem-eventos-container">
                <img
                  src="/src/components/eventos/assets/bazardapechincha.png1.png"
                  alt="imagem bazar da Pechincha"
                />
              </div>
              <div className="titulo-eventos-container">
                <h3 className="titulo-eventos">Bazar da Pechincha</h3>
              </div>
              <Link to="/eventos/bazar">
                <button className="saber-mais">Saiba mais</button>
              </Link>
            </div>

            <div className="eventos">
              <div className="imagem-eventos-container">
                <img
                  src="/src/components/eventos/assets/bazardiadasmaes.jpg"
                  alt="Bazar dia das mães"
                />
              </div>
              <div className="titulo-eventos-container">
                <h3 className="titulo-eventos">Bazar de Dia das Mães</h3>
              </div>
              <Link to="/eventos/bazarmae">
                <button className="saber-mais">Saiba mais</button>
              </Link>
            </div>

            <div className="eventos">
              <div className="imagem-eventos-container">
                <img
                  src="/src/components/eventos/assets/Almoço-em-Família.png"
                  alt="Almoço"
                />
              </div>
              <div className="titulo-eventos-container">
                <h3 className="titulo-eventos">Almoço</h3>
              </div>
              <Link to="/eventos/almoco">
                <button className="saber-mais">Saiba mais</button>
              </Link>
            </div>
          </div>

          <div>
            <div className="eventos">
              <div className="imagem-eventos-container">
                <img
                  src="/src/components/eventos/assets/bazardenatal.PNG1.PNG"
                  alt="Bazar de Natal"
                />
              </div>
              <div className="titulo-eventos-container">
                <h3 className="titulo-eventos">Bazar de Natal</h3>
              </div>
              <Link to="/eventos/bazarnatal">
                <button className="saber-mais">Saiba mais</button>
              </Link>
            </div>

            <div className="eventos">
              <div className="imagem-eventos-container">
                <img
                  src="/src/components/eventos/assets/biscoitodoamor.PNG"
                  alt="Biscoito do Amor"
                />
              </div>
              <div className="titulo-eventos-container">
                <h3 className="titulo-eventos">Biscoito do Amor</h3>
              </div>
              <Link to="/eventos/biscoitodoamor">
                <button className="saber-mais">Saiba mais</button>
              </Link>
            </div>

            <div className="eventos">
              <div className="imagem-eventos-container">
                <img
                  src="/src/components/eventos/assets/drive.PNG2.jpg"
                  alt="Drive Thru"
                />
              </div>
              <div className="titulo-eventos-container">
                <h3 className="titulo-eventos">Drive-Thru</h3>
              </div>
              <Link to="/eventos/drivethru">
                <button className="saber-mais">Saiba mais</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Eventos;
