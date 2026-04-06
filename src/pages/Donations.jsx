import { Banknote, Landmark, QrCode } from 'lucide-react';

const methods = [
  {
    icon: Landmark,
    title: 'Transferencia bancaria',
    description:
      'Podés enviar tu ofrenda o diezmo por transferencia. Solicitá los datos actualizados (CBU, alias y titular) en la secretaría o por WhatsApp.',
    details: (
      <dl className="mt-4 space-y-2 text-sm text-gray-600 border-t border-gray-100 pt-4">
        <div className="flex flex-col gap-0.5">
          <dt className="font-medium text-gray-700">Banco</dt>
          <dd>A confirmar con administración</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="font-medium text-gray-700">CBU / Alias</dt>
          <dd>A confirmar con administración</dd>
        </div>
        <div className="flex flex-col gap-0.5">
          <dt className="font-medium text-gray-700">Titular</dt>
          <dd>Edificadores del Reino</dd>
        </div>
      </dl>
    ),
  },
  {
    icon: QrCode,
    title: 'Mercado Pago',
    description:
      'Pronto habilitaremos un enlace o código QR para donar de forma rápida desde la app de Mercado Pago.',
    details: (
      <p className="mt-4 text-sm text-amber-900 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
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
      <ul className="mt-4 text-sm text-gray-600 space-y-1 border-t border-gray-100 pt-4 list-disc list-inside">
        <li>Domingos y encuentros especiales</li>
        <li>Sobre o cofre en recepción (según disponibilidad)</li>
      </ul>
    ),
  },
];

const Donations = () => {
  return (
    <section id="donaciones" className="py-20 bg-white overflow-hidden">
      <div className="min-h-screen bg-gray-50 pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-10 sm:mb-12">
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 border border-amber-950/20 text-amber-900 text-sm font-semibold mb-4">
              Tu apoyo edifica
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Sembrá en lo que{' '}
              <span className="text-amber-900">Dios está haciendo</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Cada donación nos ayuda a sostener ministerios, alcanzar familias y servir con amor a
              nuestra comunidad. Gracias por colaborar con generosidad.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {methods.map(({ icon: Icon, title, description, details }) => (
              <article
                key={title}
                className="flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-900 mb-4"
                  aria-hidden
                >
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{title}</h2>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{description}</p>
                {details}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Donations;
