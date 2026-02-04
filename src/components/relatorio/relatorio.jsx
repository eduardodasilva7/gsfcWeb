import React from 'react';
import './relatorio.css';
import Menu from '../menu/Menu';
import { Link } from "react-router-dom";
import fundo6 from '../../assets/img/fundo6.jpg'
 
 
 
function Relatorio() {
  return (
    <div>
      <Menu />
 
      <main className="relatorio-container">
        <section className="relatorio-header">
 
          <h1>Relatório</h1>
          <p>Acompanhe nossos dados</p>
 
          <section className="artigos-grid">
 
            <div className="artigo-card">
              <img src={fundo6} alt="anos" />
              <h3>Relatório 2025</h3>
              <Link to="/artigos/amor">
                <button>Saiba mais</button>
              </Link>
            </div>
 
            <div className="artigo-card">
              <img src={fundo6} alt="juventude" />
              <h3>Relatório 2024</h3>
              <Link to="/artigos/juventude">
                <button>Saiba mais</button>
              </Link>
            </div>
 
            <div className="artigo-card">
              <img src={fundo6} alt="juventude" />
              <h3>Relatório 2023</h3>
              <Link to="/artigos/juventude">
                <button>Saiba mais</button>
              </Link>
            </div>
            <div className="artigo-card">
              <img src={fundo6} alt="juventude" />
              <h3>Relatório 2022</h3>
              <Link to="/artigos/juventude">
                <button>Saiba mais</button>
              </Link>
            </div>
            <div className="artigo-card">
              <img src={fundo6} alt="juventude" />
              <h3>Relatório 2021</h3>
              <Link to="/artigos/juventude">
                <button>Saiba mais</button>
              </Link>
            </div>
            <div className="artigo-card">
              <img src={fundo6} alt="juventude" />
              <h3>Relatório 2020</h3>
              <Link to="/artigos/juventude">
                <button>Saiba mais</button>
              </Link>
            </div>
 
          </section>
        </section>
      </main>
    </div>
  );
}
 
export default Relatorio;
 
 