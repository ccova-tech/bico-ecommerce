import '@radix-ui/themes/styles.css'

import BicoNav from './components/BicoNav'
import HeroBico from './components/HeroBico/HeroBico'
import Beneficios from './components/Beneficios'
import Funcionamiento from './components/Funcionamiento'
import Catalogo from './components/Catalogo'
import Footer from './components/Footer'

import { Theme } from '@radix-ui/themes';

function App() {

  return (
    <Theme>
      <div className='relative'>
        <BicoNav />
        <HeroBico />
        <Beneficios />
        <Funcionamiento />
        <Catalogo />
        <Footer />
      </div>
    </Theme>
  )
}

export default App
