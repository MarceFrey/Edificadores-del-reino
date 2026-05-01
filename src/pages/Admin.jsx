import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MessageSquare, LogOut, Users } from 'lucide-react';
import { supabase } from '../supabaseClient';
import EventosManager from '../components/admin/EventosManager';
import PedidosManager from '../components/admin/PedidosManager';
import AsistenciasManager from '../components/admin/AsistenciasManager';

const NAV_ITEMS = [
  { id: 'eventos', label: 'Eventos', Icon: Calendar },
  { id: 'pedidos', label: 'Pedidos de Oración', Icon: MessageSquare },
  { id: 'asistencias', label: 'Asistencias', Icon: Users },
];

const Admin = () => {
  const [user, setUser] = useState(null);
  const [pestañaActiva, setPestañaActiva] = useState('eventos');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 text-lg">Cargando panel...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">

      {/* ── SIDEBAR ── */}
      <aside className="w-full md:w-64 md:min-h-screen bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col shadow-sm">

        {/* Logo / Título del panel */}
        <div className="px-6 py-5 border-b border-gray-100">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1">
            Panel de Administración
          </p>
          <p className="text-sm text-gray-500 truncate">{user.email}</p>
        </div>

        {/* Navegación */}
        <nav className="flex flex-row md:flex-col gap-1 p-3 flex-grow overflow-x-auto md:overflow-x-visible">
          {NAV_ITEMS.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setPestañaActiva(id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition whitespace-nowrap w-full text-left
                ${pestañaActiva === id
                  ? 'bg-amber-50 text-amber-700 border border-amber-200'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
            >
              <Icon size={18} className={pestañaActiva === id ? 'text-amber-600' : 'text-gray-400'} />
              {label}
            </button>
          ))}
        </nav>

        {/* Botón Cerrar Sesión */}
        <div className="p-3 border-t border-gray-100 hidden md:block">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition"
          >
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* ── ÁREA PRINCIPAL ── */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">

        {/* Barra superior mobile: logout */}
        <div className="flex justify-end mb-4 md:hidden">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition"
          >
            <LogOut size={16} />
            Cerrar Sesión
          </button>
        </div>

        {/* Renderizado condicional según pestaña activa */}
        {pestañaActiva === 'eventos' && <EventosManager />}
        {pestañaActiva === 'pedidos' && <PedidosManager />}
        {pestañaActiva === 'asistencias' && <AsistenciasManager />}
      </main>

    </div>
  );
};

export default Admin;
