import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Ministries from './components/Ministries';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Ministries />
      <Footer />
    </div>
  )
}

export default App