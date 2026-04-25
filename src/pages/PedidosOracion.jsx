import { useState } from 'react';
import { supabase } from '../supabaseClient'; // Asegúrate de que esta ruta apunte a tu archivo de conexión

const PedidosOracion = () => {
  // 1. Estado para guardar lo que el usuario escribe
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
  });

  // 2. Estado para manejar el botón de carga y mensajes de éxito/error
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  // Función para actualizar los datos mientras escriben
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función que se ejecuta al apretar "Enviar"
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    setStatus({ loading: true, success: false, error: null });

    try {
      // 3. Enviamos los datos a la tabla 'pedidos_oracion' en Supabase
      const { error } = await supabase
        .from('pedidos_oracion')
        .insert([
          {
            nombre: formData.nombre,
            apellido: formData.apellido,
            telefono: formData.telefono,
          },
        ]);

      if (error) throw error;

      // 4. Si todo sale bien, mostramos mensaje de éxito y vaciamos el formulario
      setStatus({ loading: false, success: true, error: null });
      setFormData({ nombre: '', apellido: '', telefono: '' });
      
    } catch (error) {
      console.error("Error al enviar petición:", error.message);
      setStatus({ loading: false, success: false, error: "Hubo un error al enviar tu pedido. Intenta nuevamente." });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      
      {/* Contenedor Principal */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Cabecera con Versículo */}
        <div className="bg-amber-900 p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Pedidos de Oración</h2>
          <p className="italic text-amber-100/90 text-lg">
            "No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, 
            presenten sus peticiones a Dios y denle gracias."
          </p>
          <span className="block mt-2 font-semibold text-amber-200">Filipenses 4:6</span>
        </div>

        {/* Formulario */}
        <div className="p-8">
          <p className="text-gray-600 mb-6 text-center">
            Déjanos tus datos. Nuestro equipo de intercesión estará orando por ti.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Campo Nombre */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                placeholder="Ej: Juan"
              />
            </div>

            {/* Campo Apellido */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
              <input
                type="text"
                name="apellido"
                required
                value={formData.apellido}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                placeholder="Ej: Pérez"
              />
            </div>

            {/* Campo Teléfono */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                required
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                placeholder="Ej: 11 1234 5678"
              />
            </div>

            {/* Mensajes de Feedback */}
            {status.success && (
              <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium">
                ¡Tu pedido de oración ha sido enviado con éxito! Estaremos orando. 🙏
              </div>
            )}
            {status.error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center font-medium">
                {status.error}
              </div>
            )}

            {/* Botón Enviar */}
            <button
              type="submit"
              disabled={status.loading}
              className={`w-full py-3 px-4 text-white font-bold rounded-lg shadow-md transition-all 
                ${status.loading ? 'bg-amber-700/50 cursor-not-allowed' : 'bg-amber-700 hover:bg-amber-800 hover:-translate-y-1'}`}
            >
              {status.loading ? 'Enviando...' : 'Enviar Pedido de Oración'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PedidosOracion;
