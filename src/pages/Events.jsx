import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
const mockEvents = [
  {
    id: 1,
    title: 'Reunión de Jóvenes',
    description: 'Una tarde distinta con amigos y la presencia de Dios. ¡Traé tu mate!',
    date: 'Sáb 28 Mar',
    time: '18:00 hs',
    img: '/evento1.jpeg',
  },
  {
    id: 2,
    title: 'Inicio Escuela Bíblica',
    description: 'Una mañana con sorpresas y enseñanzas profundas sobre la vida de Jesús.',
    date: 'Dom 29 Mar',
    time: '11:00 hs',
    img: '/evento2.jpeg',
  },
  {
    id: 3,
    title: 'Reunión de Hombres',
    description: 'Una noche exclusiva para ser edificados y fortalecidos en su presencia.',
    date: 'Vie 13 Abr',
    time: '20:00 hs',
    img: '/evento3.jpeg',
  },
];

const Events = () => {
  return (
    // Usamos un fondo gris muy clarito para que las tarjetas blancas resalten
    <section id="eventos" className="relative py-20 bg-[url('/textura4.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Encabezado de la Sección ── */}
        <div className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-amber-100 text-amber-900 text-sm font-bold tracking-widest uppercase mb-4">
            Próximos Eventos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Agendá tu <span className="text-amber-900">Lugar</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Únete y sé parte de lo que Dios está haciendo en nuestra comunidad. ¡Te esperamos!
          </p>
        </div>

        {/* ── La Vitrina de Tarjetas (Grid) ── */}
        {/* En celulares (1 col), en tablets (2 cols), en compus (3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {mockEvents.map((event) => (
            // La Tarjeta Individual
            <div 
              key={event.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              
              {/* Bloque Superior: Imagen y Fecha */}
              <div className="relative h-60 overflow-hidden">
                {/* Imagen con zoom al pasar el mouse */}
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Etiqueta Flotante de Fecha */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-amber-950 px-4 py-2 rounded-2xl font-bold text-sm shadow-lg flex items-center gap-2">
                  <CalendarDays size={16} className="text-amber-600" /> 
                  {event.date}
                </div>
              </div>

              {/* Bloque Inferior: Información */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-900 transition-colors duration-300">
                  {event.title}
                </h3>
                
                {/* Descripción que empuja la hora hacia abajo (flex-grow) */}
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  {event.description}
                </p>

                {/* Pie de la tarjeta (Hora y Botón de Flecha) */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-700 font-semibold">
                    <Clock size={18} className="text-amber-600" /> 
                    {event.time}
                  </div>
                  
                  {/* Botón circular elegante */}
                  <button className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-900 group-hover:bg-amber-900 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Events;