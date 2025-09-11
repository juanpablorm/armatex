import { useEffect, useState } from 'react';
import './Plataforma3D.css';
import './elements.css';
import Header from '../components/header';
import Footer from '../components/footer';

const Plataforma3DPage = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await fetch(`${API}/models3d`).then(r => r.json());
        if (alive) {
          setImages(data);
          setCurrent(0);
        }
      } catch (e) {
        console.error(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  const prevSlide = () => {
    if (!images.length) return;
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    if (!images.length) return;
    setCurrent((current + 1) % images.length);
  };

  return (
    <div>
      <Header />
      <div className="allContainer">
        <div className="container plataforma3D-content">
          <div className="col-12">
            <p className="mainTitle">PLATAFORMA 3D</p>
          </div>

          {loading ? (
            <p>Cargando modelos...</p>
          ) : !images.length ? (
            <p>No hay modelos disponibles.</p>
          ) : (
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
                    <div key={src.id ?? index} className={className} alt={`Slide ${index}`}>
                      <model-viewer
                        src={src.modelSrc}
                        ar
                        ar-modes="webxr scene-viewer quick-look"
                        camera-controls
                        tone-mapping="neutral"
                        poster={src.posterSrc || "../img/poster.webp"}
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
          )}
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