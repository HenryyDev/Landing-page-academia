import '@fontsource/urbanist'; // Fonte normal
import imgInstrutores from "../assets/pngwing 5.png"
export default function Section01(){

    return(
        <>
        <div className="d-flex container justify-content-center flex-column flex-md-row">
    <div className="esquerda col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
        <h1 style={{ fontFamily: 'Urbanist, serif', color: "white" ,fontWeight:"600",fontSize:"64px"}}>
            O suporte que você precisa para conquistar o seu melhor físico!
        </h1>
        <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}>
            Cuidamos do seu físico com a dedicação que você merece. Conte com nossos profissionais capacitados para alcançar seus objetivos!
        </p>
    </div>
    <div className="direita col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
        <img src={imgInstrutores} alt="Instrutores"  className='img-fluid' />
    </div>
</div>

        </>
    )
}