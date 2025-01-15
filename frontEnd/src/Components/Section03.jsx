import foto01 from "../assets/foto01.jpg";
import foto02 from "../assets/foto02.jpg";
import foto03 from "../assets/foto03.jpg";
import "@fontsource/urbanist";
import "./Section03.css";
import iconVerificado from "../assets/verifica.png";

export default function Section03() {
  return (
    <>
      <div className="container container-section03 my-5 d-flex flex-column">
        <div className="d-flex wrap-section03">
          <div className="esquerda-section03">
            <img className="img-fluid img-foto01" src={foto01} alt="Imagem 1" />
            <img
              className="img-fluid img-foto02 "
              src={foto02}
              alt="Imagem 2"
            />
            <img className="img-fluid img-foto03" src={foto03} alt="Imagem 3" />
          </div>
          <div className="direita-section03 mb-5">
            <h1 className="txt-title">
              Transforme seu corpo e alcance seu melhor com nosso plano de
              condicionamento físico.
            </h1>
            <ul>
              <li>
                <img src={iconVerificado} alt="" width={"24px"} />
                <span style={{ color: "white" }}>Construa músculos</span>
              </li>
              <li>
                <img src={iconVerificado} alt="" width={"24px"} />
                <span style={{ color: "white" }}>
                  Transforme-se por completo
                </span>
              </li>
              <li>
                <img src={iconVerificado} alt="" width={"24px"} />
                <span style={{ color: "white" }}>Liberte seu potencial</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-card-section03 ">
          <div>
            <h3 className="txt-title">
              suporte personalizado e uma comunidade motivadora para alcançar
              seus objetivos!
            </h3>
          </div>
          <div>
            <a href="#" className="btn btn-primary mx-5">
              Saiba mais
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
