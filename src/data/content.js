export const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Especialidades', href: '#especialidades' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Sobre mí', href: '#sobre-mi' },
];

export const especialidades = [
  {
    id: 1,
    icon: "fa-masks-theater",
    color: "bg-naranja", 
    shadow: "shadow-naranja/30",
    title: "Ansiedad Escénica",
    desc: "Estrategias para gestionar el miedo al escenario, perfeccionismo y la presión del alto rendimiento."
  },
  {
    id: 2,
    icon: "fa-apple-whole",
    color: "bg-rosa",
    shadow: "shadow-rosa/30",
    title: "Cuerpo y Alimentación",
    desc: "Prevención y acompañamiento en TCA y fortalecimiento de una autoimagen saludable y respetuosa."
  },
  {
    id: 3,
    icon: "fa-heart-pulse",
    color: "bg-azul",
    shadow: "shadow-azul/30",
    title: "Autoestima y Confianza",
    desc: "Psicología deportiva aplicada a la danza para gestionar lesiones y cambios de etapa profesional."
  }
];
  // ... (lo que ya tenías de navLinks y especialidades)

export const galleryItems = [
  {
    id: 1,
    type: 'video',
    src: 'galeria1.mp4', // Asegúrate de tener este archivo en assets
    alt: 'Video de Kim trabajando',
    label: 'En Acción',
    aspect: 'aspect-[9/16] md:aspect-square' // Clase especial para el video vertical
  },
  {
    id: 2,
    type: 'image',
    src: 'galeria2.jpeg',
    alt: 'Bailarines felices',
    label: 'Comunidad',
    aspect: 'aspect-square'
  },
  {
    id: 3,
    type: 'image',
    src: 'galeria3.jpeg',
    alt: 'Kim con niñas bailarinas',
    label: 'Inspiración',
    aspect: 'aspect-square'
  },
  {
    id: 4,
    type: 'image',
    src: 'galeria4.jpeg',
    alt: 'Conexión y aprendizaje',
    label: 'Aprendizaje',
    aspect: 'aspect-square'
  }
];

export const faqItems = [
  {
    id: 1,
    title: "¿Cómo son las sesiones?",
    desc: "Sesiones individuales de 50 a 60 minutos, enfocadas en objetivos claros y un trato empático.",
    borderColor: "border-[#9bd3dd]" // Azul
  },
  {
    id: 2,
    title: "¿Dónde atiendo?",
    desc: "Presencial en Guadalajara (Zona Tránsito) y modalidad virtual para todo el mundo.",
    borderColor: "border-[#fb91a3]" // Rosa
  }
];

export const socialLinks = [
  { icon: "fa-instagram", url: "https://www.instagram.com/saludmentalparabailarines/?hl=es" },
  { icon: "fa-whatsapp", url: "https://wa.me/523324388415" }
];

export const bookingLinks = {
  presencial: "https://calendar.app.google/XPWr52Vi4kJ9xLV28",
  online: "https://calendar.app.google/pg6tzdwyRfey79WL8",
  whatsapp: "https://wa.me/523324388415"
};

