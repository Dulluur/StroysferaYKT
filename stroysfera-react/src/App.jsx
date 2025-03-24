import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Advantages from './components/Advantages'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Services from './components/Services'
import Comparison from './components/Comparison'
import Team from './components/Team'
import Header from './components/Header'

function App() {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Team/>
      <Advantages />
      <Services/>
      <Comparison/>
      <Gallery />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
