import { useState } from 'react';
import { socialLinks } from '../../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // ESTADOS PARA LOS MODALES
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Link a Google Maps
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Av.+de+los+Científicos+659,+Colonia+Colinas+de+la+Normal,+Guadalajara,+Jalisco";

  // --- CONTENIDO 1: AVISO DE PRIVACIDAD ---
  const PrivacyContent = () => (
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p><strong>Responsable de la protección de sus datos personales:</strong><br/>
      Psic. Kim Zermeño, con domicilio en Av. de los Científicos 659, Colonia Colinas de la Normal, Guadalajara, Jalisco, es responsable del uso y protección de sus datos personales.</p>
      
      <p><strong>¿Para qué fines utilizaremos sus datos personales?</strong><br/>
      Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
      <ul className="list-disc pl-5">
        <li>Agendar, confirmar y gestionar sus citas psicológicas.</li>
        <li>Proveer los servicios profesionales de salud mental requeridos.</li>
        <li>Facturación y cobro.</li>
        <li>Mantener comunicación vía WhatsApp o correo electrónico sobre su tratamiento.</li>
      </ul>

      <p><strong>Derechos ARCO:</strong><br/>
      Usted tiene derecho a conocer qué datos personales tenemos de usted (Acceso), solicitar la corrección de su información (Rectificación), que la eliminemos de nuestros registros (Cancelación), así como oponerse al uso de sus datos (Oposición).</p>
      
      <p>Para ejercer estos derechos, presente su solicitud a través de nuestro contacto oficial.</p>
    </div>
  );

  // --- CONTENIDO 2: TÉRMINOS Y CONDICIONES (Redacción Nueva) ---
  const TermsContent = () => (
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p><strong>1. Aceptación de los Términos</strong><br/>
      Al acceder y utilizar el sitio web "Salud Mental para Bailarines", usted acepta cumplir con los siguientes términos y condiciones. Si no está de acuerdo, le rogamos no utilizar este sitio.</p>

      <p><strong>2. Uso Informativo (No es consejo médico)</strong><br/>
      El contenido de este sitio web (textos, videos, blog) es puramente educativo e informativo. <strong>No sustituye el diagnóstico, tratamiento o consejo de un profesional de la salud mental.</strong> Si usted se encuentra en una situación de emergencia o crisis, por favor comuníquese inmediatamente a los servicios de emergencia de su localidad (911) o acuda al hospital más cercano.</p>

      <p><strong>3. Propiedad Intelectual</strong><br/>
      Todo el contenido mostrado en este sitio, incluyendo logotipos, imágenes, textos y diseño, es propiedad intelectual de la Psic. Kim Zermeño. Queda prohibida su reproducción, venta o distribución sin autorización previa por escrito.</p>

      <p><strong>4. Políticas de Citas y Cancelaciones</strong><br/>
      La reserva de citas está sujeta a disponibilidad. Las cancelaciones deberán realizarse con al menos 24 horas de anticipación para evitar cargos, según las políticas internas del consultorio que se le informarán al momento de agendar.</p>

      <p><strong>5. Jurisdicción</strong><br/>
      Para la interpretación y cumplimiento de los presentes términos, las partes se someten a la jurisdicción de los tribunales de la ciudad de Guadalajara, Jalisco, renunciando a cualquier otro fuero que pudiera corresponderles.</p>
    </div>
  );

  return (
    <>
      <footer className="bg-[#8e6ba0] text-white pt-16 pb-8 relative z-30 text-sm font-sans">
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* COLUMNA 1: MARCA */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-4">Salud Mental<br/>para Bailarines</h3>
            <p className="opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0">
              Acompañamiento psicológico especializado para artistas del movimiento. Tu salud mental es tan importante como tu técnica.
            </p>
          </div>

          {/* COLUMNA 2: UBICACIÓN */}
          <div className="text-center md:text-left">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-xs opacity-70">Ubicación</h4>
            <a href={mapLink} target="_blank" rel="noreferrer" className="group block opacity-90 hover:opacity-100 transition-opacity">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <i className="fa-solid fa-map-location-dot text-2xl text-rosa mt-1 group-hover:scale-110 transition-transform"></i>
                <div className="leading-relaxed">
                  <p className="font-bold">Consultorio Privado</p>
                  <p>Av. de los Científicos 659,</p>
                  <p>Col. Colinas de la Normal,</p>
                  <p>Guadalajara, Jalisco.</p>
                  <span className="text-rosa text-xs font-bold mt-2 inline-block border-b border-rosa">Ver en Google Maps</span>
                </div>
              </div>
            </a>
          </div>

          {/* COLUMNA 3: LEGAL Y REDES */}
          <div className="text-center md:text-left">
            <h4 className="font-bold uppercase tracking-widest mb-6 text-xs opacity-70">Legal & Contacto</h4>
            
            <ul className="space-y-3 mb-8 opacity-80">
              <li>
                <button onClick={() => setShowPrivacy(true)} className="hover:text-rosa transition-colors hover:underline text-left">
                  Aviso de Privacidad
                </button>
              </li>
              <li>
                <button onClick={() => setShowTerms(true)} className="hover:text-rosa transition-colors hover:underline text-left">
                  Términos y Condiciones
                </button>
              </li>
            </ul>

            <div className="flex justify-center md:justify-start space-x-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-[#8e6ba0] transition-all duration-300">
                  <i className={`fa-brands ${link.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center opacity-40 text-xs uppercase tracking-widest">
          <p>© {currentYear} Psic. Kim Zermeño — Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* --- MODAL DE PRIVACIDAD --- */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl relative flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-serif text-2xl text-gray-800 font-bold">Aviso de Privacidad</h3>
              <button onClick={() => setShowPrivacy(false)} className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-8 overflow-y-auto"><PrivacyContent /></div>
            <div className="p-6 border-t border-gray-100 text-right bg-gray-50">
              <button onClick={() => setShowPrivacy(false)} className="bg-morado text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#8e6ba0] transition-colors">Entendido</button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL DE TÉRMINOS Y CONDICIONES --- */}
      {showTerms && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl relative flex flex-col">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <h3 className="font-serif text-2xl text-gray-800 font-bold">Términos y Condiciones</h3>
              <button onClick={() => setShowTerms(false)} className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="p-8 overflow-y-auto"><TermsContent /></div>
            <div className="p-6 border-t border-gray-100 text-right bg-gray-50">
              <button onClick={() => setShowTerms(false)} className="bg-morado text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-[#8e6ba0] transition-colors">Acepto</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;