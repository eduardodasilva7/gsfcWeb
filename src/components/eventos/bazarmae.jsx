import React from 'react';
import '../eventos/bazarmae.css'; // importa o CSS específico do Bazar

const BazarDaPechincha = () => {
  return (
    <div lang="pt-BR">
      {/* Cabeçalho */}
      <header className="header-bazar">
        <a href="/eventos" className="voltar-btn">← Voltar</a>
        <h1 className="titulo-bazar-container">Bazar de Dia das Mães</h1>
        <p className="subtitulo">Presentes com amor e solidariedade</p>
      </header>

      {/* Banner */}
      <div
        className="banner"
        style={{ backgroundImage: "url('/src/components/eventos/assets/bazar-mae.jpg')" }}
      >
      </div>

      {/* Seção Sobre */}
      <section className="sobre">
        <h2>Sobre o Bazar de Dia das Mães</h2>
        <p>
          O <strong>Bazar de Dia das Mães</strong> é uma edição especial dedicada a celebrar o amor e o carinho das mães. Aqui, cada presente carrega afeto e solidariedade — tudo a preços acessíveis!
        </p>
        <p>
        Com o valor arrecadado, ajudamos famílias em necessidade e fortalecemos projetos comunitários. Venha fazer parte dessa corrente de amor! 🌸
        </p>

        {/* Informações rápidas */}
        <div className="info">
          <div>
            <h3>📅 Data</h3>
            <p>05/2026</p>
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
           <h3>🎁 Entrada</h3>
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
