import React from "react";
import './InfoDoacao.css';
import projeto from '../../assets/img/projetos.png'
import parceiros from '../../assets/img/parceiro.png'
import instituicao from '../../assets/img/banco.png'

function InfoDoacao() {
  return(
    <div className="info-doacao-container" id="info-doacao">
      <h1 className="info-doacao-title">Doações</h1>

      <div className="tabela-doacao-content">
        <div className="tabela-doacao-titles">
          <p className="tabela-doacao-texts">Alimento</p>
          <p className="tabela-doacao-texts">Bebidas</p>
          <p className="tabela-doacao-texts">Itens de Higiene</p>
          <p className="tabela-doacao-texts">Ração</p>
        </div>

        <div className="tabela-doacao-valores">
          <p className="tabela-doacao-valor">0</p>
          <p className="tabela-doacao-valor">0</p>
          <p className="tabela-doacao-valor">0</p>
          <p className="tabela-doacao-valor">0</p>
          <p className="tabela-doacao-valor">0</p>
          <p className="tabela-doacao-valor">0</p>
          <p className="tabela-doacao-valor">0</p>
          <p className="tabela-doacao-valor">0</p>
          <p className="tabela-doacao-valor">0</p>
        </div>

          <div className="tabela-doacao-infos">
            <p className="tabela-doacao-infos-text">Tonelada</p>
            <p className="tabela-doacao-infos-text">Miligrama</p>
            <p className="tabela-doacao-infos-text">Kilograma</p>
            <p className="tabela-doacao-infos-text">Grama</p>
          </div>

        
      </div>

      <h2 className="info-relatorio-title">RELATÓRIO DE RESPONSABILIDADE SOCIAL 2023</h2>

      <h4 className="info-relatorio-subtitle">Terminamos um ano de muito trabalho e conquistas em que nossa atividade social cresceu e incorporou novos públicos à lista de assistidos.</h4>

      <div className="info-relatorio-cards">

        <div className="info-relatorio-card">
          <img src={parceiros} alt="" className="info-relatorio-card-img" />

          <h3 className="info-relatorio-card-title">Parceiros</h3>

          <p className="info-relatorio-card-text">Firmamos parceria com o Rotary Club Ponte Estaiada para participação mensal na Ação Solidária GPA (Grupo Pão de Açúcar), arrecadando alimentos que complementam as cestas básicas de nosso Drive Thru Solidário mensal, destinadas às famílias cadastradas na Comunidade da Vila Prudente em parceria com nossa congregante Entidade Espírita Irmã Tereza.</p>

          
        </div>


        <div className="info-relatorio-card card-centro"> 
          <img src={projeto} alt="" className="info-relatorio-card-img" />

          <h3 className="info-relatorio-card-title">Projetos</h3>

          <p className="info-relatorio-card-text">O projeto Biscoito do Amor inclui, entre os necessitados, o atendimento a um grupo de dependentes químicos alojados em praça da zona sul, disponibilizando mais de 800 kg de alimentos prontos para consumo, além de kits de higiene para aumentar a situação sanitária desta população.</p>

          <p className="info-relatorio-card-text">O Grupo Socorrista Francisco de Assis permanece empenhado em colaborar para a construção de uma sociedade mais justa e convívio dos trabalhadores, voluntários, alunos e assistidos para atuarem conosco neste objetivo.</p>
        </div>


        <div className="info-relatorio-card">
          <img src={instituicao} alt="" className="info-relatorio-card-img" />

          <h3 className="info-relatorio-card-title">Instituição</h3>

          <p className="info-relatorio-card-text">INSTITUIÇÕES BENEFICIADAS
          Entidade Espírita Irmã Tereza – beneficia 83 famílias dirigidas por mulheres. Lar para Idosos Alexandre Dahruj - atende a 50 idosos. SACIACS - Serviço de Assistência para Crianças e Adolescentes Carentes, 40 atendidos. Grupo Mãos em Ação - SP - Movimento Missão Belém - atende dependentes químicos e pessoas carentes nas zonas de risco.</p>

          <p className="info-relatorio-card-text">INSTITUIÇÕES APOIADAS
          Pequeno Príncipe - acolhe e orienta crianças carentes e suas famílias. Lar da Lili - cuida de felinos em situação de abandono e resgata cães de rua. Esbelândia - nova parceria que apoia mulheres em situação de vulnerabilidade.</p>

          <p className="info-relatorio-card-text">CONTRIBUIÇÃO ESPECIAL
            Destaque para a contribuição da Volvo do Brasil via ONG Gerando Falcões, que enviou doações de alimentos para o nosso Drive Thru de Solidariedade.</p>
        </div>
      </div>
    </div>
  )
}

export default InfoDoacao;