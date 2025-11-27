import React from 'react';
import '../eventos/bazarmae.css'; // importa o CSS específico do Bazar

const BazarDaPechincha = () => {
  return (
    <div lang="pt-BR">
      {/* Cabeçalho */}
      <header className="header-bazar">
        <a href="/eventos" className="voltar-btn">← Voltar</a>
        <h1 className="titulo-bazar-container">Bazar da Pechincha</h1>
        <p className="subtitulo">Descubra, doe e faça o bem</p>
      </header>

      {/* Banner */}
      <div
        className="banner"
        style={{ backgroundImage: "url('/src/components/eventos/assets/Marrom Foto Bazar Instagram Post.png')" }}
      >
      </div>

      {/* Seção Sobre */}
      <section className="sobre">
        <h2>Sobre o Bazar</h2>
        <p>
          O <strong>Bazar da Pechincha</strong> é um evento beneficente que reúne roupas,
          acessórios, livros e itens de decoração a preços simbólicos. Todo o valor
          arrecadado é destinado a ajudar famílias em necessidade.
        </p>
        <p>
          Participe, traga suas doações e aproveite os achadinhos incríveis enquanto faz o bem!
        </p>

        {/* Informações rápidas */}
        <div className="info">
          <div>
            <h3>📅 Data</h3>
            <p>Acontece de sexta-feira a cada 15 dias.</p>
          </div>
          <div>
            <h3>📍 Local</h3>
            <p>Rua Diogo de Quadros 363</p>
          </div>
          <div>
            <h3>🕒 Horário</h3>
            <p>Das 9h às 18h</p>
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
