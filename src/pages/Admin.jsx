import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { LogOut, Plus, Trash2, Edit2 } from 'lucide-react';

const Admin = () => {
  const [user, setUser] = useState(null);
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

  if (!user) return <p className="text-center mt-20">Cargando panel...</p>;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Topbar del Admin */}
      <nav className="bg-amber-950 text-white p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl">Panel de Edificadores</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-amber-200 hidden sm:block">{user.email}</span>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 bg-amber-900 hover:bg-amber-800 px-3 py-1.5 rounded-md transition text-sm"
            >
              <LogOut size={16} /> Salir
            </button>
          </div>
        </div>
      </nav>

      {/* Contenedor Principal */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Tus Eventos</h2>
          <button className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition shadow-sm">
            <Plus size={20} /> Nuevo Evento
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 text-center text-gray-500 py-20">
            {/* Aquí luego mapearemos los eventos con supabase */}
            <p className="text-lg">Aún no hay eventos creados.</p>
            <p className="text-sm">Haz clic en "Nuevo Evento" para comenzar.</p>
          </div>
          
          <div className="border-t border-gray-100 p-4 flex justify-between items-center hover:bg-gray-50 transition">
             <div>
               <h3 className="font-bold text-gray-800">Retiro de Jóvenes</h3>
               <p className="text-sm text-gray-500">Sábado 15 de Octubre - 10:00 AM</p>
             </div>
             <div className="flex gap-2">
               <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition">
                 <Edit2 size={18} />
               </button>
               <button className="p-2 text-red-600 hover:bg-red-50 rounded-md transition">
                 <Trash2 size={18} />
               </button>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Admin;