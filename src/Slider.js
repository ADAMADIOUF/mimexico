import React,{useEffect} from 'react'
import { motion } from 'framer-motion'
import { useGlobalContext } from './context'

import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Slider() {
 const { slide, indexSlide, setIndexSlide } = useGlobalContext();
 useEffect(()=>{
  const lastIndex = slide.length - 1
  if(indexSlide < 0){
   setIndexSlide(lastIndex)
  }
  if(indexSlide > lastIndex){
   setIndexSlide(0)
  }
 },)
 useEffect(()=>{
  let slider = setInterval(() =>{
   setIndexSlide(indexSlide + 1)
  },6000)
  return () =>{
   clearInterval(slider)
  }
 },)
 useEffect(() => {
   AOS.init({
     offset: 400,
     duration: 1000,
     delay: 50,
     easing: 'ease-in-out',
   })
 }, [])
  return (
    <div className='slide'>
      {slide.map((slide, slideIndex) => {
        let slider = 'nextSlide'
        if (slideIndex === indexSlide) {
          slider = 'activeSlide'
        }
        if (
          slideIndex === indexSlide - 1 ||
          (indexSlide === 0 && slideIndex === slide.length - 1)
        ) {
          slider = 'lastSlide'
        }
        const { id, image,title,desc } = slide
        return (
          <address className={slider} key={id}>
            <img src={image} alt='' className='img-slide' />
            <div className='content-slider'>
              <motion.div
                className='bg-slider'
                initial={{ x: 300, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ repeat: 2, duration: 1 }}
              ></motion.div>
              <h3 data-aos='fade-up'>{title}</h3>
              <motion.p
                initial={{ x: 1000, scale: 0.5 }}
                animate={{ x: 0, scale: 1 }}
                transition={{ duration: 1 }}
              >
                {desc}
              </motion.p>
              <a href='https://direct.chownow.com/order/16089/locations/22847'>
                <motion.button
                  className='btn btn-order'
                  initial={{ x: -1000, scale: 0.5 }}
                  animate={{ x: 0, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  order now
                </motion.button>
              </a>
            </div>
          </address>
        )
      })}

      
    </div>
  )
}