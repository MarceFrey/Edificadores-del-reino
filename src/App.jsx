import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Barra de Navegación */}
      <Navbar />

      {/* Portada Principal */}
      <Hero />

      {/* Sección Temporal para hacer scroll y ver el efecto sticky del nav */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Próximas Secciones</h2>
        <p className="mt-4 text-gray-600">En desarrollo.</p>
        <div className="h-96"></div> {/* Espacio vacío para probar scroll */}
      </section>
    </div>
  )
}

export default App