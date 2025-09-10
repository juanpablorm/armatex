import './header.css'
import logo from '../img/ARMATEX_BLA_N.png';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary custom-navbar">
            <div className="container-fluid">
                <a className="navbar-logo navbar-brand" href="/">
                    <img src={logo} alt="ARMATEX" width="120" height="24" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <i className="bi bi-list fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/Plataforma3D"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Plataforma3D
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/Galeria"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Galeria
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/Nosotros"
                                className={({ isActive }) =>
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Nosotros
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;