import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo-edr.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', path: '/' }, 
    { name: 'Eventos', path: '#eventos' },
    { name: 'Horarios', path: '#horarios' },
    { name: 'Ubicacion', path: '#mapas'},
    //{ name: 'Ministerios', path: '#ministerios' },
    //{ name: 'Donaciones', path: '#donaciones' },
    //{ name: 'Contacto', path: '#contacto' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">

          <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={logoImg} 
              alt="Logo Edificadores del Reino" 
              className="h-8 w-auto object-contain" 
            />
            <span className="text-ellipsis font-bold text-amber-950 tracking-wide">
              Edificadores del Reino
            </span>
          </Link>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="text-amber-950 hover:text-amber-900 hover:bg-amber-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <Link 
                to="/login" 
                className="bg-amber-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-950 transition shadow-sm"
              >
                Acceso Miembros
              </Link>   
            </div>
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <div className="-mr-2 flex md:hidden">
            <Link to="/login"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-amber-900 hover:bg-gray-100 focus:outline-none transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Link>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 hover:text-amber-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-amber-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-950 transition">
              Acceso Miembros
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;