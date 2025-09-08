import './Nosotros.css';
import './elements.css';
import Header from '../components/header';
import Footer from '../components/footer';
import gal2 from "../img/gal2.jpg";

function Nosotros() {
    return (
        <div>
            <Header />
            <div className="allContainer">
                <div className="container nosotros-content">
                    <div className="col-12">
                        <p className="mainTitle">NOSOTROS</p>
                    </div>
                    <div className="row nostros-row">
                        <div className="col-12">
                            <p className="nosotros-title">¿QUÉ ES ARMATEX?</p>
                            <p className="nosotros-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doremida eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row nostros-row">
                        <div className="col-12 col-md-6">
                            <p className="nosotros-title"><i className="fa-regular fa-flag"></i> MISIÓN</p>
                            <p className="nosotros-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doremida eiusmod tempor incididunt.</p>
                            <p className="nosotros-title"><i className="fa-regular fa-eye"></i> VISIÓN</p>
                            <p className="nosotros-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doremida eiusmod tempor incididunt.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={gal2} alt="Image 2" className="img-fluid galeria-item" />
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

export default Nosotros;