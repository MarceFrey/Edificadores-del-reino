import { MapPin } from 'lucide-react';

const Mapas = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Encabezado de Mapas */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Vení a <span className="text-amber-900">visitarnos</span>
        </h2>
        <p className="text-lg text-gray-600">
          ¡Te esperamos con los brazos abiertos en nuestras dos sedes!
        </p>
      </div>

      {/* Grid de Sedes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Sede Central */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-amber-900 w-6 h-6" />
            <h3 className="text-2xl font-bold text-gray-900">Sede Central</h3>
          </div>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <iframe
              title="Mapa Sede Central"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26314.305853488346!2d-58.75083913211007!3d-34.47021166243231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca37339a44cb3%3A0xfc42c9bfe4cbeade!2sMinisterio%20Edificadores%20del%20Reino!5e0!3m2!1ses!2sar!4v1774918342680!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Anexo */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="text-amber-900 w-6 h-6" />
            <h3 className="text-2xl font-bold text-gray-900">Anexo</h3>
          </div>
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <iframe
              title="Mapa Anexo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18607.684951981682!2d-58.79523299544611!3d-34.46724745633156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9930d5134997%3A0x425e2743d5a233d8!2sMinisterio%20Edificadores%20Del%20Reino%20-%20Del%20viso!5e0!3m2!1ses!2sar!4v1774918284257!5m2!1ses!2sar" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mapas;