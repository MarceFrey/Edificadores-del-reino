import { CheckCircle2 } from 'lucide-react';
import pastoresImg from '../assets/pastores.webp'; 

const About = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid de 2 columnas: Se apilan en móvil, lado a lado en tablet/PC */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA 1: IMAGEN */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-50 rounded-full -z-10 blur-xl"></div>
            
            <img 
              src={pastoresImg} 
              alt="Pastores de la iglesia Edificadores del Reino" 
              className="relative w-full rounded-xl shadow-lg border border-gray-100 object-cover aspect-[4/5] hover:scale-[1.01] transition duration-500"
            />
          </div>

          {/* COLUMNA 2: TEXTO */}
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 border border-amber-950 text-amber-900 text-sm font-semibold mb-6 backdrop-blur-sm">
                Sobre Nosotros
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Guiando a una generación hacia su <span className="text-amber-900">propósito</span>.
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Hola, somos los Pastores [Nombre] y [Nombre]. Hace 10 años comenzamos este viaje con un sueño: crear un lugar donde las personas no solo asistan, sino que pertenezcan.
            </p>
            
            <p className="text-gray-600 mb-8">
              En Edificadores del Reino, creemos en la restauración integral de la familia y en equipar a cada creyente para impactar su entorno con excelencia y amor.
            </p>

            {/* Lista de puntos clave */}
            <ul className="space-y-4">
              {[
                'Enseñanza bíblica práctica y relevante.',
                'Un ambiente seguro para tu familia.',
                'Compromiso con la excelencia y el servicio.'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-900 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            {/* Firma secundaria */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 font-serif italic">
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