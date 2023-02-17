import React from 'react'
import AnimateRouter from './components/AnimateRouter'
import {
  BrowserRouter as Router,
  
} from 'react-router-dom'
import Submenu from './Submenu'
import Navbar from './Navbar'
import Footer from './components/Footer'

const App = () => {
  
  return (
    <Router>
      <Navbar />

      <Submenu />
      <AnimateRouter />
      <Footer/>
    </Router>
  )
}

export default App