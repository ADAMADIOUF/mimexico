import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import m from "../assets/mi6.png"
import d1 from '../assets/d1.png'
import d2 from '../assets/d2.png'
import d3 from '../assets/d3.png'
import d4 from '../assets/d4.png'
import d5 from '../assets/d5.png'
import d6 from '../assets/d6.png'
import d7 from '../assets/d7.png'
import d8 from '../assets/d8.png'
import d9 from '../assets/d9.png'
import d10 from '../assets/d10.png'
import d11 from '../assets/d11.png'
import d12 from '../assets/d12.png'
import d13 from '../assets/d13.png'
import d14 from '../assets/d14.png'
import d15 from '../assets/d15.png'
import d16 from '../assets/d16.png'
import d17 from '../assets/d17.png'
import d18 from '../assets/d18.png'
import o from '../assets/order.png'
const Menu = () => {
  return (
    <>
      <motion.div
        className='about'
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='services-banner-section'></section>

        <div className='menu section-center'>
          <div className='menu-title'>
            <h3>
              <img src={m} alt='' className='img-menu' />

              <span>our menus</span>
            </h3>
            <div className='underline'></div>
            <div className='menu-container'>
              <article className='menu-card'>
                <img src={d1} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <div>
                  <img src={d2} alt='' />
                  <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                    <h5 className='order'>order now</h5>
                  </Link>
                </div>
              </article>
              <article className='menu-card'>
                <img src={d3} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d4} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>{' '}
              <article className='menu-card'>
                <img src={d5} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d6} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d7} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d8} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d9} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d10} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d11} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d12} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d13} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d14} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d15} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d16} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d17} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
              <article className='menu-card'>
                <img src={d18} alt='' />
                <Link to='https://direct.chownow.com/order/16089/locations/22847'>
                  <h5 className='order'>order now</h5>
                </Link>
              </article>
            </div>
          </div>
        </div>
        <div className='menu-bg'> </div>
      </motion.div>
    </>
  )
}

export default Menu