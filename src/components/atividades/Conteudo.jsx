import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./conteudo.css";
import Palestras from "../../assets/img/Palestras.jpg";
import Aprendizes from "../../assets/img/Aprendizes.jpg";
import Espiritual from "../../assets/img/Espiritual.jpg";
import Gestantes from "../../assets/img/Gestantes.png";
import Juventude from "../../assets/img/Juventude.jpg";
import Eventos from "../../assets/img/Eventos.jpg";

function Conteudo() {

  useEffect(() => {
    const handleScrollRequest = () => {
      const hash = window.location.hash;

      if (hash === "#atividades") {
        setTimeout(() => {
          const sec = document.getElementById("atividades");
          if (sec) {
            sec.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }, 100);
      }
    };

    window.addEventListener("hashchange", handleScrollRequest);

   
    handleScrollRequest();

    return () => {
      window.removeEventListener("hashchange", handleScrollRequest);
    };
  }, []);

  const conteudos = [
    {
      titulo: "Gestantes e Crianças",
      descricao: "Terça-feira às 14:45h",
      imagem: Gestantes,
      texto:
        "O atendimento a gestantes e crianças até 8 anos objetiva apoiar as futuras mamães a manterem o equilíbrio emocional, adequado a esta fase tão importante de suas vidas, o equilíbrio espiritual e físico de seus filhos.",
    },
    {
      titulo: "Assistência Espiritual",
      descricao: "Segunda e Terça às 19:45h — Quinta às 14:45h",
      imagem: Espiritual,
      texto:
        "Por intermédio de entrevista pessoal e privada, procuramos, junto com o assistido, identificar suas inquietudes, necessidades e dificuldades, e propomos uma intervenção conjunta, onde o assistido frequenta nossas palestras públicas e participa do serviço de assistência espiritual objetivando reencontrar o equilíbrio individual.",
    },
    {
      titulo: "Escola de Aprendizes",
      descricao: "Quarta-feira às 14:00h e 19:30h",
      imagem: Aprendizes,
      texto:
        "A Escola de Aprendizes do Evangelho propicia o estudo da Doutrina Espírita em suas três dimensões: religiosa, filosófica e científica...",
    },
    {
      titulo: "Palestras Públicas",
      descricao: "Segunda e Terça às 19:45h — Quinta às 14:45h",
      imagem: Palestras,
      texto:
        "Em nossas palestras públicas apresentamos temas evangélicos destinados a promover a autoreflexão dos participantes...",
    },
    {
      titulo: "Juventude",
      descricao: "Quinta-feira às 19:45h",
      imagem: Juventude,
      texto:
        "Por meio de atividades lúdicas, palestras, artesanato e passes, a ética e moral cristã é trabalhada com os jovens...",
    },
    {
      titulo: "Eventos",
      imagem: Eventos,
      texto:
        "Nossos eventos periódicos objetivam o congraçamento entre os trabalhadores e assistidos da casa...",
    },
  ];

  return (
    <div className="atividades container my-5" id="atividades">
      <h1 className="text-center mb-4">Atividades</h1>

      <div
        id="atividadesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicadores */}
        <div className="carousel-indicators">
          {conteudos.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#atividadesCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {conteudos.map((item, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src={item.imagem}
                  className="d-block w-75 rounded mb-4"
                  alt={item.titulo}
                  style={{ maxHeight: "350px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-block text-dark bg-light p-4 rounded shadow-sm">
                  <h3>{item.titulo}</h3>
                  {item.descricao && (
                    <p className="fw-semibold">{item.descricao}</p>
                  )}
                  <p>{item.texto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#atividadesCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#atividadesCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-circle"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>
  );
}

export default Conteudo;