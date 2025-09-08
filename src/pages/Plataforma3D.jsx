import { useState } from 'react';
import './Plataforma3D.css';
import './elements.css';
import Header from '../components/header';
import Footer from '../components/footer';
import model from '../models/pergola.glb';
import model1 from '../models/casa.glb';
import model2 from '../models/casa2.glb';
import poster from '../img/poster.webp';

const Plataforma3DPage = () => {

    const [current, setCurrent] = useState(2);

    const prevSlide = () => {
        setCurrent((current - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrent((current + 1) % images.length);
    };


    const images = [
        {
            id: 1,
            title: 'TOLDO',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            modelSrc: model,
        },
        {
            id: 2,
            title: 'DOMO',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            modelSrc: model1,
        },
        {
            id: 3,
            title: 'PERGOLA',
            description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            modelSrc: model2,
        }
    ];

    return (
        <div>
            <Header />
            <div className="allContainer">
                <div className="container plataforma3D-content">
                    <div className="col-12">
                        <p className="mainTitle">PLATAFORMA 3D</p>
                    </div>
                    <div className="carousel-container">
                        <button className="nav-button left" onClick={prevSlide}>‹</button>
                        <div className="carousel">
                            {images.map((src, index) => {
                                const offset = index - current;
                                let className = 'slide';

                                if (offset === 0) className += ' active';
                                else if (offset === -1 || offset === images.length - 1) className += ' left';
                                else if (offset === 1 || offset === -(images.length - 1)) className += ' right';
                                else className += ' hidden';

                                return (
                                    <div
                                        key={index}
                                        className={className}
                                        alt={`Slide ${index}`}
                                    >
                                        <model-viewer
                                            src={src.modelSrc}
                                            ar
                                            ar-modes="webxr scene-viewer quick-look"
                                            camera-controls
                                            tone-mapping="neutral"
                                            poster={poster}
                                            shadow-intensity="1"
                                            auto-rotate
                                            min-camera-orbit="270deg 0deg 1m"
                                        >
                                            <div className="progress-bar hide" slot="progress-bar">
                                                <div className="update-bar"></div>
                                            </div>
                                        </model-viewer>
                                        <div className="plataforma3D-card">
                                            <p className="plataforma3D-cardAltText">{src.title}</p>
                                            <div className="plataforma3D-line"></div>
                                            <p className="plataforma3D-cardText">{src.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <button className="nav-button right" onClick={nextSlide}>›</button>
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
};

export default Plataforma3DPage;