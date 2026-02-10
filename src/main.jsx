import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Aquí cargamos los estilos de Tailwind y las fuentes
import App from './App.jsx' // Aquí cargamos tu aplicación

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)