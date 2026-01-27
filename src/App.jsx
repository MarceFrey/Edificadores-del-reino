import Navbar from './components/Navbar'; // <--- Importación

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Integración del Navbar */}
      <Navbar />

      {/* Contenido principal temporal */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Bienvenido a Edificadores del Reino
          </h1>
          <p className="text-gray-600 mb-6">
            Estamos construyendo una plataforma segura y accesible para nuestra comunidad.
          </p>
          <div className="p-4 bg-blue-50 border border-blue-100 rounded text-blue-800">
            🚧 Sitio en Construcción: Fase de Desarrollo UI
          </div>
        </div>
      </div>
    </div>
  )
}

export default App