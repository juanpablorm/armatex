import React, { useState } from 'react';
import './Plataforma3D.css';
import Header from '../components/header';
import Footer from '../components/footer';
import model from '../models/pergola.glb';
import model1 from '../models/casa.glb';
import model2 from '../models/casa2.glb';
import poster from '../img/poster.webp';

const Plataforma3DPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselItems = [
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

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    return (
        <div>
            <Header />
            <div className="plataforma3D-container">
                <div className="container plataforma3D-content">
                    <div className="col-12">
                        <p className="plataforma3D-mainTitle">PLATAFORMA 3D</p>
                    </div>
                    <div className="row plataforma3D-carousel">
                        <div className="col-12">
                            {carouselItems.map((item, index) => (
                                index === currentIndex && (
                                    <div key={item.id}>
                                        <model-viewer
                                            src={item.modelSrc}
                                            ar
                                            ar-modes="webxr scene-viewer quick-look"
                                            camera-controls
                                            tone-mapping="neutral"
                                            poster={poster}
                                            shadow-intensity="1"
                                            auto-rotate
                                            min-camera-orbit="0deg 75deg 1m"
                                            className="carousel-model"
                                        >
                                            <div className="progress-bar hide" slot="progress-bar">
                                                <div className="update-bar"></div>
                                            </div>
                                        </model-viewer>

                                        <div className="plataforma3D-card">
                                            <p className="plataforma3D-cardAltText">{item.title}</p>
                                            <div className="plataforma3D-line"></div>
                                            <p className="plataforma3D-cardText">{item.description}</p>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                    <div className="carousel-controls">
                        <i className="fas fa-chevron-left arrow-left" onClick={handlePrev}></i>
                        <i className="fas fa-chevron-right arrow-right" onClick={handleNext}></i>
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

export default Plataforma3DPage;
