import Hero from '../components/Hero';
import About from './About';
import Events from './Events';
import Lema from './Lema';
import Ministries from './Ministries';
import Donations from './Donations';
import Mapas from './Mapas';
import Horarios from './Horarios';
import Pastores from './Pastores';

function Home() {
  return (
    <div className="min-h-screen font-sans bg-[url('/fondo.png')] bg-cover bg-center bg-fixed">
      <Hero />
      <Lema/>
      <Pastores />
      <Horarios />
      <Mapas />
      <Events />
      <Ministries />
      <Donations />
    </div>
  )
}

export default Home;
