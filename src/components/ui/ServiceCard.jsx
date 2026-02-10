const ServiceCard = ({ icon, color, shadow, title, desc }) => {
  return (
    // CAMBIO: Quitamos bg-[#f8eddb]/40 y ponemos 'glass glass-hover'
    <div className="reveal group p-10 rounded-[2.5rem] glass glass-hover transition-all duration-500 cursor-default">
      
      {/* Icono con gradiente sutil */}
      <div className={`w-16 h-16 ${color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg ${shadow} transform group-hover:rotate-12 transition-transform duration-500 bg-opacity-90`}>
        <i className={`fa-solid ${icon} text-2xl`}></i>
      </div>
      
      <h3 className="text-2xl mb-4 font-bold font-serif text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      
      {/* Brillo decorativo extra */}
      <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity"></div>
    </div>
  );
};

export default ServiceCard;