import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Section02.css";
import barra from "../assets/barra.png";
import jump from "../assets/jump.png";
import gap from "../assets/gap.png";
import pilates from "../assets/pilates.png";
import zumba from "../assets/zumba.png";
import capoeira from "../assets/capoeira.png";
import hapkido from "../assets/hapkido.png";
import ballet from "../assets/ballet.png";
export default function Section02() {
  const cardsData = [
    {
      title: "Musculação",
      description:
        "Fortaleça seus músculos e melhore sua resistência com equipamentos modernos e acompanhamento personalizado.",
      image: barra,
    },
    {
      title: "Jump",
      description:
        "Aulas dinâmicas de Jump para melhorar a resistência cardiovascular e fortalecer as pernas. Exercícios energéticos com trampolins para um treino divertido e eficaz.",
      image: jump,
    },
    {
      title: "G.A.P",
      description:
        "Treinamento focado no fortalecimento de glúteos, abdômen e pernas. Melhore a postura, a força e a resistência muscular com exercícios direcionados.",
      image: gap,
    },
    {
      title: "Pilates",
      description:
        "Melhore a flexibilidade, a força e o equilíbrio com Pilates. Exercícios suaves e controlados que trabalham o core e promovem o bem-estar físico e mental.",
      image: pilates,
    },
    {
      title: "Zumba",
      description:
        "Dançar e se divertir enquanto queima calorias com aulas de Zumba. Estilos de dança animados, combinados com música envolvente para uma experiência energética e motivante.",
      image: zumba,
    },
    {
      title: "Capoeira",
      description:
        "A arte marcial brasileira que combina dança, música e acrobacias. Melhore a coordenação motora, agilidade e resistência enquanto aprende os movimentos tradicionais da capoeira.",
      image: capoeira,
    },
    {
      title: "Hapkido",
      description:
        "Uma arte marcial coreana que foca em técnicas de defesa pessoal, acrobacias e controle do corpo. Aulas de Hapkido ajudam no fortalecimento físico e no desenvolvimento de disciplina mental.",
      image: hapkido,
    },
    {
      title: "Ballet",
      description:
        "Aprimore sua postura e flexibilidade com aulas de ballet. Trabalhe força, equilíbrio e coordenação através de movimentos graciosos e técnicos, próprios dessa dança clássica.",
      image: ballet,
    },
  ];

  return (
    <>
      <div
        className="container"
        style={{
          height: "200px",
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card mb-4"
            style={{
              width: "300px",
              backgroundColor: "#0D0D0D",
              cursor: "pointer",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <img
              src={card.image}
              style={{
                height: "80px",
                width: "80px",
                filter: "invert(1)",
              }}
              className="card-img-top mt-3 mx-2"
              alt={`Card ${index + 1}`}
            />
            <div className="card-body" style={{ color: "#fff" }}>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text mb-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
