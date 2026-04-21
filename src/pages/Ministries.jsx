import { useState } from 'react';
import { BookOpen, Heart, Music, Users, Baby, HandHeart, Shield, Flower2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ministries = () => {
  const ministries = [
    {
      title: "Discipulado",
      description: "Estudiamos juntos la palabra de Dios para poder seguir los pasos de Jesús.",
      icon: <BookOpen className="w-8 h-8 text-amber-400" />,
      image: "./discipulado.jpg",
      path: "/discipulado" 
    },
    {
      title: "Alabanza y Adoración",
      description: "Un equipo apasionado por conectar el cielo y la tierra a través de la música.",
      icon: <Music className="w-8 h-8 text-amber-400" />,
      image: "./alabanza.jpeg",
      path: "/alabanza"
    },
    {
      title: "Escuela Bíblica",
      description: "Enseñanza divertida y segura para los más pequeños de la casa.",
      icon: <Baby className="w-8 h-8 text-amber-400" />,
      image: "./escuela.jpeg",
      path: "/escuela-biblica"
    },
    {
      title: "Ayuda Social",
      description: "Llevamos alimentos y esperanza a los barrios más necesitados.",
      icon: <HandHeart className="w-8 h-8 text-amber-400" />,
      image: "./alabanza.jpeg",
      path: "/ayuda-social"
    },
    {
      title: "Jóvenes",
      description: "El lugar donde la juventud se reúne a adorar y aprender la palabra de Dios.",
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      image: "./alabanza.jpeg",
      path: "/jovenes"
    },
    {
      title: "Matrimonios",
      description: "Herramientas para construir familias fuertes y unidas.",
      icon: <Heart className="w-8 h-8 text-amber-400" />,
      image: "./alabanza.jpeg",
      path: "/matrimonios"
    },
    {
      title: "Adolescentes",
      description: "Un espacio dinámico para que las nuevas generaciones encuentren su identidad.",
      icon: <Users className="w-8 h-8 text-amber-400" />,
      image: "./alabanza.jpeg",
      path: "/adolescentes"
    },
    {
      title: "Hombres",
      description: "Donde los hombres de la Iglesia aprenden a ser hombres de Dios.",
      icon: <Shield className="w-8 h-8 text-amber-400" />,
      image: "./alabanza.jpeg",
      path: "/hombres"
    },
    {
      title: "Mujeres",
      description: "El espacio donde Dios tiene los detalles más hermosos para ellas.",
      icon: <Flower2 className="w-8 h-8 text-amber-400" />,
      image: "./alabanza.jpeg",
      path: "/mujeres"
    },
  ];

  const [activeBg, setActiveBg] = useState(ministries[0].image);

  return (
    <section id="ministerios" className="relative py-24 overflow-hidden">

      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out scale-105"
        style={{ backgroundImage: `url(${activeBg})` }}
      ></div>
      
      <div className="absolute inset-0 bg-gray-900/80 transition-all duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hay un lugar para <span className="text-amber-400">ti</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Creemos que cada persona tiene un don único. Descubre las áreas donde puedes crecer y ser parte de nuestra familia.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ministries.map((ministry, index) => (
            <Link 
              key={index} 
              to={ministry.path}
              onMouseEnter={() => setActiveBg(ministry.image)}
              className="block bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 group cursor-pointer"
            >
              
              {/* Icono */}
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 group-hover:scale-110 transition-all duration-300">
                {ministry.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {ministry.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {ministry.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ministries;