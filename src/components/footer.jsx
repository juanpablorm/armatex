import './footer.css'
import logo from '../img/ARMATEX_BLA_N.png'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="footer-line"></div>
                    <img src={logo} alt="Armatex_Logo" className="footer-image"/>
                    <div className="footer-line"></div>
                </div>
                <div className="col-12 col-md-4">
                    <p className="footer-title">Menu</p>
                    <nav>
                    <Link to="/"><p className="footer-text">Home</p></Link>
                    <Link to="/Plataforma3D"><p className="footer-text">Plataforma 3D</p></Link>
                    <p className="footer-text">Galería</p>
                    <p className="footer-text">Nosotros</p>
                    </nav>
                </div>
                <div className="col-12 col-md-4">
                    <p className="footer-title">Redes Sociales</p>
                    <p className="footer-text"><i className="footer-icon fa-brands fa-facebook"></i> Armatex.dgo</p>
                    <p className="footer-text"><i className="footer-icon fa-brands fa-whatsapp"></i> 91-1234-567</p>
                    <p className="footer-text"><i className="footer-icon fa-brands fa-instagram"></i> armatex.dgo</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;