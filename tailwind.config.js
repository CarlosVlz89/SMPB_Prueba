/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // AQUÍ DEFINIMOS TUS FUENTES
      fontFamily: {
        // La fuente "sans" por defecto será Plus Jakarta
        sans: ['"Plus Jakarta Sans"', 'sans-serif'], 
        // La fuente "serif" será Playfair Display
        serif: ['"Playfair Display"', 'serif'],
      },
      // TUS COLORES
      colors: {
        morado: '#a07bb5',
        crema: '#f8eddb',
        naranja: '#f49b70',
        azul: '#9bd3dd',
        rosa: '#fb91a3',
      }
    },
  },
  plugins: [],
}