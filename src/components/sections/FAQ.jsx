import { faqItems } from '../../data/content';

const FAQ = () => {
  return (
    <section className="py-20 bg-white reveal relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl italic mb-10 text-gray-800 font-serif">
          "Un espacio para todos, más allá de la danza."
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className={`p-8 bg-[#f8eddb]/30 rounded-3xl border-l-8 ${item.borderColor} hover:bg-[#f8eddb]/50 transition-colors`}
            >
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;