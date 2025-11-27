import React from 'react';
import './LuzeAmor.css';
import Menu from '../menu/Menu';
 import amorImg from '../../assets/img/luzeamor.jpg';
 import jovensImg from '../../assets/img/jovens.jpg';

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
            <button>Saiba mais</button>
          </div>

          <div className="artigo-card">
            <img
              src={jovensImg}
              alt="Juventude"
            />
            <h3>Juventude</h3>
            <button>Saiba mais</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LuzeAmor;
