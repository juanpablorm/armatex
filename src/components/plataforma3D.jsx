import React, { useEffect } from 'react';
import './plataforma3D.css';
import model from '../models/pergola.glb';
import poster from '../img/poster.webp';

function Plataforma3D() {
    useEffect(() => {
        const modelViewer = document.querySelector('model-viewer');

        // Función para manejar la barra de progreso
        const onProgress = (event) => {
            const progressBar = event.target.querySelector('.progress-bar');
            const updatingBar = event.target.querySelector('.update-bar');
            updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

            if (event.detail.totalProgress === 1) {
                progressBar.classList.add('hide');
                event.target.removeEventListener('progress', onProgress);
            } else {
                progressBar.classList.remove('hide');
            }
        };

        // Listener para ajustar la cámara según el tamaño de la pantalla
        const handleResize = () => {
            if (window.innerWidth < 768) {
                modelViewer.setAttribute('camera-orbit', '180deg 0deg 750m');  // Alejar el objeto en pantallas pequeñas
                modelViewer.setAttribute('max-camera-orbit', '360deg 360deg 950m');
            } else {
                modelViewer.setAttribute('camera-orbit', '180deg 0deg 800m');  // Acercar el objeto en pantallas grandes
                modelViewer.setAttribute('max-camera-orbit', '360deg 360deg 900m');
            }
        };

        // Inicializa el valor de la cámara y agrega los listeners
        handleResize();
        window.addEventListener('resize', handleResize);
        modelViewer.addEventListener('progress', onProgress);

        // Limpia los listeners cuando el componente se desmonta
        return () => {
            if (modelViewer) {
                modelViewer.removeEventListener('progress', onProgress);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7">
                    <model-viewer
                        src={model}
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        tone-mapping="neutral"
                        poster={poster}
                        shadow-intensity="1"
                        auto-rotate
                        min-camera-orbit="0deg 75deg 1m"
                    >
                        <div className="progress-bar hide" slot="progress-bar">
                            <div className="update-bar"></div>
                        </div>
                    </model-viewer>
                </div>
                <div className="col-12 col-md-5 plataforma-col">
                    <div className="plataforma-card">
                        <p className="plataforma-cardTitle">INTERACTÚA CON NUESTROS DISEÑOS</p>
                        <div className="plataforma-line"></div>
                        <p className="plataforma-cardText">Descubre cada detalle desde todos los ángulos</p>
                        <button type="button" className="plataforma-button">Descubre más</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plataforma3D;