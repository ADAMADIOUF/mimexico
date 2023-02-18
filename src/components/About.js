import React,{useState} from 'react'
import { motion } from 'framer-motion'
import about from '../assets/about4.png'
import mi from '../assets/mi3.png'
import m2 from '../assets/check.png'
import m3 from '../assets/cook.png'
import m4 from '../assets/ingredients.png'
import c from '../assets/chilli.png'
import vi from "../assets/Mexico.mp4"
import { AiFillYoutube } from 'react-icons/ai'

import SliderTwo from '../components/SliderTwo'
const About = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <motion.div
        className='about'
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='about-banner-section'></section>
        <div className='about-first-banner'>
          <div className='about-container section-center'>
            <article className='about-first-img'>
              <img src={about} alt='' />
            </article>
            <article className='about-content'>
              <h3>
                <img src={mi} alt='' />
                <span> good food for you all day good mood</span>
              </h3>
              <p>
                Mi Mexico is a family run business perfect for celebrations. Mi
                Mexico offers a free meal on your birthday*, daily lunch
                specials and military discounts on all their food. When you are
                deciding on a restaurant, the fun and friendly atmosphere of Mi
                Mexico is a perfect to place relax. ​
              </p>
              <p>
                After opening in 2008, Mi Mexico became Minot’s finest authentic
                Mexican Cuisine. On March 2, 2022 Mi Mexico moved to their
                current location.
              </p>

              <p>
                *Some exceptions apply to the free birthday meal and military
                discount. Dine in Only
              </p>
            </article>
          </div>
          <div className='container-video'>
            <article className='video'>
              <video width='320' height='240'  controls>
                <source src='./images/Mexico.mp4' type='video/mp4' />
                <source src='movie.ogg' type='video/ogg' />
                Your browser does not support the video tag.
              </video>
            </article>
            <article>
              <div className='icons-about'>
                <div>
                  <span>
                    <img src={m2} alt='' />
                  </span>
                  <h3>experienced chefs</h3>
                </div>
                <div>
                  <span>
                    <img src={m3} alt='' />
                  </span>
                  <h3>original recipes</h3>
                </div>
                <div>
                  <span>
                    <img src={m4} alt='' />
                  </span>
                  <h3>fresh ingredients</h3>
                </div>
              </div>
            </article>
          </div>
          <div className='about-banner'>
            <div className='about-banner-content'>
              <h3>Minot North Dakota's best Authentic Mexican restaurant </h3>
              <button className='btn book-about'>book a table</button>
            </div>
          </div>

          <SliderTwo />
        </div>
        <div className='chilli'>
          <img src={c} alt='' />
        </div>
      </motion.div>
    </>
  )
}

export default About