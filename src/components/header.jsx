import './header.css'
import logo from '../img/ARMATEX_AZUL_M.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary custom-navbar">
            <div className="container-fluid">
                <a class="navbar-logo navbar-brand" href="#">
                    <img src={logo} alt="ARMATEX" width="120" height="24" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/Plataforma3D">Plataforma3D</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/Galeria">Galeria</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/Nosotros">Nosotros</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;