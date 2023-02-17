import React from 'react'
import { motion } from 'framer-motion'
import c from '../assets/contact1.png'
import Map from "../Map"
import mi from './../assets/mi5.png'
import {
  AiFillTwitterSquare,
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
AiFillInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
      <motion.div
        className='about'
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='contact-banner-section'></section>
        <section className='contact' id='contact'>
          <div className='contact-title'>
            <h3>
              <img src={mi} alt='' />
              <span> order now</span>
            </h3>
          </div>
          <div className='contact-form-container'>
            <article className='contact-form'>
              <a
                href={`https://direct.chownow.com/order/16089/locations/22847`}
              >
                <img src={c} alt='' />
              </a>
            </article>
            <article className='opening'>
              <h3>opening hours</h3>
              <p>
                <span>monday-thursday 11:00am - 10:00pm</span>
              </p>
              <p>
                <span>friday-saturday 11:00am - 10:30pm</span>
              </p>
              <p>
                <span>sunday 11:00am - 9:00pm</span>
              </p>
            </article>
          </div>
          <Map />
        </section>
      </motion.div>
    </>
  )
}

export default Contact