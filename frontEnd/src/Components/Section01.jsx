import "@fontsource/urbanist"; // Fonte normal
import "./Section01.css";
import imgInstrutores from "../assets/pngwing 5.png";
export default function Section01() {
  return (
    <>
      <div className="d-flex container justify-content-center flex-column flex-md-row">
        <div
          className="esquerda-section01 col-12 col-md-6 d-flex flex-column justify-content-center"
          style={{ marginRight: "60px" }}
        >
          <h1
            className="txt-title"
            style={{
              fontFamily: "Urbanist, serif",
              color: "white",
              fontWeight: "600",
              fontSize: "64px",
            }}
          >
            O suporte que você precisa para conquistar o seu melhor físico!
          </h1>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              color: "white",
            }}
          >
            Cuidamos do seu físico com a dedicação que você merece. Conte com
            nossos profissionais capacitados para alcançar seus objetivos!
          </p>
          <div>
            <button className="btn btn-primary mb-5">Matricule-se</button>
          </div>
        </div>

        <div className="d-flex col-12 col-md-6 d-flex flex-column align-items-center justify-content-center position-relative">
          <div>
            <h1
              className="txt-fitness"
              style={{
                color: "gray",
                opacity: "11%",
                fontWeight: "700",
                fontFamily: "Urbanist, serif",
                fontSize: "142px",
                transform: "rotate(-90deg)",
                position: "absolute",
                zIndex: "-1",
                top: "30%",
                right: "50%",
              }}
            >
              Fitness
            </h1>
          </div>
          <img
            src={imgInstrutores}
            style={{
              height: "auto",
            }}
            alt="Instrutores"
            className="img-fluid img-instrutores"
          />
        </div>
      </div>
    </>
  );
}
