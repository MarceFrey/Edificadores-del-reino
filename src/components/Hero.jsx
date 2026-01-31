import { ChevronRight, PlayCircle } from 'lucide-react';
import heroImg from '../assets/portada-edr4.jpg';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] overflow-hidden">
      
      {/* IMAGEN DE FONDO */}
      <div 
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroImg} 
          alt="Comunidad reunida" 
          className="w-full h-full  object-cover"
        />
        {/* OVERLAY (FILTRO OSCURO) */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        
        {/* Etiqueta pequeña superior */}
        <span className="inline-block py-1 px-3 rounded-full bg-amber-100 border border-amber-950 text-amber-900 text-sm font-semibold mb-6 backdrop-blur-sm">
          Bienvenidos a casa
        </span>

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Una familia para <span className="text-amber-200">crecer</span> <br className="hidden md:block" />
          y servir juntos.
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-xl text-gray-200 max-w-2xl mb-10">
          Testimonios vivos del amor de cristo
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 px-8 py-3 bg-amber-900 hover:bg-amber-950 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-amber-800/30">
            Contactanos
            <ChevronRight size={20} />
          </button>
          
          <button className="flex items-center justify-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold rounded-lg transition-all">
            <PlayCircle size={20} />
            Ver predicas
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;