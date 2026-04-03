import { Clock, CalendarDays } from 'lucide-react';

const Horarios = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      {/* Tarjeta de Horarios */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-2xl mx-auto">
        <div className="bg-amber-900 px-6 py-4 flex items-center justify-center gap-3">
          <Clock className="text-amber-100 w-6 h-6" />
          <h3 className="text-xl font-bold text-white tracking-wide">
             Central
          </h3>
        </div>
        
        <div className="p-6 md:p-8">
          <ul className="space-y-6">
            {/* Reunión General */}
            <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-5 last:border-0 last:pb-0">
              <div className="flex items-center gap-4 mb-3 sm:mb-0">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-900 shrink-0">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <span className="font-bold text-gray-900 text-lg">Reunión General</span>
              </div>
              <div className="flex flex-col sm:text-right ml-16 sm:ml-0">
                <span className="text-gray-600">Domingos <span className="text-amber-700 font-bold ml-1">10:00 AM</span></span>
                <span className="text-gray-600">Miércoles <span className="text-amber-700 font-bold ml-1">20:00 PM</span></span>
              </div>
            </li>

            {/* Niños */}
            <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-5 last:border-0 last:pb-0">
              <div className="flex items-center gap-4 mb-3 sm:mb-0">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-900 shrink-0">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <span className="font-bold text-gray-900 text-lg">Niños</span>
              </div>
              <div className="flex flex-col sm:text-right ml-16 sm:ml-0">
                <span className="text-gray-600">Sábados <span className="text-amber-700 font-bold ml-1">10:00 AM</span></span>
              </div>
            </li>

            {/* Jóvenes */}
            <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-5 last:border-0 last:pb-0">
              <div className="flex items-center gap-4 mb-3 sm:mb-0">
                <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-900 shrink-0">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <span className="font-bold text-gray-900 text-lg">Jóvenes</span>
              </div>
              <div className="flex flex-col sm:text-right ml-16 sm:ml-0">
                <span className="text-gray-600">Sábados <span className="text-amber-700 font-bold ml-1">21:00 PM</span></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Horarios;