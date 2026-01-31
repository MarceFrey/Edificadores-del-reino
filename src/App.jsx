import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Ministries />

      {/* Footer Temporal */}
      <footer className="py-10 bg-gray-900 text-center text-gray-400">
        <p>© 2024 Edificadores del Reino. Próximamente Footer completo.</p>
      </footer>
    </div>
  )
}

export default App