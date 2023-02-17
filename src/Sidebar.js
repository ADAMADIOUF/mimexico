import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { useGlobalContext } from './context'
import sublinks from './dataMenu'
const Sidebar = () => {
 const [showInfo, setShowInfo] = useState(false)
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links,pages } = item
            return (
              <article key={index}>
                <h3>{pages}</h3>

                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label, labelSide } = link
                    return (
                      <>
                        <a key={index} href={url}>
                          {icon}
                          {label}
                        </a>
                        <a href={url}>
                          <h4>{labelSide}</h4>
                        </a>
                      </>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
