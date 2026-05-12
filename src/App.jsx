import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Secciones
import Hero from './components/sections/Hero';
import Specialties from './components/sections/Specialties';
import Gallery from './components/sections/Gallery';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import Consultorio from './components/sections/Consultorio';
import Contact from './components/sections/Contact';

function App() {
  
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 1000,
      delay: 100,
      reset: false,
      viewFactor: 0.2
    });

    sr.reveal('.reveal', { origin: 'bottom', interval: 150 });
    sr.reveal('.reveal-left', { origin: 'left', distance: '60px' });
    sr.reveal('.reveal-right', { origin: 'right', distance: '60px' });
  }, []);

  return (
    // CAMBIO 1: Regresamos al fondo crema original (bg-[#f8eddb])
    <div className="antialiased text-gray-800 bg-[#f8eddb] relative overflow-hidden min-h-screen">
      
      {/* --- FONDO AMBIENTAL SUAVE (Menos invasivo) --- */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Mancha Naranja (Arriba derecha - Da luz cálida) */}
        <div className="blob bg-naranja w-[500px] h-[500px] rounded-full top-[-100px] right-[-100px] mix-blend-multiply opacity-20 animate-blob"></div>
        
        {/* Mancha Azul (Abajo izquierda - Da equilibrio) */}
        <div className="blob bg-azul w-[500px] h-[500px] rounded-full bottom-[-100px] left-[-100px] mix-blend-multiply opacity-20 animation-delay-4000"></div>
        
        {/* Mancha Morada (Pequeña y flotando - Solo un toque) */}
        <div className="blob bg-morado w-64 h-64 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply opacity-15 animation-delay-2000"></div>
      </div>

      <div className="relative z-10 pt-20">
        <Navbar />
        <main>
          <Hero />
          <Specialties />
          <Gallery />
          <About />
          <FAQ />
          <Consultorio />
          <Contact />
        </main>
        <Footer />
      </div>

    </div>
  );
}

export default App;