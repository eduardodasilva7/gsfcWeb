import React from 'react';
import '../eventos/eventos.css';
import { Link } from 'react-router-dom';
import BazarPechincha from './assets/bazardapechincha.png1.png';
import BazarMae from './assets/bazardiadasmaes.jpg';
import Almoco from './assets/Almoço-em-Família.png';
import BazarNatal from './assets/bazardenatal.PNG1.PNG';
import BiscoitoAmor from './assets/biscoitodoamor.PNG';
import DriveThru from './assets/drive.PNG2.jpg';
import Menu from '../menu/Menu'

const Eventos = () => {
  return (
    <div lang="pt-BR">
      <Menu />

      <main>
        <h1 className="titulo-principal-container">Eventos</h1>
        <p className="subtitulo">Saiba tudo sobre nossos eventos</p>

        <div className="main-eventos">
          <div>
            <div className="eventos">
              <div className="imagem-eventos-container">
                <img
                  src={BazarPechincha}
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
                  src={BazarMae}
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
                  src={Almoco}
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
                  src={BazarNatal}
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
                  src={BiscoitoAmor}
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
                  src={DriveThru}
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
