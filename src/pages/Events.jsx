import { useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays, Clock } from 'lucide-react';

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------
const mockEvents = [
  {
    id: 1,
    title: 'Reunion de jovenes y Adolescentes',
    description: 'Una tarde distinta con amigos y la presencia de Dios.',
    date: 'Sabado 28 de Marzo',
    time: '18:00 hs',
    img: '/evento1.jpeg',
  },
  {
    id: 2,
    title: 'Inicio escuela Biblica',
    description: 'Una mañana con sorpresas y enseñanzas sobre Jesús 📖',
    date: 'Sábado 28 de Marzo',
    time: '11:00 hs',
    img: '/evento2.jpeg',
  },
  {
    id: 3,
    title: 'Reunión de Hombres',
    description: 'Una noche para ser edificados y fortalecidos en la presencia de Dios.',
    date: 'Domingo 13 de Abril, 2025',
    time: '18:00 hs',
    img: '/evento3.jpeg',
  },
];

// ---------------------------------------------------------------------------
// Events component
// ---------------------------------------------------------------------------
const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mockEvents.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mockEvents.length - 1 ? 0 : prev + 1));
  };

  const activeEvent = mockEvents[currentIndex];

  return (
    <section 
      id="eventos" 
      className="relative py-20 bg-gray-950 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/events-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 h-full flex flex-col items-center">

        {/* ── Section header ── */}
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-100 border border-amber-950 text-amber-900 text-sm font-semibold mb-4 backdrop-blur-sm">
            Próximos eventos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Eventos del <span className="text-amber-900">Mes</span>
          </h2>
          <p className="mt-3 text-gray-200 max-w-xl mx-auto">
            Únete y sé parte de lo que Dios está haciendo en nuestra comunidad.
          </p>
        </div>

        <div className="w-fit max-w-3xl relative rounded-3xl overflow-hidden shadow-2xl shadow-black/80 bg-neutral-800/80 backdrop-blur-sm border border-neutral-900">
          <div className="relative w-full overflow-hidden bg-neutral-900/20 flex items-center justify-center">
            <img
              key={activeEvent.id}
              src={activeEvent.img}
              alt={activeEvent.title}
              className="w-auto h-auto max-h-[500px] max-w-full object-contain transition-transform duration-500 hover:scale-105"
            />
            {/* Slide counter badge */}
            <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10 z-20">
              {currentIndex + 1} / {mockEvents.length}
            </span>
          </div>

          {/* Info card */}
          <div className="px-6 py-6 sm:px-8 sm:py-7 border-t border-black">
            <h3 className="text-2xl font-bold text-white mb-2 transition-all duration-500">
              {activeEvent.title}
            </h3>
            <p className="text-gray-300 mb-5 leading-relaxed transition-all duration-500 whitespace-pre-line">
              {activeEvent.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-amber-800 text-sm font-medium bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-900/50">
                <CalendarDays size={16} />
                <span>{activeEvent.date}</span>
              </div>
              <div className="flex items-center gap-2 text-amber-800 text-sm font-medium bg-amber-950/30 px-3 py-1.5 rounded-lg border border-amber-900/50">
                <Clock size={16} />
                <span>{activeEvent.time}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Navigation buttons ── */}
        <button
          onClick={handlePrev}
          aria-label="Evento anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-2 z-30
                     w-12 h-12 flex items-center justify-center
                     bg-amber-900 hover:bg-amber-800 text-white
                     rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-800"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={handleNext}
          aria-label="Siguiente evento"
          className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-2 z-30
                     w-12 h-12 flex items-center justify-center
                     bg-amber-900 hover:bg-amber-800 text-white
                     rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-700"
        >
          <ChevronRight size={24} />
        </button>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2.5 mt-8">
          {mockEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al evento ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none
                ${index === currentIndex
                  ? 'w-10 bg-amber-900'
                  : 'w-2.5 bg-gray-600 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;