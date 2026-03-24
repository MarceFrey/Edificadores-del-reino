import Hero from '../components/Hero';
import About from '../components/About';
import Ministries from '../components/Ministries';

function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
      <Ministries />
    </div>
  )
}

export default Home
