import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Section02.css";
import next from "../assets/direita.svg";
import prev from "../assets/esquerda.svg";

export default function Section02() {
  const [activeIndex, setActiveIndex] = useState(0); // Estado para o índice ativo
  const cardsData = [
    {
      title: "Musculação",
      description: "Descrição do Card ",
      image: "https://via.placeholder.com/150?text=Card+1",
    },
    {
      title: "Jump",
      description: "Descrição do Card 2",
      image: "https://via.placeholder.com/150?text=Card+2",
    },
    {
      title: "G.A.P",
      description: "Descrição do Card 3",
      image: "https://via.placeholder.com/150?text=Card+3",
    },
    {
      title: "Pilates",
      description: "Descrição do Card 4",
      image: "https://via.placeholder.com/150?text=Card+4",
    },
    {
      title: "zumba",
      description: "Descrição do Card 4",
      image: "https://via.placeholder.com/150?text=Card+5",
    },
    {
      title: "Capoeira",
      description: "Descrição do Card 4",
      image: "https://via.placeholder.com/150?text=Card+6",
    },
    {
      title: "Hapkido ",
      description: "Descrição do Card 4",
      image: "https://via.placeholder.com/150?text=Card+7",
    },
    {
      title: "Ballet",
      description: "Descrição do Card 4",
      image: "https://via.placeholder.com/150?text=Card+8",
    },
  ];

  const totalCards = cardsData.length;

  // Função para ir para o próximo slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  // Função para ir para o slide anterior
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div
        className="container"
        style={{
          height: "200px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between", // Alinha título e botões em extremos opostos
          alignItems: "center", // Alinha verticalmente
          width: "100%",
        }}
      >
        <h1
          className="txt-fitness"
          style={{
            color: "gray",
            opacity: "11%",
            fontWeight: "700",
            fontFamily: "Urbanist, serif",
            fontSize: "142px",

            position: "absolute",
            zIndex: "-1",
          }}
        >
          Academia
        </h1>
        <h1 style={{ color: "#fff" }}>Explore nossa unidade</h1>

        <div
          style={{
            display: "flex",
            gap: "10px", // Espaço entre os botões
          }}
        >
          <button
            className="carousel-control-prev btn-card"
            type="button"
            data-bs-target="#carouselCards"
            data-bs-slide="prev"
            onClick={prevSlide}
            style={{
              position: "relative",
              zIndex: "1",
              background: "none",
              border: "2px solid #fff",
              borderRadius: "50%",
              padding: "10px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={prev} alt="" style={{ filter: "invert(1)" }} />
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>

            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next btn-card"
            type="button"
            data-bs-target="#carouselCards"
            data-bs-slide="next"
            onClick={nextSlide}
            style={{
              position: "relative",
              zIndex: "1",
              background: "none",
              border: "2px solid #fff",
              borderRadius: "50%",
              padding: "10px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={next}
              alt=""
              style={{
                filter: "invert(1)",
                width: "30px",
                height: "30px",
              }}
            />
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
      <div
        id="carouselCards"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          maxWidth: "100%",
          margin: "auto",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <div
          className=" container carousel-inner"
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap", // Adiciona a quebra de linha
            justifyContent: "space-between",
          }}
        >
          <div
            className=" carousel-item active mx-5"
            style={{
              display: "flex",
              flexWrap: "wrap", // Permite que os cards quebrem para uma nova linha
              justifyContent: "space-evenly", // Distribui os cards igualmente
              gap: "10px", // Menor distância entre os cards
            }}
          >
            {cardsData.map((card, index) => (
              <div
                key={index}
                className={`card ${activeIndex === index ? "active-card" : ""}`} // Aplica a classe se o card for ativo
                style={{ width: "240px", height: "320px" }}
              >
                <img
                  src={card.image}
                  className="card-img-top img-fluid"
                  alt={`Card ${index + 1}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
