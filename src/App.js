import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Plataforma3DPage from './pages/Plataforma3D';
import Galeria from './pages/Galeria';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Plataforma3D" element={<Plataforma3DPage />} />
          <Route path="/Galeria" element={<Galeria />} />
          <Route path="/Nosotros" element={<Nosotros />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
