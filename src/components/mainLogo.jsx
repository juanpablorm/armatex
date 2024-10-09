import './mainLogo.css';
import logo from '../img/ARMATEX_AZUL_M.png';

function MainLogo() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <img src={logo} className="img-fluid" alt="Logo"/>
                    </div>
                    <div className="mainLogo-line col-2"></div>
                    <div className="col-2">
                        <p className="mainLogo-text">TOLDOS</p>
                        <p className="mainLogo-text">DOMOS</p>
                        <p className="mainLogo-text">PERGOLAS</p>
                        <p className="mainLogo-text">PISO SPC</p>
                        <p className="mainLogo-text">LAMBRIN</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainLogo;