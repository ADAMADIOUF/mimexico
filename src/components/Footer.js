import React from 'react'
import logo from "../assets/logofooter.png"
const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h5>
          &copy;
          {new Date().getFullYear()}
          <span>adamadiouf20017@gmail.com</span>
        </h5>
        <h3>All rights reserved</h3>
      </div>

      <div>
        <img src={logo} alt='' className='footer-logo' />
      </div>
      <div>
        <h2>contact</h2>
        <h3>MI MEXICO RESTAURANT</h3>
        <p>701-858-0777</p>
      </div>
    </div>
  )
}

export default Footer