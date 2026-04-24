import { useState, useEffect } from 'react';
import { CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { supabase } from '../supabaseClient'; // Ajusta la ruta según dónde guardaste el archivo

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('eventos')
        .select('*')
        .order('id', { ascending: true });
      
      if (error) throw error;
      
      if (data) {
        setEvents(data);
      }
    } catch (error) {
      console.error("Error al cargar los eventos:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="eventos" className="relative py-20 bg-[url('/textura4.png')] bg-cover bg-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Encabezado de la Sección ── */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Próximos Eventos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Únete y sé parte de lo que Dios está haciendo en nuestra comunidad. ¡Te esperamos!
          </p>
        </div>

        {/* ── Pantalla de Carga ── */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-900"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                
                {/* Bloque Superior: Imagen y Fecha */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
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
                  
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {event.description}
                  </p>

                  {/* Pie de la tarjeta */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-700 font-semibold">
                      <Clock size={18} className="text-amber-600" /> 
                      {event.time}
                    </div>
                    
                    <button className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-900 group-hover:bg-amber-900 group-hover:text-white transition-all duration-300 shadow-sm">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Events;