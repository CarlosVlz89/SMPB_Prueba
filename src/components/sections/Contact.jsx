import { bookingLinks } from '../../data/content';

const Contact = () => {
  return (
    <section id="contacto" className="py-24 relative z-10 scroll-mt-20">
      
      {/* --- EL GRAN PANEL DE CRISTAL --- */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl reveal">
          
          {/* Manchas decorativas internas (sutiles) */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
            <div className="blob bg-morado w-64 h-64 rounded-full top-[-50px] left-[-50px] mix-blend-multiply filter blur-3xl"></div>
            <div className="blob bg-naranja w-64 h-64 rounded-full bottom-[-50px] right-[-50px] mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <span className="text-morado font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
              Agenda tu espacio
            </span>
            <h2 className="text-4xl md:text-5xl mb-6 font-serif text-gray-800">
              Empieza tu proceso hoy.
            </h2>
            <p className="text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
              Elige la modalidad que mejor se adapte a tu ritmo de vida y da el primer paso hacia tu bienestar.
            </p>
            
            {/* --- GRID DE OPCIONES --- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Opción 1: Presencial */}
              <a 
                href={bookingLinks.presencial} 
                target="_blank" 
                rel="noreferrer"
                className="group bg-white/50 border border-white/60 p-8 rounded-[2rem] hover:bg-white hover:border-morado/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-morado/10 text-morado rounded-2xl flex items-center justify-center mb-6 group-hover:bg-morado group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  <i className="fa-solid fa-location-dot text-2xl"></i>
                </div>
                <h3 className="font-bold text-xl mb-2 font-serif text-gray-800">Presencial</h3>
                <p className="text-sm text-gray-500 mb-4">Sesión en consultorio<br/>(Guadalajara, Jal)</p>
                <span className="text-xs font-bold text-morado border border-morado/20 px-4 py-2 rounded-full group-hover:bg-morado group-hover:text-white transition-colors">
                  Reservar Ahora
                </span>
              </a>

              {/* Opción 2: Online */}
              <a 
                href={bookingLinks.online} 
                target="_blank" 
                rel="noreferrer"
                className="group bg-white/50 border border-white/60 p-8 rounded-[2rem] hover:bg-white hover:border-azul/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-azul/10 text-azul rounded-2xl flex items-center justify-center mb-6 group-hover:bg-azul group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  <i className="fa-solid fa-video text-2xl"></i>
                </div>
                <h3 className="font-bold text-xl mb-2 font-serif text-gray-800">Online</h3>
                <p className="text-sm text-gray-500 mb-4">Videollamada segura<br/>(Google Meet)</p>
                <span className="text-xs font-bold text-azul border border-azul/20 px-4 py-2 rounded-full group-hover:bg-azul group-hover:text-white transition-colors">
                  Reservar Ahora
                </span>
              </a>

              {/* Opción 3: WhatsApp */}
              <a 
                href={bookingLinks.whatsapp} 
                target="_blank" 
                rel="noreferrer"
                className="group bg-white/50 border border-white/60 p-8 rounded-[2rem] hover:bg-white hover:border-green-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col items-center cursor-pointer"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                  <i className="fa-brands fa-whatsapp text-3xl"></i>
                </div>
                <h3 className="font-bold text-xl mb-2 font-serif text-gray-800">WhatsApp</h3>
                <p className="text-sm text-gray-500 mb-4">¿Tienes dudas?<br/>Escríbeme directo.</p>
                <span className="text-xs font-bold text-green-600 border border-green-200 px-4 py-2 rounded-full group-hover:bg-green-500 group-hover:text-white transition-colors">
                  Enviar Mensaje
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;