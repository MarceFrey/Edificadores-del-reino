import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

// Paginas
import Home from './pages/Home';
import Donations from './pages/Donations';
import Ministries from './pages/Ministries';
import About from './pages/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donaciones" element={<Donations />} />
          <Route path="/ministerios" element={<Ministries />} />
          <Route path="/nosotros" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App