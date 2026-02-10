import ServiceCard from '../ui/ServiceCard';
import { especialidades } from '../../data/content';

const Specialties = () => {
  return (
    <section id="especialidades" className="py-24 relative z-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 reveal">
        <h2 className="text-4xl md:text-5xl mb-6 font-serif">Acompañamiento Integral</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">Un espacio diseñado para bailarines y artistas que buscan salud emocional.</p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {especialidades.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Specialties;