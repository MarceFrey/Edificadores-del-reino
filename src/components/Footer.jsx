import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone, Heart } from 'lucide-react';
import logoImg from '../assets/logo-edr.png';

const exploreLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Nosotros', to: '/#nosotros' },
  { label: 'Áreas', to: '/#ministerios' },
  { label: 'Contacto', to: '/#contacto' },
];

const Footer = () => {
  return (
    <footer id="contacto" className="bg-neutral-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logoImg} alt="Logo" className="h-8 w-auto grayscale brightness-200" />
              <span className="text-xl font-bold text-white tracking-wide">
                Edificadores<span className="text-amber-800">Reino</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Somos una iglesia comprometida con la verdad bíblica y el amor al prójimo.
              Creemos en restaurar familias y transformar nuestro barrio.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-800 transition-colors"
                aria-label="Facebook de Edificadores del Reino (actualizá la URL con tu perfil)"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-800 transition-colors"
                aria-label="Instagram de Edificadores del Reino (actualizá la URL con tu perfil)"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-amber-800 transition-colors"
                aria-label="YouTube de Edificadores del Reino (actualizá la URL con tu canal)"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Explora</h3>
            <ul className="space-y-3">
              {exploreLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-amber-700 hover:translate-x-1 transition-all inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Reuniones</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="font-medium text-white">Reunión General</span>
                <span>Domingos 10:00 AM</span>
                <span>Miercoles 20:00 PM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Niños</span>
                <span>Sábados 10:00 AM</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-white">Jóvenes</span>
                <span>Sábados 21:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0" aria-hidden />
                <span>Japon 2841 - Gran Bourg, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-800 shrink-0" aria-hidden />
                <a href="tel:+54123456789" className="hover:text-amber-700 transition-colors">
                  +54123456789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-800 shrink-0" aria-hidden />
                <a
                  href="mailto:contacto@edificadores.com"
                  className="hover:text-amber-700 transition-colors break-all"
                >
                  contacto@edificadores.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-950 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Edificadores del Reino.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
