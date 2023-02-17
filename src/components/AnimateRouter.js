import React from 'react'
import {
  
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import About from './About'

import Gallery from './../Gallery'
import Contact from './Contact'
import Home from './Home'

import Menu from './Menu'

import {AnimatePresence} from "framer-motion"

const AnimateRouter = () => {
 const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimateRouter