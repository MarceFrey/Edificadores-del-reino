import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, User, Phone, Heart, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

const ConfirmacionEvento = () => {
  const { id } = useParams();

  // ── Estado del evento ──
  const [evento, setEvento] = useState(null);
  const [loadingEvento, setLoadingEvento] = useState(true);
  const [errorEvento, setErrorEvento] = useState(null);

  // ── Estado del formulario ──
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    colaboracion: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // ── Fetch del evento ──
  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const { data, error } = await supabase
          .from('eventos')
          .select('id, title, image')
          .eq('id', id)
          .single();

        if (error) throw error;
        setEvento(data);
      } catch (err) {
        setErrorEvento('No pudimos cargar los datos del evento. Intentá de nuevo más tarde.');
        console.error('Error al cargar el evento:', err.message);
      } finally {
        setLoadingEvento(false);
      }
    };

    fetchEvento();
  }, [id]);

  // ── Validación ──
  const validate = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio.';
    if (!form.apellido.trim()) newErrors.apellido = 'El apellido es obligatorio.';
    if (!form.telefono.trim()) newErrors.telefono = 'El teléfono es obligatorio.';
    if (!form.colaboracion.trim()) newErrors.colaboracion = 'Este campo es obligatorio.';
    return newErrors;
  };

  // ── Manejo de cambios ──
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // ── Envío del formulario ──
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from('asistencia_eventos').insert([
        {
          evento_id: id,
          nombre: form.nombre.trim(),
          apellido: form.apellido.trim(),
          telefono: form.telefono.trim(),
          colaboracion: form.colaboracion.trim(),
        },
      ]);

      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      setSubmitError('Hubo un error al enviar tu inscripción. Por favor, intentá de nuevo.');
      console.error('Error al guardar asistencia:', err.message);
    } finally {
      setSubmitting(false);
    }
  };

  // ── Pantalla de carga ──
  if (loadingEvento) {
    return (
      <div className="min-h-screen bg-[url('/textura4.png')] bg-cover bg-center flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={48} className="animate-spin text-amber-700" />
          <p className="text-amber-900 font-semibold text-lg">Cargando evento...</p>
        </div>
      </div>
    );
  }

  // ── Pantalla de error al cargar evento ──
  if (errorEvento) {
    return (
      <div className="min-h-screen bg-[url('/textura4.png')] bg-cover bg-center flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
          <p className="text-red-600 font-semibold mb-6">{errorEvento}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-amber-900 text-white px-6 py-3 rounded-2xl font-bold hover:bg-amber-800 transition-colors duration-300"
          >
            <ArrowLeft size={18} /> Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  // ── Pantalla de éxito ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-[url('/textura4.png')] bg-cover bg-center flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md w-full text-center">
          <CheckCircle size={64} className="text-amber-600 mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            ¡Inscripción confirmada!
          </h2>
          <p className="text-gray-600 mb-2 leading-relaxed">
            Gracias por confirmar tu asistencia a{' '}
            <span className="font-bold text-amber-900">{evento?.title}</span>.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            Nos alegra mucho que seas parte de este evento. ¡Te esperamos!
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-amber-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-amber-800 transition-colors duration-300 shadow-md"
          >
            <ArrowLeft size={18} /> Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  // ── Vista principal ──
  return (
    <div className="min-h-screen bg-[url('/textura4.png')] bg-cover bg-center py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Botón volver */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-900 font-semibold mb-8 hover:text-amber-700 transition-colors duration-200 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Volver al inicio
        </Link>

        {/* Tarjeta principal */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* ── Columna izquierda: Imagen del evento ── */}
            <div className="relative h-72 lg:h-auto lg:min-h-[600px]">
              <img
                src={evento?.image}
                alt={evento?.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay degradado */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Título sobre la imagen */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  Confirmá tu asistencia
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-tight drop-shadow-lg">
                  {evento?.title}
                </h1>
              </div>
            </div>

            {/* ── Columna derecha: Formulario ── */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                Formulario de inscripción
              </h2>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Completá tus datos para reservar tu lugar. Todos los campos son obligatorios.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-amber-600" /> Nombre
                    </span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ${
                      errors.nombre ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-amber-300'
                    }`}
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.nombre}</p>
                  )}
                </div>

                {/* Apellido */}
                <div>
                  <label htmlFor="apellido" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <User size={14} className="text-amber-600" /> Apellido
                    </span>
                  </label>
                  <input
                    id="apellido"
                    type="text"
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    placeholder="Tu apellido"
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ${
                      errors.apellido ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-amber-300'
                    }`}
                  />
                  {errors.apellido && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.apellido}</p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Phone size={14} className="text-amber-600" /> Teléfono
                    </span>
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    name="telefono"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="Ej: +54 9 11 1234-5678"
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 ${
                      errors.telefono ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-amber-300'
                    }`}
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.telefono}</p>
                  )}
                </div>

                {/* Colaboración */}
                <div>
                  <label htmlFor="colaboracion" className="block text-sm font-semibold text-gray-700 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Heart size={14} className="text-amber-600" /> ¿Cómo podés colaborar?
                    </span>
                  </label>
                  <textarea
                    id="colaboracion"
                    name="colaboracion"
                    value={form.colaboracion}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Contanos en qué podés ayudar (logística, música, cocina, etc.)"
                    className={`w-full px-4 py-3 rounded-xl border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-200 resize-none ${
                      errors.colaboracion ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50 hover:border-amber-300'
                    }`}
                  />
                  {errors.colaboracion && (
                    <p className="text-red-500 text-xs mt-1.5">{errors.colaboracion}</p>
                  )}
                </div>

                {/* Error de envío */}
                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                    {submitError}
                  </div>
                )}

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-amber-900 text-white font-bold py-3.5 rounded-xl hover:bg-amber-800 active:scale-95 transition-all duration-300 shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Confirmar asistencia'
                  )}
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionEvento;
