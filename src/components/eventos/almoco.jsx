import React from 'react';
import '../eventos/bazarmae.css'; // importa o CSS específico do Bazar
import AlmocoBanner from './assets/Almoço-em-Família.png';

const BazarDaPechincha = () => {
  return (
    <div lang="pt-BR">
      {/* Cabeçalho */}
      <header className="header-bazar">
        <a href="/eventos" className="voltar-btn">← Voltar</a>
        <h1 className="titulo-bazar-container">Almoço Comunitário</h1>
        <p className="subtitulo">Um momento de união, gratidão e amor ao próximo</p>
      </header>

      {/* Banner */}
      {/**/}
      <div
        className="banner"
        style={{ backgroundImage: `url(${AlmocoBanner})` }}
      >
      </div>

      {/* Seção Sobre */}
      <section className="sobre">
        <h2>Saiba mais sobre o nosso almoço especial!</h2>
       <p>O <strong>Almoço Comunitário</strong> é um evento realizado duas vezes por ano, totalmente gratuito, voltado para os voluntários da ONG e para qualquer pessoa da comunidade que queira participar.</p>
         <p>Mais do que uma refeição, é um momento de comunhão, gratidão e fortalecimento dos laços entre todos os participantes. Cada encontro é uma celebração da solidariedade e da amizade!</p>
        {/* Informações rápidas */}
        <div className="info">
          <div>
            <h3>📅  Data</h3>
            <p>#</p>
          </div>
          <div>
            <h3>📍 Local</h3>
            <p>Rua Diogo de Quadros 363</p>
          </div>
          <div>
            <h3>🕒 Horário</h3>
            <p>#</p>
          </div>
          <div>
           <h3>🍽️ Entrada</h3>
            <p>Gratuita</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="footer-bazar">
        <p>
          💬 Tem dúvidas? <a href="/formulario">Entre em contato</a>
        </p>
        <p>© 2025 Bazar da Pechincha | Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default BazarDaPechincha;
