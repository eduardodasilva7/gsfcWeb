import React from 'react';
import '../eventos/bazarmae.css'; // importa o CSS específico do Bazar
import Doces from './assets/doces.png'

const BazarDaPechincha = () => {
  return (
    <div lang="pt-BR">
      {/* Cabeçalho */}
      <header className="header-bazar">
        <a href="/eventos" className="voltar-btn">← Voltar</a>
        <h1 className="titulo-bazar-container">Biscoito do Amor</h1>
        <p className="subtitulo">Doce gesto que alimenta corações</p>
      </header>

      {/* Banner */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${Doces})` }}
      >
      </div>

      {/* Seção Sobre */}
      <section className="sobre">
        <h2>Sobre a Campanha Biscoito do Amor</h2>
         <p>O <strong>Biscoito do Amor</strong> é uma campanha solidária dedicada a levar alegria e carinho para crianças em situação de vulnerabilidade. Nesta ação, arrecadamos <strong>doces, bolachas, chocolates e guloseimas</strong> que são distribuídos em visitas e eventos especiais. 🍬</p>
        <p>
        Cada doação é uma forma doce de demonstrar amor e esperança! Participe e ajude a encher de sorrisos o dia das nossas crianças. 💕
        </p>

        {/* Informações rápidas */}
        <div className="info">
          <div>
            <h3>📅  Período de arrecadação</h3>
            <p>10 a 25 de Junho de 2025</p>
          </div>
          <div>
            <h3>📍 Pontos de coleta</h3>
            <p>Rua Diogo de Quadros 363</p>
          </div>
          <div>
            <h3>🎁 O que doar</h3>
            <p>Doces, bolachas, chocolates,balas etc...</p>
          </div>
          <div>
           <h3>💬 Destino</h3>
            <p>Distribuição em ações com crianças carentes</p>
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
