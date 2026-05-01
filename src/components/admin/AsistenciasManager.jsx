import { useEffect, useState } from 'react';
import { Users, RefreshCw, Trash2, Download } from 'lucide-react';
import { supabase } from '../../supabaseClient';

// ── HELPERS ───────────────────────────────────────────────────────────────────

const formatearFecha = (isoString) => {
  if (!isoString) return '—';
  return new Date(isoString).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Genera y descarga un archivo CSV con solo las columnas
 * Nombre, Apellido y Colaboración (privacidad/simplicidad).
 */
const descargarCSV = (asistencias) => {
  if (!asistencias || asistencias.length === 0) {
    alert('No hay registros para exportar.');
    return;
  }

  const encabezado = ['Nombre', 'Apellido', 'Colaboración'];

  const filas = asistencias.map((a) => [
    `"${(a.nombre ?? '').replace(/"/g, '""')}"`,
    `"${(a.apellido ?? '').replace(/"/g, '""')}"`,
    `"${(a.colaboracion ?? '').replace(/"/g, '""')}"`,
  ]);

  const contenidoCSV = [encabezado.join(','), ...filas.map((f) => f.join(','))].join('\n');

  const blob = new Blob(['\uFEFF' + contenidoCSV], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `asistencias_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// ── COMPONENT ─────────────────────────────────────────────────────────────────

const AsistenciasManager = () => {
  const [asistencias, setAsistencias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerAsistencias();
  }, []);

  // ── READ ────────────────────────────────────────────────────────────────────
  const obtenerAsistencias = async () => {
    setCargando(true);
    setError(null);

    const { data, error } = await supabase
      .from('asistencia_eventos')
      .select('id, created_at, evento_id, nombre, apellido, telefono, colaboracion')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error al traer asistencias:', error);
      setError('No se pudieron cargar las asistencias.');
    } else {
      setAsistencias(data);
    }
    setCargando(false);
  };

  // ── DELETE ──────────────────────────────────────────────────────────────────
  const eliminarAsistencia = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este registro de asistencia?');
    if (!confirmar) return;

    const { error } = await supabase
      .from('asistencia_eventos')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error al eliminar asistencia:', error);
      alert('Error al eliminar el registro. Intenta nuevamente.');
    } else {
      setAsistencias((prev) => prev.filter((a) => a.id !== id));
    }
  };

  // ── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Encabezado */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
            <Users size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Asistencias a Eventos</h2>
        </div>

        <div className="flex items-center gap-2">
          {/* Botón Descargar Planilla */}
          <button
            onClick={() => descargarCSV(asistencias)}
            disabled={cargando || asistencias.length === 0}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition shadow-sm text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={16} />
            Descargar Planilla
          </button>

          {/* Botón Actualizar */}
          <button
            onClick={obtenerAsistencias}
            disabled={cargando}
            className="flex items-center gap-2 text-amber-700 border border-amber-300 bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100 transition text-sm font-medium disabled:opacity-50"
          >
            <RefreshCw size={16} className={cargando ? 'animate-spin' : ''} />
            {cargando ? 'Cargando...' : 'Actualizar'}
          </button>
        </div>
      </div>

      {/* Contador */}
      {!cargando && !error && (
        <p className="text-sm text-gray-500 mb-4 bg-gray-50 p-2 rounded-md inline-block">
          Total: <span className="font-bold text-amber-700">{asistencias.length}</span> registros.
        </p>
      )}

      {/* Estado: Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-4 text-sm">
          {error}
        </div>
      )}

      {/* Estado: Cargando */}
      {cargando && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-20 text-center text-gray-500">
          Cargando asistencias...
        </div>
      )}

      {/* Estado: Sin registros */}
      {!cargando && !error && asistencias.length === 0 && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-20 text-center text-gray-500">
          <p className="text-lg">Aún no hay registros de asistencia.</p>
          <p className="text-sm mt-1">Los registros aparecerán aquí cuando alguien complete el formulario de evento.</p>
        </div>
      )}

      {/* ── TABLA DESKTOP ─────────────────────────────────────────────────────── */}
      {!cargando && !error && asistencias.length > 0 && (
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-amber-50 text-amber-800 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-5 py-3 font-semibold">Fecha/Hora</th>
                <th className="px-5 py-3 font-semibold">Nombre Completo</th>
                <th className="px-5 py-3 font-semibold">Teléfono</th>
                <th className="px-5 py-3 font-semibold">Colaboración</th>
                <th className="px-5 py-3 font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {asistencias.map((asistencia) => (
                <tr key={asistencia.id} className="hover:bg-amber-50/30 transition">
                  <td className="px-5 py-4 text-gray-400 whitespace-nowrap">
                    {formatearFecha(asistencia.created_at)}
                  </td>
                  <td className="px-5 py-4 font-medium text-gray-800">
                    {asistencia.nombre} {asistencia.apellido}
                  </td>
                  <td className="px-5 py-4 text-gray-600">
                    {asistencia.telefono || '—'}
                  </td>
                  <td className="px-5 py-4">
                    {asistencia.colaboracion ? (
                      <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-medium px-2 py-1 rounded-md">
                        {asistencia.colaboracion}
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => eliminarAsistencia(asistencia.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                      title="Eliminar registro"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ── TARJETAS MOBILE ───────────────────────────────────────────────────── */}
      {!cargando && !error && asistencias.length > 0 && (
        <div className="md:hidden flex flex-col gap-4">
          {asistencias.map((asistencia) => (
            <div
              key={asistencia.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-gray-800 text-lg">
                    {asistencia.nombre} {asistencia.apellido}
                  </p>
                  <p className="text-xs text-gray-400">{formatearFecha(asistencia.created_at)}</p>
                </div>
                <button
                  onClick={() => eliminarAsistencia(asistencia.id)}
                  className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-md transition"
                  title="Eliminar registro"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {asistencia.telefono && (
                  <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-md border border-amber-100">
                    📞 {asistencia.telefono}
                  </span>
                )}
                {asistencia.colaboracion && (
                  <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md border border-emerald-200 font-medium">
                    ✅ {asistencia.colaboracion}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AsistenciasManager;
