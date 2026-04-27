import { useEffect, useState } from 'react';
import { MessageSquare, RefreshCw, Trash2 } from 'lucide-react'; // Agregamos Trash2 por si quieres borrar
import { supabase } from '../../supabaseClient';

const PedidosManager = () => {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerPedidos();
  }, []);

  // ── READ ──────────────────────────────────────────────────────────────────
const obtenerPedidos = async () => {
    setCargando(true);
    setError(null);

    const { data, error } = await supabase
      .from('pedidos_oracion')
      // Quitamos 'created_at' de la lista
      .select('id, nombre, apellido, telefono, edad, pedido'); 

    if (error) {
      console.error('Error al traer pedidos de oración:', error);
      setError('No se pudieron cargar los pedidos.');
    } else {
      setPedidos(data);
    }
    setCargando(false);
  };

  // ── DELETE (Opcional, pero muy útil para el admin) ───────────────────────
  const eliminarPedido = async (id) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este pedido?')) return;

    const { error } = await supabase
      .from('pedidos_oracion')
      .delete()
      .eq('id', id);

    if (error) {
      alert('Error al eliminar');
    } else {
      setPedidos(pedidos.filter(p => p.id !== id));
    }
  };

  // ── HELPERS ───────────────────────────────────────────────────────────────
  const formatearFecha = (isoString) => {
    if (!isoString) return '—';
    return new Date(isoString).toLocaleDateString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
            <MessageSquare size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Pedidos de Oración</h2>
        </div>
        <button
          onClick={obtenerPedidos}
          disabled={cargando}
          className="flex items-center gap-2 text-amber-700 border border-amber-300 bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100 transition text-sm font-medium disabled:opacity-50"
        >
          <RefreshCw size={16} className={cargando ? 'animate-spin' : ''} />
          {cargando ? 'Cargando...' : 'Actualizar'}
        </button>
      </div>

      {/* Contador y Estado */}
      {!cargando && !error && (
        <p className="text-sm text-gray-500 mb-4 bg-gray-50 p-2 rounded-md inline-block">
          Total: <span className="font-bold text-amber-700">{pedidos.length}</span> pedidos recibidos.
        </p>
      )}

      {/* Tabla Desktop */}
      {!cargando && !error && pedidos.length > 0 && (
        <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-amber-50 text-amber-800 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-5 py-3 font-semibold">Fecha/Hora</th>
                <th className="px-5 py-3 font-semibold">Nombre Completo</th>
                <th className="px-5 py-3 font-semibold">Edad</th>
                <th className="px-5 py-3 font-semibold">Teléfono</th>
                <th className="px-5 py-3 font-semibold">Pedido de Oración</th>
                <th className="px-5 py-3 font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pedidos.map((pedido) => (
                <tr key={pedido.id} className="hover:bg-amber-50/30 transition">
                  <td className="px-5 py-4 text-gray-400 whitespace-nowrap">
                    {formatearFecha(pedido.created_at)}
                  </td>
                  <td className="px-5 py-4 font-medium text-gray-800">
                    {pedido.nombre} {pedido.apellido}
                  </td>
                  <td className="px-5 py-4 text-gray-600">{pedido.edad || '—'}</td>
                  <td className="px-5 py-4 text-gray-600">{pedido.telefono}</td>
                  <td className="px-5 py-4 text-gray-700 italic">
                    "{pedido.pedido}"
                  </td>
                  <td className="px-5 py-4">
                    <button 
                      onClick={() => eliminarPedido(pedido.id)}
                      className="text-red-400 hover:text-red-600 transition"
                      title="Eliminar pedido"
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

      {/* Vista Mobile (Tarjetas) */}
      <div className="md:hidden flex flex-col gap-4">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-bold text-gray-800 text-lg">
                  {pedido.nombre} {pedido.apellido}
                </p>
                <p className="text-xs text-gray-400">{formatearFecha(pedido.created_at)}</p>
              </div>
              <button 
                onClick={() => eliminarPedido(pedido.id)}
                className="p-2 text-red-400"
              >
                <Trash2 size={18} />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-md border border-amber-100">
                  📞 {pedido.telefono}
                </span>
                {pedido.edad && (
                  <span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-md border border-gray-100">
                    {pedido.edad} años
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 bg-amber-50/50 p-3 rounded-xl italic border-l-4 border-amber-400">
                {pedido.pedido}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PedidosManager;