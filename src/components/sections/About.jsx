import kimImg from '../../assets/kim.jpeg'; // Asegúrate de mover la foto a assets

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 scroll-mt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        {/* Imagen con efectos decorativos */}
        <div className="md:w-1/2 reveal-left">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#9bd3dd]/20 rounded-[3rem] -rotate-3 scale-95"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-square shadow-2xl border-8 border-white group bg-gray-200">
              <img 
                src={kimImg} 
                alt="Psicóloga Kim Zermeño" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="md:w-1/2 reveal-right">
          <h2 className="text-4xl md:text-5xl mb-6 font-serif">Psic. Kim Zermeño</h2>
          <div className="h-1 w-20 bg-[#a07bb5] mb-8"></div>
          <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
            <p>
              Soy una psicóloga apasionada por el bienestar integral de los artistas. 
              Entiendo que la danza requiere una disciplina inmensa, pero también 
              un vínculo sano con el cuerpo y las emociones.
            </p>
            <p>
              Mi enfoque combina la <strong>Terapia Cognitivo Conductual</strong> con una visión <strong>humanista</strong>, 
              creando un proceso de terapia respetuoso y centrado en ti.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;