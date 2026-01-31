import { BookOpen, Heart, Music, Users, Baby, HandHeart } from 'lucide-react';

const Ministries = () => {
  // Datos de los ministerios 
  const ministries = [
    {
      title: "Escuela de Vida",
      description: "Cursos bíblicos prácticos para fortalecer tu fe y liderazgo.",
      icon: <BookOpen className="w-8 h-8 text-amber-900" />,
    },
    {
      title: "Alabanza y Adoración",
      description: "Un equipo apasionado por conectar el cielo y la tierra a través de la música.",
      icon: <Music className="w-8 h-8 text-amber-900" />,
    },
    {
      title: "Ayuda Social",
      description: "Llevamos alimentos y esperanza a los barrios más necesitados.",
      icon: <HandHeart className="w-8 h-8 text-amber-900" />,
    },
    {
      title: "Jóvenes",
      description: "Un espacio dinámico para que las nuevas generaciones encuentren su identidad.",
      icon: <Users className="w-8 h-8 text-amber-900" />,
    },
    {
      title: "Niños (Kids)",
      description: "Enseñanza divertida y segura para los más pequeños de la casa.",
      icon: <Baby className="w-8 h-8 text-amber-900" />,
    },
    {
      title: "Matrimonios",
      description: "Herramientas para construir familias fuertes y unidas.",
      icon: <Heart className="w-8 h-8 text-amber-900" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hay un lugar para <span className="text-amber-900">ti</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creemos que cada persona tiene un don único. Descubre las áreas donde puedes crecer, servir y ser parte de nuestra familia.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icono con fondo circular */}
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-800 transition-colors duration-300">
                <div className="group-hover:text-white transition-colors duration-300">
                  {ministry.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {ministry.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {ministry.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ministries;