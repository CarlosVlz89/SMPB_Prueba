import consultorioImg from '../../assets/consultorio.png';

const Consultorio = () => {
  return (
    <section id="consultorio" className="py-24 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl reveal">
          
          {/* Mancha decorativa */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
            <div className="blob bg-rosa w-96 h-96 rounded-full top-[-100px] left-[-100px] mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            
            {/* Texto */}
            <div className="md:w-1/2 text-left">
              <span className="text-rosa font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
                Tu espacio seguro
              </span>
              <h2 className="text-4xl md:text-5xl mb-6 font-serif text-gray-800">
                Un lugar diseñado para tu paz mental.
              </h2>
              <p className="text-gray-500 mb-6 text-lg leading-relaxed">
                Si decides tomar tu proceso en modalidad presencial, te recibiré en un consultorio cálido, privado y pensado especialmente para que te sientas en confianza desde el primer momento.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Un entorno donde podemos poner en pausa el ruido exterior y enfocarnos completamente en ti y en tu bienestar.
              </p>
              
              <a 
                href="#contacto" 
                className="inline-block text-rosa font-bold uppercase tracking-widest text-sm border-b-2 border-rosa pb-1 hover:text-[#e4768b] hover:border-[#e4768b] transition-colors"
              >
                Conoce la ubicación <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Imagen */}
            <div className="md:w-1/2 w-full relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 aspect-square md:aspect-[4/3] group">
                <img 
                  src={consultorioImg} 
                  alt="Vista interior del consultorio" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Etiqueta flotante */}
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl border border-gray-100 transform -rotate-3 animate-float">
                <p className="font-serif text-morado font-bold flex items-center gap-2">
                  <i className="fa-solid fa-couch"></i> Guadalajara, Jal.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultorio;
