import BicoNav from './components/BicoNav'
import HeroBico from './components/HeroBico/HeroBico'
import Beneficios from './components/Beneficios'
import Funcionamiento from './components/Funcionamiento'
import Catalogo from './components/Catalogo'
import Footer from './components/Footer'

function App() {

  return (
    <div className='relative'>
      <BicoNav />
      <HeroBico />
      <Beneficios />
      <Funcionamiento />
      <Catalogo />
      <Footer />
    </div>
  )
}

export default App
