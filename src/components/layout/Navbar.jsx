import { useState } from 'react';
import { navLinks } from '../../data/content';

// IMPORTA TUS IMÁGENES
import logoIcon from '../../assets/logo-icon.png'; 
import logoText from '../../assets/logo-text.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/40 transition-all duration-300">
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
        
        {/* --- LOGO --- */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img 
            src={logoIcon} 
            alt="Logotipo Bailarina" 
            className="h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
          />
          <img 
            src={logoText} 
            alt="Salud Mental para Bailarines" 
            className="h-10 w-auto object-contain mt-2 transition-opacity duration-300 group-hover:opacity-80" 
          />
        </a>
        
        {/* --- MENÚ DE ESCRITORIO --- */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-xs uppercase tracking-widest text-gray-500">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-morado transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-morado after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
          <a 
            href="#contacto" 
            className="btn-shimmer bg-morado text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-morado/30 transition-all font-bold cursor-pointer"
          >
            Agendar Cita
          </a>
        </div>

        {/* --- BOTÓN HAMBURGUESA (Móvil) --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-morado p-2 focus:outline-none transition-transform active:scale-95"
          aria-label="Menu"
        >
          {/* Cambia el icono suavemente */}
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl transition-all duration-300 ${isOpen ? 'rotate-90' : ''}`}></i>
        </button>
      </div>
      
      {/* --- MENÚ MÓVIL REDISEÑADO --- */}
      {/* Usamos 'absolute' para que flote sobre todo y no empuje el contenido */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20 transition-all duration-500 ease-in-out origin-top ${isOpen ? 'max-h-screen opacity-100 py-12' : 'max-h-0 opacity-0 py-0 overflow-hidden'}`}>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif text-gray-800 hover:text-morado transition-colors duration-300 relative group"
            >
              {/* Texto del enlace */}
              {link.name}
              
              {/* Pequeño punto decorativo al hacer hover */}
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-rosa rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
          ))}

          {/* Línea divisoria sutil */}
          <div className="w-16 h-[1px] bg-gray-200 my-2"></div>

          <a 
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="btn-shimmer bg-morado text-white px-10 py-4 rounded-full text-center shadow-lg shadow-morado/20 font-bold text-lg tracking-wide hover:scale-105 transition-transform"
          >
            Agendar Cita
          </a>

          {/* Redes sociales rápidas en el menú móvil */}
          <div className="flex space-x-6 pt-4 text-gray-400">
             <a href="https://www.instagram.com/saludmentalparabailarines" target="_blank" className="hover:text-rosa transition-colors"><i className="fab fa-instagram text-2xl"></i></a>
             <a href="https://wa.me/523324388415" target="_blank" className="hover:text-green-500 transition-colors"><i className="fab fa-whatsapp text-2xl"></i></a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;