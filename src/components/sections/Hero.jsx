import heroImg from '../../assets/hero.jpeg';

const Hero = () => {
  return (
    <header id="inicio" className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 z-10 reveal-left">
          <div className="flex items-center space-x-2 mb-6">
            {/* Línea decorativa rosa */}
            <span className="w-8 h-[2px] bg-[#fb91a3]"></span>
            <span className="text-gray-900 font-bold text-[10px] uppercase tracking-[0.25em]">Psicología & Movimiento</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight text-gray-900 font-serif">
            Tu bienestar es el centro de tu <span className="text-[#a07bb5] italic">danza.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed italic">
            "No hay danza sin salud y no hay salud sin salud mental."
          </p>
          
          {/* --- ZONA DE BOTONES NUEVA --- */}
          <div className="flex flex-col sm:flex-row gap-4">
            
            {/* Botón 1: Agendar Cita (Baja al Footer) */}
            <a 
              href="#contacto" 
              className="btn-shimmer bg-[#a07bb5] text-white px-8 py-4 rounded-full text-center font-bold shadow-xl shadow-[#a07bb5]/20 hover:scale-105 transition active:scale-95 flex items-center justify-center cursor-pointer"
            >
              Agendar Cita
            </a>

            {/* Botón 2: WhatsApp (Estilo Borde/Outline) */}
            <a 
              href="https://wa.me/523324388415" 
              target="_blank" 
              rel="noreferrer" 
              className="group bg-white text-[#a07bb5] border-2 border-[#a07bb5] px-8 py-4 rounded-full text-center font-bold hover:bg-[#a07bb5] hover:text-white transition-colors active:scale-95 flex items-center justify-center"
            >
              Pedir Informes <i className="fab fa-whatsapp ml-2 group-hover:text-white transition-colors"></i>
            </a>

          </div>
        </div>
        
        <div className="md:w-1/2 relative reveal-right">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-200 aspect-[4/5] max-w-sm mx-auto transform transition-transform duration-700 hover:rotate-1">
            <img src={heroImg} alt="Bailarina" className="object-cover w-full h-full scale-105 hover:scale-100 transition-transform duration-1000" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;