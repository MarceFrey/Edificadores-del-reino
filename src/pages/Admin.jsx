import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { LogOut, Plus, Trash2, Edit2, Image as ImageIcon } from 'lucide-react';

const Admin = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);
  
  const [modalAbierto, setModalAbierto] = useState(false);
  const [eventoActual, setEventoActual] = useState({ title: '', date: '', time: '', image: '' });
  const [archivoFlyer, setArchivoFlyer] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
        obtenerEventos();
      }
    };
    checkUser();
  }, [navigate]);

  // --- FUNCIONES DEL CRUD ---

  // READ: Obtener eventos
  const obtenerEventos = async () => {
    setCargando(true);
    const { data, error } = await supabase
      .from('eventos') 
      .select('*');

    if (error) {
      console.error("Error al traer eventos:", error);
    } else {
      setEventos(data);
    }
    setCargando(false);
  };

  // DELETE: Eliminar un evento
  const eliminarEvento = async (id) => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este evento?");
    if (confirmar) {
      const { error } = await supabase.from('eventos').delete().eq('id', id);
      if (!error) {
        obtenerEventos(); // Recargamos la lista
      } else {
        alert("Error al eliminar");
      }
    }
  };

  // PREPARACIÓN PARA CREAR/EDITAR
  const abrirModalNuevo = () => {
    setEventoActual({ title: '', date: '', time: '', image: '' });
    setArchivoFlyer(null);
    setModalAbierto(true);
  };

  const guardarEvento = async (e) => {
    e.preventDefault();
    console.log("Guardando evento...", eventoActual, "Archivo:", archivoFlyer);
  };

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
          <button 
            onClick={abrirModalNuevo}
            className="flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition shadow-sm"
          >
            <Plus size={20} /> Nuevo Evento
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* ESTADO DE CARGA Y ESTADO VACÍO */}
          {cargando ? (
            <div className="p-6 text-center text-gray-500 py-20">Cargando eventos...</div>
          ) : eventos.length === 0 ? (
            <div className="p-6 text-center text-gray-500 py-20">
              <p className="text-lg">Aún no hay eventos creados.</p>
              <p className="text-sm">Haz clic en "Nuevo Evento" para comenzar.</p>
            </div>
          ) : (
            /* MAPEO DE EVENTOS REALES */
            eventos.map((evento) => (
              <div key={evento.id} className="border-t border-gray-100 p-4 flex justify-between items-center hover:bg-gray-50 transition">
                <div className="flex items-center gap-4">
                  {evento.image ? (
                    <img src={evento.image} alt={evento.title} className="w-12 h-12 rounded-lg object-cover bg-gray-200" />
                  ) : (
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
                      <ImageIcon size={20} />
                    </div>
                  )}
                  
                  <div>
                    <h3 className="font-bold text-gray-800">{evento.title || "Sin título"}</h3>
                    <p className="text-sm text-gray-500">
                      {evento.date || "Fecha sin definir"} {evento.time && `| ${evento.time} hs`}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition">
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => eliminarEvento(evento.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-md transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      {/* MODAL / FORMULARIO PREPARADO (Oculto por defecto) */}
      {modalAbierto && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Crear / Editar Evento</h3>
            
            <form onSubmit={guardarEvento} className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Título del evento"
                className="p-2 border rounded-md focus:ring-amber-500 focus:border-amber-500"
                value={eventoActual.title} 
                onChange={(e) => setEventoActual({...eventoActual, title: e.target.value})} 
              />
              
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="text-xs text-gray-500 mb-1 block">Fecha</label>
                  <input 
                    type="date" 
                    className="p-2 border rounded-md w-full focus:ring-amber-500 focus:border-amber-500"
                    value={eventoActual.date}
                    onChange={(e) => setEventoActual({...eventoActual, date: e.target.value})}
                  />
                </div>
                <div className="w-1/2">
                  <label className="text-xs text-gray-500 mb-1 block">Hora</label>
                  <input 
                    type="time" 
                    className="p-2 border rounded-md w-full focus:ring-amber-500 focus:border-amber-500"
                    value={eventoActual.time}
                    onChange={(e) => setEventoActual({...eventoActual, time: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center mt-2">
                <label className="cursor-pointer text-amber-600 font-medium hover:text-amber-700">
                  Subir Flyer
                  <input 
                    type="file" 
                    accept="image/*"
                    className="hidden" 
                    onChange={(e) => setArchivoFlyer(e.target.files[0])}
                  />
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  {archivoFlyer ? archivoFlyer.name : "Formatos: JPG, PNG"}
                </p>
              </div>

              <div className="flex gap-2 justify-end mt-4">
                <button 
                  type="button" 
                  onClick={() => setModalAbierto(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition shadow-sm"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Admin;