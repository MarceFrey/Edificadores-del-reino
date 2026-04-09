import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] overflow-hidden">

      {/* --- FONDOS (VIDEOS/IMÁGENES) --- */}
      <div className="absolute inset-0 z-0">
        
        {/* 🖥️ VERSIÓN ESCRITORIO (Horizontal) 
            'hidden' lo oculta en celulares.
            'md:block' lo muestra a partir de pantallas medianas (tablets y PC). */}
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
        />

        {/* 📱 VERSIÓN CELULAR (Vertical) 
            'block' lo muestra por defecto en celulares.
            'md:hidden' lo esconde cuando la pantalla es grande. */}
        {/* ⚠️ Si tu archivo es una foto y no un video, cambia toda esta etiqueta <video> por: 
            <img src="/hero-video-resp.jpg" className="block md:hidden absolute inset-0 w-full h-full object-cover" /> 
        */}
        <video
          src="/hero-video-resp.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY (FILTRO OSCURO COMPARTIDO) */}
        {/* Este filtro se aplica a cualquiera de los dos videos que esté visible */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* --- CONTENIDO PRINCIPAL --- */}
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