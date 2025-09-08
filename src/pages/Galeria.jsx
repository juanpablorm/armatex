import './Galeria.css';
import './elements.css';
import Header from '../components/header';
import Footer from '../components/footer';
import gal1 from "../img/gal1.jpg";
import gal2 from "../img/gal2.jpg";
import gal3 from "../img/gal3.jpg";
import gal4 from "../img/gal4.jpg";
import gal5 from "../img/gal5.jpg";

function Galeria() {
    return (
        <div>
            <Header />
            <div className="allContainer">
                <div className="container galeria-content">
                    <p className="mainTitle">GALERIA</p>
                    <div className="galeria-imgContainer">
                        <div className="figure">
                            <img src={gal1} alt="Image 2" className="img-fluid galeria-item" />
                        </div>
                        <div className="figure">
                            <img src={gal2} alt="Image 2" className="img-fluid galeria-item" />
                        </div>
                        <div className="figure">
                            <img src={gal4} alt="Image 4" className="img-fluid galeria-item" />
                        </div>
                        <div className="figure">
                            <img src={gal5} alt="Image 5" className="img-fluid galeria-item" />
                        </div>
                        <div className="figure">
                            <img src={gal3} alt="Image 3" className="img-fluid galeria-item" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-component">
                <div className='container'>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Galeria;