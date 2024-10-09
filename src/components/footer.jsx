import './footer.css'
import logo from '../img/ARMATEX_BLA_N.png'

function Footer() {
    return (
        <div className="container footer-container">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="footer-line"></div>
                    <img src={logo} alt="Armatex_Logo" className="footer-image"/>
                    <div className="footer-line"></div>
                </div>
                <div className="col-12 col-md-4">
                    <p className="footer-title">Menu</p>
                    <p className="footer-text">Home</p>
                    <p className="footer-text">Plataforma 3D</p>
                    <p className="footer-text">Galería</p>
                    <p className="footer-text">Nosotros</p>
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