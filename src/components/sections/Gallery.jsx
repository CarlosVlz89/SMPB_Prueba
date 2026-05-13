import { galleryItems } from '../../data/content';

// IMPORTANTE: Importamos los archivos multimedia desde assets para que Vite los procese
import video1 from '../../assets/galeria1.mp4';
import img2 from '../../assets/galeria2.webp';
import img3 from '../../assets/galeria3.webp';
import img4 from '../../assets/galeria4.webp';

// Mapeamos los IDs del archivo de datos con los archivos importados
const mediaMap = {
  1: video1,
  2: img2,
  3: img3,
  4: img4
};

const Gallery = () => {
  return (
    <section id="galeria" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Encabezado de la sección */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 reveal">
          <div className="text-left">
            <span className="text-[#f49b70] font-bold text-[10px] uppercase tracking-[0.25em] mb-2 block">
              Creciendo juntos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">Comunidad y Talleres</h2>
          </div>
          <p className="text-gray-500 max-w-sm italic">
            "Momentos compartidos en charlas, talleres y el día a día."
          </p>
        </div>
        
        {/* Grid de Galería */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {galleryItems.map((item) => {
            // Obtenemos el archivo real usando el mapa
            const sourceFile = mediaMap[item.id];

            return (
              <div 
                key={item.id} 
                className={`reveal gallery-item ${item.aspect} shadow-lg relative overflow-hidden rounded-[1.5rem] group cursor-pointer bg-gray-200`}
              >
                {/* Lógica condicional: ¿Es video o imagen? */}
                {item.type === 'video' ? (
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  >
                    <source src={sourceFile} type="video/mp4" />
                    Tu navegador no soporta videos.
                  </video>
                ) : (
                  <img 
                    src={sourceFile} 
                    alt={item.alt} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                  />
                )}
                
                {/* Overlay con efecto al pasar el mouse */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#a07bb5]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;