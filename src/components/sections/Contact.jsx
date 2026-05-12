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
            
            {/* --- CONSOLIDATED CTA --- */}
            <div className="flex flex-col md:flex-row items-center gap-12 text-left mt-8">
              
              <div className="md:w-3/5">
                <h3 className="text-3xl md:text-4xl mb-6 font-serif text-gray-800">
                  ¿Lista para dar el primer paso?
                </h3>
                <p className="text-gray-500 mb-8 text-lg leading-relaxed max-w-xl">
                  Para tu comodidad, gestiono todas las citas de manera personal a través de WhatsApp. Ya sea que prefieras una sesión <strong>presencial</strong> en Guadalajara o la flexibilidad de la modalidad <strong>online</strong>.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                   <div className="flex items-center gap-3 text-morado font-bold text-sm bg-morado/10 border border-morado/20 px-6 py-3 rounded-2xl">
                     <div className="w-8 h-8 bg-morado text-white rounded-lg flex items-center justify-center shadow-lg shadow-morado/20">
                       <i className="fa-solid fa-location-dot"></i>
                     </div>
                     Sesión Presencial
                   </div>
                   <div className="flex items-center gap-3 text-azul font-bold text-sm bg-azul/10 border border-azul/20 px-6 py-3 rounded-2xl">
                     <div className="w-8 h-8 bg-azul text-white rounded-lg flex items-center justify-center shadow-lg shadow-azul/20">
                       <i className="fa-solid fa-video"></i>
                     </div>
                     Sesión Online
                   </div>
                </div>
              </div>

              <div className="md:w-2/5 w-full flex justify-center md:justify-end">
                <a 
                  href={bookingLinks.whatsapp} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group relative w-full md:w-auto overflow-hidden rounded-[2.5rem] p-[2px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-green-500/20"
                >
                  {/* Gradiente animado en el borde */}
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4ade80_0%,#16a34a_50%,#4ade80_100%)]" />
                  
                  <div className="relative flex flex-col items-center gap-4 bg-white/90 backdrop-blur-xl hover:bg-white/100 px-10 py-10 rounded-[2.4rem] transition-all duration-300">
                    <div className="w-20 h-20 bg-green-500 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-green-500/30 transform group-hover:rotate-12 transition-transform duration-500">
                      <i className="fa-brands fa-whatsapp text-5xl"></i>
                    </div>
                    <div className="text-center">
                      <span className="block text-2xl font-bold text-gray-800 mb-1">Mandar WhatsApp</span>
                      <span className="block text-sm text-gray-500 font-medium">Respuesta directa y humana</span>
                    </div>
                    <div className="w-full h-[1px] bg-gray-100 my-2"></div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-green-600">Disponible ahora</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;