import Hero from '../components/Hero';
import About from '../components/About';
import Ministries from '../components/Ministries';
import Events from '../components/Events';

function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
      <Events />
    </div>
  )
}

export default Home
