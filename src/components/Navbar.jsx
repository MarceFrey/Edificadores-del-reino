import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Iconos seguros
import logoImg from'../assets/logo-edr.png';

const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el estado
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Areas', href: '#' },
    { name: 'Predicas', href: '#' },
    { name: 'Contacto', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img 
              src={logoImg} 
              alt="Logo Edificadores del Reino" 
              className="h-10 w-auto object-contain" // h-10 define la altura, w-auto mantiene la proporción
            />
            <span className="text-xl font-bold text-amber-950 tracking-wide">
              Edificadores del Reino
            </span>
          </div>

          {/* MENÚ DE ESCRITORIO (Oculto en móvil) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-amber-950 hover:text-amber-900 hover:bg-amber-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-amber-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-950 transition shadow-sm">
                Acceso Miembros
              </button>
            </div>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {/* Renderizado condicional: Solo se muestra si isOpen es true */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Acceso Miembros
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;