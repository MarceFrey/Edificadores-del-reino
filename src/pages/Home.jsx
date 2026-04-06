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
      <Events />
      <About />
      <Donations />
      <Horarios />
      <Mapas />
      <Ministries />
    </div>
  )
}

export default Home
