import HorariosCentral from '../components/HorariosCentral'; 
import HorariosAnexo from '../components/HorariosAnexo';

const Horarios = () => {
  return (
    <section id="horarios" className="py-20">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-2">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-amber-900">Horarios</span>
          </h2>
          <p className="text-lg text-gray-600">
            Tenemos varios horarios para que nos puedas visitar. ¡Te esperamos!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          <HorariosCentral />
          <HorariosAnexo />
        </div>
      </div>

    </section>
  );
};

export default Horarios;