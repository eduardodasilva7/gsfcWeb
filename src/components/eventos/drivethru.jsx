import React from 'react';
import '../eventos/bazarmae.css'; // importa o CSS específico do Bazar
import Drive from './assets/drivethru.jpg'

const BazarDaPechincha = () => {
  return (
    <div lang="pt-BR">
      {/* Cabeçalho */}
      <header className="header-bazar">
        <a href="/eventos" className="voltar-btn">← Voltar</a>
        <h1 className="titulo-bazar-container">Drive Thru Solidário</h1>
        <p className="subtitulo">Recolhendo esperança para quem mais precisa</p>
      </header>

      {/* Banner */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${Drive})` }}
      >
      </div>

      {/* Seção Sobre */}
      <section className="sobre">
        <h2>Sobre o Drive Thru Solidário</h2>
        <p>
        O <strong>Drive Thru Solidário</strong> é uma iniciativa da ONG para recolher doações de alimentos diretamente do <strong>Pão de Açúcar</strong>. As doações são levadas até a ONG, onde os voluntários separam e montam <strong>cestas básicas</strong> destinadas a famílias em situação de vulnerabilidade. 🛒</p>
          <p>É uma forma prática e segura de contribuir — basta doar seus alimentos não perecíveis e ajudar a encher muitas mesas com solidariedade. 🙏</p>
        {/* Informações rápidas */}
        <div className="info">
          <div>
            <h3>📅  Data da ação</h3>
            <p>10 de Agosto de 2025</p>
          </div>
          <div>
            <h3>📍 Local de coleta</h3>
            <p>Pão de Açúcar - Unidade Central</p>
          </div>
          <div>
            <h3>🕒 Horário</h3>
            <p>Das 9h às 14h</p>
          </div>
          <div>
           <h3>🎁 O que doar</h3>
            <p>Arroz, feijão, óleo, macarrão, farinha e alimentos não perecíveis</p>
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
