import { MapPin, Users, Baby, Flame } from 'lucide-react';

const HorariosCentral = () => {
  const schedule = [
    { 
      title: 'Reunión General', 
      days: 'Dom 10:00 AM | Mié 20:00 PM', 
      icon: Users, 
      color: 'text-blue-600', 
      bg: 'bg-blue-50' 
    },
    { 
      title: 'Niños', 
      days: 'Sáb 10:00 AM', 
      icon: Baby, 
      color: 'text-green-600', 
      bg: 'bg-green-50' 
    },
    { 
      title: 'Jóvenes', 
      days: 'Sáb 21:00 PM', 
      icon: Flame, 
      color: 'text-amber-600', 
      bg: 'bg-amber-50' 
    },
  ];

  return (
    // Contenedor elástico
    <div className="w-full h-full">
      
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 h-full flex flex-col">
        
        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
          <div className="p-3 bg-amber-50 rounded-2xl">
            <MapPin className="text-amber-900 w-7 h-7" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">
              Grand Bourg
            </h3>
            <p className="text-sm text-gray-500 font-semibold tracking-wide uppercase mt-1">
              Sede Central
            </p>
          </div>
        </div>

        {/* --- LISTA DE HORARIOS (Generada automáticamente) --- */}
        <div className="flex-grow space-y-3">
          {schedule.map((item, index) => (
            
            <div 
              key={index} 
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200 border border-transparent hover:border-gray-100 gap-4 sm:gap-0"
            >
              
              {/* Lado Izquierdo: Icono + Título */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                  {/* Renderizamos el icono dinámicamente */}
                  <item.icon className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <span className="font-bold text-gray-800 text-lg">
                  {item.title}
                </span>
              </div>

              {/* Lado Derecho:"Píldora"de Horario */}
              <div className="sm:text-right pl-16 sm:pl-0">
                <span className="inline-block px-4 py-2 bg-gray-100 group-hover:bg-white group-hover:shadow-sm text-gray-700 font-bold text-sm rounded-full transition-all duration-300">
                  {item.days}
                </span>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HorariosCentral;