import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Pages/Home/Home'
import Recipes from './Pages/Recipes'
import Contact from './Pages/Contact'
import About from './Pages/About/About'
import RecipeDetails from './Pages/RecipeDetails'
import Footer from './Components/Footer'
import { MyProvider } from './Context'

function App() {

  return (
    <>
      <MyProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes/" element={<Recipes />} />
          <Route path="/Contact/" element={<Contact />} />
          <Route path="/Recipes/:id" element={<RecipeDetails />} />
          <Route path="/About/" element={<About />} />
        </Routes>

        <Footer />
      </MyProvider>
    </>
  )
}

export default App
