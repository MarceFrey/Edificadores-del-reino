import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import ScrollToTop from './components/ScrollToTop';

// Paginas
import Home from './pages/Home';
import Donations from './pages/Donations';
import Ministries from './pages/Ministries';
import About from './pages/About';
import Escuela from './pages/Escuela';
import Login from './pages/Login';
import Admin from './pages/Admin';
import PedidosOracion from './pages/PedidosOracion';
import ConfirmacionEvento from './pages/ConfirmacionEvento';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/escuela-biblica" element={<Escuela />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/oracion" element={<PedidosOracion />} />
          <Route path="/evento/:id/asistencia" element={<ConfirmacionEvento />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App