import './Home.css';
import Header from '../components/header';
import MainLogo from '../components/mainLogo';
import Plataforma3D from '../components/plataforma3D';
import GalleryComponent from '../components/gallery';
import Values from '../components/values';
import Contact from '../components/contact';
import Footer from '../components/footer';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const segmentA = document.getElementById('segmentA');

    // Verifica si segmentA existe antes de intentar acceder a sus propiedades
    if (segmentA) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const fadeFactor = 0.5; // Ajusta la velocidad del desvanecimiento

        if (scrollPosition < windowHeight * fadeFactor) {
          const opacity = 1 - scrollPosition / (windowHeight * fadeFactor);
          segmentA.style.opacity = opacity;
        } else {
          segmentA.style.opacity = 0;
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup para evitar fugas de memoria
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div>
      <Header />
      <div id="segmentA" className="segment">
        <MainLogo />
      </div>
      <div id="segmentB" className="segment">
        <div className="container">
          <div className="plataforma3D-component">
            <Plataforma3D />
          </div>
          <div className="gallery-component">
            <GalleryComponent />
          </div>
        </div>
        <div className="values-component">
          <div className='container'>
            <Values />
          </div>
        </div>
        <div className="contact-component">
          <div className="container">
            <Contact />
          </div>
        </div>
        <div className="footer-component">
            <div className='container'>
              <Footer />
            </div>
          </div>
      </div>

    </div>
  );
}

export default Home;