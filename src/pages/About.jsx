import { Quote } from 'lucide-react';
import pastoresImg from '../assets/pastores.webp'; 

const About = () => {
  return (
    <section id="nosotros" className="relative py-24 bg-[url('/Textura7.png')] bg-cover bg-center">
      
      {/* 1. EL OVERLAY: Fundamental para proteger la legibilidad del texto */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

      {/* Todo el contenido envuelto en relative z-10 para que quede arriba del overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Aumenté el 'gap' (espacio) entre la foto y el texto para que respire más */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- COLUMNA 1: IMAGEN --- */}
          <div className="relative group">
            {/* CORRECCIÓN DE COLOR: Cambiamos blue-100 a amber-100 para mantener la identidad */}
            {/* Agregamos una animación donde el fondo ámbar se mueve un poquito al pasar el mouse */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-amber-100 rounded-3xl -z-10 transform group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
            
            {/* Destello de luz detrás de la foto */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-200 rounded-full -z-10 blur-2xl opacity-60"></div>
            
            {/* LA FOTO: Le agregamos un borde blanco (border-4 border-white) y mucha sombra */}
            <img 
              src={pastoresImg} 
              alt="Pastores de la iglesia Edificadores del Reino" 
              className="relative w-full rounded-2xl shadow-2xl border-4 border-white object-cover aspect-[4/5] hover:scale-[1.02] transition duration-500"
            />
          </div>

          {/* --- COLUMNA 2: TEXTO --- */}
          <div className="flex flex-col justify-center">
            
            {/* Etiqueta / Badge Superior */}
            <div className="self-start inline-flex items-center px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-6 shadow-sm">
              <span className="text-sm font-bold text-amber-900 uppercase tracking-widest">
                Nuestra Historia
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Guiando a una generación hacia su <span className="text-amber-900">propósito</span>.
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hola, somos los <strong className="text-gray-900">Pastores Alfredo, Dora, Gustavo y Lorena</strong>. Hace 29 años comenzamos este viaje con un sueño: crear un lugar donde las personas no solo asistan, sino que <span className="italic">pertenezcan</span>.
            </p>
            
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              En Edificadores del Reino, creemos firmemente en la restauración integral de la familia y en equipar a cada creyente para impactar su entorno con excelencia y amor.
            </p>

            {/* Firma / Cita Destacada */}
            <div className="relative bg-gray-50/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-200 opacity-50" />
              <p className="text-lg text-gray-600 font-serif italic relative z-10">
                "Edificando vidas, transformando generaciones"
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;