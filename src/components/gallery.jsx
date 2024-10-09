import './gallery.css'
import gal1 from "../img/gal1.jpg";
import gal2 from "../img/gal2.jpg";
import gal3 from "../img/gal3.jpg";
import gal4 from "../img/gal4.jpg";
import gal5 from "../img/gal5.jpg";

function GalleryComponent() {
    return (
        <div className="container container-gallery">
            <div className="gallery-card">
                <p className="gallery-cardTitle">NUESTROS PROYECTOS HABLAN POR SÍ MISMOS:</p>
                <div className="gallery-line"></div>
                <p className="gallery-cardText">Calidad y precisión en cada detalle</p>
                <p className="gallery-button">Galería</p>
            </div>
            <div className="figure">
                <img src={gal2} alt="Image 2" className="img-fluid gallery-item" />
            </div>
            <div className="figure">
                <img src={gal4} alt="Image 4" className="img-fluid gallery-item" />
            </div>
            <div className="figure">
                <img src={gal5} alt="Image 5" className="img-fluid gallery-item" />
            </div>
            <div className="figure">
                <img src={gal3} alt="Image 3" className="img-fluid gallery-item" />
            </div>
        </div>
    );
}

export default GalleryComponent;