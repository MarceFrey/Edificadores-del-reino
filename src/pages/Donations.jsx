import { Banknote, QrCode } from 'lucide-react';

const methods = [
  {
    icon: QrCode,
    title: 'Mercado Pago',
    description:
      'Pronto habilitaremos un enlace o código QR para donar de forma rápida desde la app de Mercado Pago.',
    details: (
      <p className="mt-4 text-sm text-amber-900 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 font-medium shadow-sm">
        Estamos preparando esta opción. Mientras tanto, podés usar transferencia o efectivo.
      </p>
    ),
  },
  {
    icon: Banknote,
    title: 'Efectivo',
    description:
      'Recibimos ofrendas en efectivo los días de reunión. Acercate al área de recepción o consultá a un líder al final del servicio.',
    details: (
      <ul className="mt-4 text-sm text-gray-600 space-y-2 border-t border-gray-100 pt-4">
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-900 shrink-0"></span>
          Domingos y encuentros especiales
        </li>
        <li className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-900 shrink-0"></span>
          Sobre o cofre en recepción (según disponibilidad)
        </li>
      </ul>
    ),
  },
];

const Donations = () => {
  return (
    <section id="donaciones" className="relative py-24 bg-[url('/textura2.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"></div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <header className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-sm font-bold tracking-widest uppercase mb-4 shadow-sm">
            Tu apoyo edifica
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Sembrá en lo que{' '}
            <span className="text-amber-900">Dios está haciendo</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Cada donación nos ayuda a sostener ministerios, alcanzar familias y servir con amor a
            nuestra comunidad. Gracias por colaborar con generosidad.
          </p>
        </header>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {methods.map(({ icon: Icon, title, description, details }) => (
            <article
              key={title}
              className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8"
            >
              
              {/* Icono con animación */}
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-900 mb-6 group-hover:scale-110 group-hover:bg-amber-100 transition-all duration-300"
                aria-hidden
              >
                <Icon className="w-8 h-8" strokeWidth={2} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-900 transition-colors">
                {title}
              </h3>
              
              <p className="text-base text-gray-600 leading-relaxed flex-1 mb-6">
                {description}
              </p>
              
              {/* Detalles (Alerta de MP o Lista de Efectivo) */}
              <div className="mt-auto">
                {details}
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donations;
