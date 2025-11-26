import React from 'react';
import './relatorio.css';
import Menu from '../menu/Menu';

function Relatorio() {
  return (
    <div>
      <Menu />

      <main className="relatorio-container">
        <section className="relatorio-header">
          <h1>Relatório</h1>
          <p>Acompanhe nossos dados</p>
        </section>
      </main>
    </div>
  );
}

export default Relatorio;


