import React,{useState,useEffect} from 'react'
import { useGlobalContext } from './context'
import {FaBars} from "react-icons/fa"
import Sidebar from './Sidebar'
import logo from "./assets/logo.png"
 import {Link,useLocation} from "react-router-dom"
const Navbar = () => {
 
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 200) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  let navbarClasses = ['navbar']
  if (scrolled) {
    navbarClasses.push('scrolled')
  }

  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubmenu(page, { center, bottom })
  }
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  return (
    <>
      <header className={navbarClasses.join(' ')}>
        <nav className='nav' onMouseOver={handleSubmenu}>
          <div className='nav-center'>
            <div className='nav-header'>
              <a href={`/`}>
                <img src={logo} alt='' className='logo' />
              </a>
              <button className='btn toggle-btn' onClick={openSidebar}>
                <FaBars />
              </button>
            </div>
            <ul className='nav-links'>
              <li>
                <a href='/'>
                  <button className='link-btn' onMouseOver={closeSubmenu}>
                    home
                  </button>
                </a>
              </li>
              <li>
                <a href='/about'>
                  <button className='link-btn' onMouseOver={closeSubmenu}>
                    about us
                  </button>
                </a>
              </li>
              <li>
                <a href='/menu'>
                  <button className='link-btn' onMouseOver={closeSubmenu}>
                    menus
                  </button>
                </a>
              </li>
              <li>
                <a href='/gallery'>
                  <button className='link-btn' onMouseOver={closeSubmenu}>
                    gallery
                  </button>
                </a>
              </li>

              <li>
                <a href='/contact'>
                  <button className='link-btn' onMouseOver={closeSubmenu}>
                    contact
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Sidebar />
    </>
  )
}

export default Navbar