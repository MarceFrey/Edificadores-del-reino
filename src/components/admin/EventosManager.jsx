import { useEffect, useState } from 'react';
import { Plus, Trash2, Edit2, Image as ImageIcon } from 'lucide-react';
import { supabase } from '../../supabaseClient';

const EVENTO_VACIO = { title: '', date: '', time: '', image: '', description: '' };

const EventosManager = () => {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [eventoActual, setEventoActual] = useState(EVENTO_VACIO);
  const [archivoFlyer, setArchivoFlyer] = useState(null);
  const [guardando, setGuardando] = useState(false);

  useEffect(() => {
    obtenerEventos();
  }, []);

  // ── READ ──────────────────────────────────────────────────────────────────
  const obtenerEventos = async () => {
    setCargando(true);
    const { data, error } = await supabase
      .from('eventos')
      .select('*')
      .order('date', { ascending: true });

    if (error) {
      console.error('Error al traer eventos:', error);
    } else {
      setEventos(data);
    }
    setCargando(false);
  };

  // ── DELETE ────────────────────────────────────────────────────────────────
  const eliminarEvento = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este evento?');
    if (!confirmar) return;

    const { error } = await supabase.from('eventos').delete().eq('id', id);
    if (error) {
      console.error('Error al eliminar evento:', error);
      alert('Error al eliminar el evento. Intenta nuevamente.');
    } else {
      obtenerEventos();
    }
  };

  // ── OPEN MODAL ────────────────────────────────────────────────────────────
  const abrirModalNuevo = () => {
    setEventoActual(EVENTO_VACIO);
    setArchivoFlyer(null);
    setModalAbierto(true);
  };

  const abrirModalEditar = (evento) => {
    setEventoActual({ ...evento });
    setArchivoFlyer(null);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setEventoActual(EVENTO_VACIO);
    setArchivoFlyer(null);
  };

  // ── CREATE / UPDATE ───────────────────────────────────────────────────────
  const guardarEvento = async (e) => {
    e.preventDefault();
    setGuardando(true);

    try {
      let imageUrl = eventoActual.image;

      // 1. Si hay un archivo nuevo, subirlo al bucket "flyers"
      if (archivoFlyer) {
        const extension = archivoFlyer.name.split('.').pop();
        const nombreArchivo = `flyer-${Date.now()}.${extension}`;

        const { error: uploadError } = await supabase.storage
          .from('flyers')
          .upload(nombreArchivo, archivoFlyer, {
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) throw uploadError;

        // 2. Obtener la URL pública del archivo subido
        const { data: urlData } = supabase.storage
          .from('flyers')
          .getPublicUrl(nombreArchivo);

        imageUrl = urlData.publicUrl;
      }

      // 3. Preparar el payload con los campos de la tabla
      const payload = {
        title: eventoActual.title.trim(),
        date: eventoActual.date,
        time: eventoActual.time,
        image: imageUrl,
        description: eventoActual.description?.trim() ?? '',
      };

      // 4. INSERT si es nuevo, UPDATE si ya tiene id
      if (eventoActual.id) {
        const { error: updateError } = await supabase
          .from('eventos')
          .update(payload)
          .eq('id', eventoActual.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('eventos')
          .insert([payload]);

        if (insertError) throw insertError;
      }

      // 5. Éxito: cerrar modal y refrescar lista
      cerrarModal();
      obtenerEventos();
    } catch (error) {
      console.error('Error al guardar evento:', error);
      alert(`Error al guardar el evento: ${error.message}`);
    } finally {
      setGuardando(false);
    }
  };

  // ── RENDER ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Tus Eventos</h2>
        <button
          onClick={abrirModalNuevo}
          className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition shadow-sm"
        >
          <Plus size={20} /> Nuevo Evento
        </button>
      </div>

      {/* Lista de eventos */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {cargando ? (
          <div className="p-6 text-center text-gray-500 py-20">Cargando eventos...</div>
        ) : eventos.length === 0 ? (
          <div className="p-6 text-center text-gray-500 py-20">
            <p className="text-lg">Aún no hay eventos creados.</p>
            <p className="text-sm">Haz clic en "Nuevo Evento" para comenzar.</p>
          </div>
        ) : (
          eventos.map((evento) => (
            <div
              key={evento.id}
              className="border-t border-gray-100 p-4 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-4">
                {evento.image ? (
                  <img
                    src={evento.image}
                    alt={evento.title}
                    className="w-12 h-12 rounded-lg object-cover bg-gray-200"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                    <ImageIcon size={20} />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-gray-800">{evento.title || 'Sin título'}</h3>
                  <p className="text-sm text-gray-500">
                    {evento.date || 'Fecha sin definir'}{evento.time && ` | ${evento.time} hs`}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => abrirModalEditar(evento)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition"
                  title="Editar evento"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => eliminarEvento(evento.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-md transition"
                  title="Eliminar evento"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal crear / editar */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              {eventoActual.id ? 'Editar Evento' : 'Crear Nuevo Evento'}
            </h3>

            <form onSubmit={guardarEvento} className="flex flex-col gap-4">
              {/* Título */}
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Título del evento *</label>
                <input
                  type="text"
                  required
                  placeholder="Ej: Retiro de Jóvenes"
                  className="p-2 border rounded-md w-full focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                  value={eventoActual.title}
                  onChange={(e) => setEventoActual({ ...eventoActual, title: e.target.value })}
                />
              </div>

              {/* Fecha y Hora */}
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="text-xs text-gray-500 mb-1 block">Fecha *</label>
                  <input
                    type="date"
                    required
                    className="p-2 border rounded-md w-full focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    value={eventoActual.date}
                    onChange={(e) => setEventoActual({ ...eventoActual, date: e.target.value })}
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-xs text-gray-500 mb-1 block">Hora</label>
                  <input
                    type="time"
                    className="p-2 border rounded-md w-full focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    value={eventoActual.time}
                    onChange={(e) => setEventoActual({ ...eventoActual, time: e.target.value })}
                  />
                </div>
              </div>

              {/* Descripción */}
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Descripción</label>
                <textarea
                  rows={3}
                  placeholder="Ej: Un fin de semana de encuentro, adoración y palabra..."
                  className="p-2 border rounded-md w-full focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none resize-none"
                  value={eventoActual.description}
                  onChange={(e) => setEventoActual({ ...eventoActual, description: e.target.value })}
                />
              </div>

              {/* Flyer */}
              <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
                {/* Preview de imagen actual */}
                {eventoActual.image && !archivoFlyer && (
                  <img
                    src={eventoActual.image}
                    alt="Flyer actual"
                    className="w-24 h-24 object-cover rounded-lg mx-auto mb-3"
                  />
                )}
                <label className="cursor-pointer text-amber-600 font-medium hover:text-amber-700">
                  {archivoFlyer ? 'Cambiar imagen' : eventoActual.image ? 'Reemplazar flyer' : 'Subir Flyer'}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setArchivoFlyer(e.target.files[0])}
                  />
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  {archivoFlyer ? archivoFlyer.name : 'Formatos: JPG, PNG, WEBP'}
                </p>
              </div>

              {/* Acciones */}
              <div className="flex gap-2 justify-end mt-2">
                <button
                  type="button"
                  onClick={cerrarModal}
                  disabled={guardando}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition disabled:opacity-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={guardando}
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {guardando ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EventosManager;
