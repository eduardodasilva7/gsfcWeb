import React from 'react';
import '../eventos/bazarmae.css'; // importa o CSS específico do Bazar

const BazarDaPechincha = () => {
  return (
    <div lang="pt-BR">
      {/* Cabeçalho */}
      <header className="header-bazar">
        <a href="/eventos" className="voltar-btn">← Voltar</a>
        <h1 className="titulo-bazar-container">Bazar de Natal</h1>
        <p className="subtitulo">Espalhando alegria e solidariedade neste Natal</p>
      </header>

      {/* Banner */}
      <div
        className="banner"
        style={{ backgroundImage: "url('/src/components/eventos/assets/Natal.png')" }}
      >
      </div>

      {/* Seção Sobre */}
      <section className="sobre">
        <h2>Sobre o Bazar de Natal</h2>
        <p>
          O <strong>Bazar de Natal</strong> é uma das ações mais queridas da ONG! Um evento que reúne produtos natalinos, presentes e artesanatos, todos vendidos a preços simbólicos.
        </p>
        <p>
        O valor arrecadado é totalmente revertido para ajudar famílias carentes durante o fim de ano, tornando o Natal de muitas pessoas mais feliz e cheio de esperança. 🎁
        </p>

        {/* Informações rápidas */}
        <div className="info">
          <div>
            <h3>📅 Data</h3>
            <p>#</p>
          </div>
          <div>
            <h3>📍 Local</h3>
            <p>Rua Diogo de Quadros 363</p>
          </div>
          <div>
            <h3>🕒 Horário</h3>
            <p>Das 10 ás 16</p>
          </div>
          <div>
           <h3>🎄 Entrada</h3>
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
