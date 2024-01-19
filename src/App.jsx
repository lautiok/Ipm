import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Institucional } from './components/Institucional/Institucional'
import { JardinInfantes } from './components/JardinInfante/JardinInfantes'
import { Radio } from './components/Radio/Radio'
import { Construccion } from './components/Construccion/Construccion'
import { Primario } from './components/Primario/Primario'
import { Contact } from './components/Contacto/Contact/Contact'
import { FormularioContactoP } from './components/Primario/FormularioContactoP/FormularioContactoP'
import { FormularioContacto } from './components/JardinInfante/FormularioContacto/FormularioContacto'
function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='/jardininfantes' element={<JardinInfantes />} />
        <Route path='/radio' element={<Radio />} />
        <Route path='/primario' element={<Primario />} />
        <Route path='/secundario' element={<Construccion />} />
        <Route path='/profesorado' element={<Construccion />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/formulario/nivelinicial' element={<FormularioContacto />} />
        <Route path='/formulario/nivelprimario' element={<FormularioContactoP />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  )
}

export default App
