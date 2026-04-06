import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Lema from '../components/Lema';
import Ministries from './Ministries';
import Contacto from './Contacto';
import Donations from './Donations';

function Home() {
  return (
    <div className="min-h-screen font-sans bg-[url('/fondo.png')] bg-cover bg-center bg-fixed">
      <Hero />
      <Lema/>
      <Events />
      <About />
      <Donations />
      <Contacto />
      <Ministries />

    </div>
  )
}

export default Home
