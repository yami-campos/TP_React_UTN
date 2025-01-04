import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/Header/header.jsx'
import AcercaDe from './componentes/acercaDe/acercaDe.jsx'
import Contacto from './componentes/contacto/contacto.jsx'
import Footer from './componentes/footer/footer.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Header />
    <AcercaDe />
    <App />
    <Contacto />
    <Footer />
    
  </StrictMode>,
)
