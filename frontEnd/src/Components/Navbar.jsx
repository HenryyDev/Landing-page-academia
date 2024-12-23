import "@fontsource/urbanist"; // Fonte normal
import logo from "../assets/musculo.png";
export default function Navbar() {
  return (
    <>
      <div
        className="ms-3 d-flex mt-3 mb-3"
        style={{ fontFamily: "Urbanist, serif", height: "94px" }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ filter: "invert(1)", height: "80px" }}
        />
        <h1 className="d-flex align-items-center justify-content-center">
          <span className="ms-3" style={{ color: "white", fontWeight: "bold" }}>
            Fit club gym
          </span>
        </h1>
      </div>
    </>
  );
}
