import './App.css'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Institucional } from './components/Institucional/Institucional'
import { JardinInfantes } from './components/JardinInfante/JardinInfantes'
import { Radio } from './components/Radio/Radio'
function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='/jardininfantes' element={<JardinInfantes />} />
        <Route path='/radio' element={<Radio />} />
      </Routes>
      <Footer />
    </BrowserRouter>


  )
}

export default App
