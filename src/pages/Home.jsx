import './Home.css';
import Header from '../components/header';
import MainLogo from '../components/mainLogo';
import Plataforma3D from '../components/plataforma3D';
import GalleryComponent from '../components/gallery';
import Values from '../components/values';
import Contact from '../components/contact';
import Footer from '../components/footer';

window.addEventListener('scroll', function () {
  const segmentA = document.getElementById('segmentA');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  const fadeFactor = 0.5; // Ajusta la velocidad del desvanecimiento

  if (scrollPosition < windowHeight * fadeFactor) {
    const opacity = 1 - (scrollPosition / (windowHeight * fadeFactor));
    segmentA.style.opacity = opacity;
  } else {
    segmentA.style.opacity = 0; // Totalmente transparente cuando se ha desplazado lo suficiente
  }
});

function Home() {
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
        <div className="container">
          <div className="contact-component">
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