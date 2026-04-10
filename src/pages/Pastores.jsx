import { Quote } from 'lucide-react';
// 🪄 1. Importamos la herramienta Link para poder navegar
import { Link } from 'react-router-dom';

const Pastores = () => {
  return (
    <section id="lideres" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- COLUMNA 1: LA FOTOGRAFÍA --- */}
          {/* Mantenemos 'group' aquí para controlar los efectos de los hijos al hacer hover */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 group">
            
            <Link 
              to="/nosotros" 
              className="relative w-64 h-64 sm:w-80 sm:h-80 block cursor-pointer overflow-hidden rounded-full"
              aria-label="Conoce más sobre los Apóstoles"
            >
              {/* Sombra ámbar difuminada de fondo (se mantiene igual) */}
              <div className="absolute inset-0 bg-amber-200 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* 🖼️ La Fotografía */}
              {/* Añadimos group-hover:scale-105 (ya estaba) y group-hover:opacity-60 
                  para que la foto se ponga un poco opaca al pasar el mouse */}
              <img 
                src="/pastores1.jpeg" 
                alt="Apóstoles Alfredo y Dora Provenzano" 
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-8 border-white transition-all duration-500 group-hover:scale-105 group-hover:opacity-50 z-10"
              />

              {/* 🪄 EL NUEVO EFECTO: Superposición de texto al hacer hover */}
              {/* Este div está oculto por defecto (opacity-0) y se muestra en hover (group-hover:opacity-100).
                  Se posiciona absolutamente sobre la foto. z-20 para estar sobre la imagen. */}
              <div className="absolute inset-0 bg-amber-950/80 rounded-full flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 p-4 text-center">
                <p className="text-white text-xl font-bold leading-tight">
                  Conoce nuestra<br />historia
                </p>
              </div>
            </Link>
          </div>

          {/* --- COLUMNA 2: LOS TEXTOS (Sin cambios) --- */}
          <div className="flex flex-col order-2 lg:order-1">
            
            <div className="self-start inline-block py-1.5 px-4 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              Nuestros Líderes
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Guiando a una generación hacia su <span className="text-amber-700">propósito</span>.
            </h2>
            
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Hola, somos los <strong className="text-gray-900">Apóstoles Alfredo y Dora Provenzano</strong>. Hace 29 años comenzamos este viaje con un sueño: crear un lugar donde las personas no solo asistan, sino que <span className="italic">pertenezcan</span>.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En Edificadores del Reino, creemos firmemente en la restauración integral de la familia y en equipar a cada creyente para impactar su entorno con excelencia y amor.
            </p>

            <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mt-2">
              <Quote className="absolute top-4 right-4 w-10 h-10 text-amber-100" strokeWidth={1} />
              <p className="text-xl text-amber-900 font-serif italic relative z-10">
                "Edificando vidas, transformando generaciones"
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Pastores;