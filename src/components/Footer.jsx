import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Heart } from 'lucide-react';
import logoImg from '../assets/logo-edr.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid de 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COLUMNA 1: IDENTIDAD */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="Logo" className="h-8 w-auto grayscale brightness-200" />
              <span className="text-xl font-bold text-white tracking-wide">
                Edificadores<span className="text-blue-500">Reino</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Somos una iglesia comprometida con la verdad bíblica y el amor al prójimo. 
              Creemos en restaurar familias y transformar nuestra ciudad.
            </p>
            {/* Redes Sociales */}
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explora</h3>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros', 'Ministerios', 'Sermones', 'Donar'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-white hover:translate-x-1 transition-all inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: HORARIOS */}
          <div>
            <h3 className="text-white font-semibold mb-6">Reuniones</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="font-medium text-white">Reunión General</span>
                <span>Domingos 10:00 AM y 19:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Oración</span>
                <span>Martes 20:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Jóvenes</span>
                <span>Sábados 21:00 PM</span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: CONTACTO */}
          <div>
            <h3 className="text-white font-semibold mb-6">Visítanos</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>Av. Principal 1234, Ciudad, Provincia, País.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>contacto@edificadores.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* LÍNEA DIVISORIA Y COPYRIGHT */}
        {/* Cambio clave: Usamos 'justify-center' y un 'gap-6' para separarlos en el centro */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs text-gray-500">
          
          <p>© {new Date().getFullYear()} Edificadores del Reino.</p>
          
          {/* Pequeño separador visual (solo en PC) */}
          <span className="hidden md:block text-gray-700">|</span>
          
          {/* TU FIRMA (Ahora segura en el centro) */}
          <div className="flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
            <span>Desarrollado con</span>
            <Heart size={12} className="text-red-500 fill-current" />
            <span>por</span>
            <a href="#" className="font-medium text-blue-400 hover:underline">
              Marcelo Frey
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;