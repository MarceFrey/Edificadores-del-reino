import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Barra de Navegación */}
      <Navbar />

      {/* Portada Principal */}
      <Hero />
      <About />

      {/* Sección Temporal para hacer scroll y ver el efecto sticky del nav */}
      <section className="py-20 px-4 text-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-400">Próximamente: Nuestros Ministerios</h2>
      </section>
    </div>
  )
}

export default App