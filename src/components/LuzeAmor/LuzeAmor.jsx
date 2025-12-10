import React from 'react';
import './luzeamor.css';
import Menu from '../menu/Menu';
 import amorImg from '../../assets/img/luzeamor.jpg';
 import jovensImg from '../../assets/img/jovens.jpg';
 import { Link } from 'react-router-dom';

function LuzeAmor() {
  return (
    <div>
      <Menu />
      <main className="luzeamor-container">
        <section className="luzeamor-header">
          <h1>Artigos</h1>
          <p>Leia nossos artigos</p>
        </section>
        <section className="artigos-grid">
          <div className="artigo-card">
            <img
              src={amorImg}
              alt="Amor e Luz"
            />
            <h3>Amor e Luz</h3>
            <Link to="luzeamor"> 
            <button>Saiba mais</button>
           </Link>
            
          </div>

          <div className="artigo-card">
            <img
              src={jovensImg}
              alt="Juventude"
            />
            <h3>Juventude</h3>
            <Link to="juventude">
            <button>Saiba mais</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LuzeAmor;
