import { ArrowUpRight, Quote } from 'lucide-react';
import lema from '../assets/lema-abril.jpeg'

const Lema = () => {
  return (
    <section id="lema" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor Flex: Imagen a la izquierda, texto a la derecha */}
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          
          {/* --- BLOQUE DE IMAGEN --- */}
          <div className="w-full lg:w-5/12">
            <div className="relative h-full min-h-[400px]">
              {/* Decoración detrás de la foto */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              
              {/* La foto se estirará automáticamente para igualar la altura del texto gracias a h-full y object-cover */}
              <img 
                // Te sugiero buscar una imagen de alguien orando o una puerta/luz para este mes
                src={lema} 
                alt="Tiempo de oración" 
                className="relative rounded-3xl shadow-xl shadow-gray-200 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* --- BLOQUE DE TEXTO (CARTA PASTORAL) --- */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            
            {/* Etiqueta del Mes */}
            <div className="self-start inline-flex items-center px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 mb-6">
              <span className="text-sm font-bold text-amber-900 uppercase tracking-widest">
                Lema del Mes • Abril 2026
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Entrar en lo secreto con el <span className="text-amber-900">Maestro</span>
            </h2>

            {/* Párrafos Introductorios */}
            <div className="space-y-4 text-lg text-gray-600 mb-8">
              <p>
                En Edificadores del Reino declaramos que este será un tiempo de profundizar, acercarnos más y fortalecernos en la oración. 
              </p>
              <p>
                Los animamos a intensificar su vida de oración, porque allí encontrarán dirección, consuelo y fortaleza. El Señor ha preparado este tiempo para que todo guerrero cansado y todo luchador fiel, reciba buenas noticias y gran bendición. <strong className="text-gray-800">¡Él lo hace! Por eso, regocíjense.</strong>
              </p>
            </div>

            {/* Sección de "Ascender" (Lista con viñetas) */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Este es un mes de ascender a Él...
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ascender para <strong>ver desde su perspectiva</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ascender para <strong>recibir mayor revelación</strong>.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowUpRight className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">Ascender para <strong>tomar las llaves del Reino</strong> para este tiempo.</span>
                </li>
              </ul>
            </div>

            {/* Párrafo de Cierre */}
            <p className="text-lg text-gray-600 mb-8">
              Mientras respondan a la invitación del Espíritu Santo, vendrá un nuevo empoderamiento: hallarán esperanza renovada, gozo en medio de cualquier circunstancia y fuerzas nuevas para seguir avanzando. Como apóstoles y pastores, les animamos a permanecer firmes.
            </p>

            {/* Versículo Bíblico Destacado */}
            <blockquote className="relative bg-amber-900 text-white rounded-2xl p-6 md:p-8 shadow-lg">
              <Quote className="absolute top-4 right-4 w-12 h-12 text-amber-800 opacity-50" />
              <p className="text-xl md:text-2xl font-serif italic mb-4 relative z-10 leading-relaxed">
                "Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces."
              </p>
              <footer className="text-amber-200 font-semibold tracking-wide">
                — Jeremías 33:3
              </footer>
            </blockquote>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Lema;