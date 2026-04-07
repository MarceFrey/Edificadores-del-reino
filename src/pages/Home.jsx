import Hero from '../components/Hero';
import About from './About';
import Events from './Events';
import Lema from './Lema';
import Ministries from './Ministries';
import Donations from './Donations';
import Mapas from './Mapas';
import Horarios from './Horarios';

function Home() {
  return (
    <div className="min-h-screen font-sans bg-[url('/fondo.png')] bg-cover bg-center bg-fixed">
      <Hero />
      <Lema/>
      <About />

      <div className="relative bg-[url('/events-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/15 backdrop-blur-sm"></div>       
        <div className="relative z-10">
          <Horarios />
          <Mapas />
        </div>
      </div>

      <Events />
      <Ministries />
      <Donations />
    </div>
  )
}

export default Home;
