import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import logoImg from '../assets/logo-edr.png';

// Componente a medida para el ícono de TikTok
const TikTokIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
  return (
    <footer id="contacto" className="bg-neutral-900 text-gray-300 pt-16 pb-8 border-t border-neutral-800">
      
      {/* 🪄 CAMBIO CLAVE: max-w-5xl hace que todo el bloque sea más compacto y centrado */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          
          {/* --- COLUMNA 1: LOGO Y DESCRIPCIÓN (Ahora centrada) --- */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <img src={logoImg} alt="Logo" className="h-8 w-auto grayscale brightness-200" />
              <span className="text-xl font-bold text-white tracking-wide">
                Edificadores<span className="text-amber-600">Reino</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Somos una iglesia comprometida con la verdad bíblica y el amor al prójimo.
              Creemos en restaurar familias y transformar nuestro barrio.
            </p>
          </div>

          {/* --- COLUMNA 2: REDES SOCIALES (Siempre centrada) --- */}
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-white font-semibold mb-6">Síguenos en redes</h3>
            <div className="flex justify-center gap-5">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 rounded-full text-gray-400 hover:text-white hover:bg-amber-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 rounded-full text-gray-400 hover:text-white hover:bg-amber-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-800 rounded-full text-gray-400 hover:text-white hover:bg-amber-600 transition-all duration-300 transform hover:scale-110"
                aria-label="TikTok"
              >
                <TikTokIcon size={22} />
              </a>
            </div>
          </div>

          {/* --- COLUMNA 3: CONTACTO (Ahora centrada) --- */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4 text-sm flex flex-col items-center">
              <li className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-amber-600 shrink-0" aria-hidden />
                <span>Japon 2841 - Grand Bourg</span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-amber-600 shrink-0" aria-hidden />
                <a href="tel:+54123456789" className="hover:text-amber-500 transition-colors">
                  +54 1234 56789
                </a>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-amber-600 shrink-0" aria-hidden />
                <a
                  href="mailto:contacto@edificadores.com"
                  className="hover:text-amber-500 transition-colors break-all"
                >
                  contacto@edificadores.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* --- PIE DE PÁGINA (COPYRIGHT) --- */}
        <div className="border-t border-neutral-800 pt-8 flex justify-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Edificadores del Reino.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;