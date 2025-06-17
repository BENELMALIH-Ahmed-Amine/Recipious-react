import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import Recipes from './Pages/Recipes'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes/" element={<Recipes />} />
        <Route path="/Contact/" element={<Contact />} />
        <Route path="/About/" element={<About />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
