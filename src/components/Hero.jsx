import { useState, useEffect } from 'react';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  // 1. Estado para detectar si la pantalla es de celular
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 2. Función para revisar el ancho de la pantalla
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px es el breakpoint 'md'
    };

    // Revisar al cargar la página por primera vez
    checkScreenSize();

    // Estar atentos por si el usuario voltea el celular o cambia el tamaño
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="relative bg-gray-900 h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        
        {/* 3. VERSIÓN OPTIMIZADA: Solo carga el video que corresponde al tamaño */}
        <video
          key={isMobile ? 'mobile' : 'desktop'} // Ayuda a que React entienda que cambió el video
          src={isMobile ? "/portadaEDRcel.mp4" : "/portadaEDR.mp4"}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* --- CONTENIDO PRINCIPAL (Intacto) --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">

        {/* Título Principal */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
          Una familia para <span className="text-amber-200">crecer</span> <br className="hidden md:block" />
          y servir juntos.
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 text-xl text-gray-200 max-w-2xl mb-10">
          Testimonios vivos del amor de Cristo
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