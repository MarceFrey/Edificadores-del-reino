const Pastores = () => {
  return (
    // Fondo gris extraclaro para dar respiro visual
    <section id="lideres" className="py-24 bg-gray-50">
      
      {/* Usamos max-w-5xl porque solo son 2 columnas, así no quedan muy separadas */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- ENCABEZADO --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Nuestros <span className="text-amber-900">Líderes</span>
          </h2>
        </div>

        {/* --- GRID DE LÍDERES --- */}
        {/* 1 columna en celu, 2 columnas en PC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          
          {/* LÍDERES 1: Apóstoles Alfredo y Dora */}
          <div className="flex flex-col items-center text-center group">
            
            {/* Contenedor de la foto */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-8">
              {/* Sombra ámbar difuminada detrás (Efecto Glow) */}
              <div className="absolute inset-0 bg-amber-200 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* La Fotografía */}
              <img 
                src="/pastores1.jpeg" 
                alt="Apóstoles Alfredo y Dora" 
                className="relative w-full h-full object-cover rounded-full shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Textos */}
            <p className="text-amber-700 font-bold uppercase tracking-widest text-sm">
              Apóstoles
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-900 transition-colors duration-300">
              Alfredo y Dora
            </h3>
            
          </div>

          {/* LÍDERES 2: Pastores Gustavo y Lorena */}
          <div className="flex flex-col items-center text-center group">
            
            {/* Contenedor de la foto */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 mb-8">
              {/* Sombra ámbar difuminada detrás (Efecto Glow) */}
              <div className="absolute inset-0 bg-amber-200 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* La Fotografía */}
              <img 
                src="/pastores2.jpeg" 
                alt="Pastores Gustavo y Lorena" 
                className="relative w-full h-full object-cover rounded-full shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Textos */}
            <p className="text-amber-700 font-bold uppercase tracking-widest text-sm">
              Pastores
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-amber-900 transition-colors duration-300">
              Gustavo y Lorena
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Pastores;