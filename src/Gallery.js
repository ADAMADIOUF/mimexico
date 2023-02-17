import React, { useState } from 'react'
import gallery from './../src/dataGallery'
import { motion } from 'framer-motion'
import mi from './assets/mi4.png'
import {
  BsFillArrowDownLeftCircleFill,
  BsFillArrowDownRightCircleFill,
  BsFillArrowUpRightCircleFill,
} from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

const Gallery = () => {
  const [slideNumber, setSliderNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = (index) => {
    setSliderNumber(index)
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }
  const prevSlide = () => {
    slideNumber === 0
      ? setSliderNumber(gallery.length - 1)
      : setSliderNumber(slideNumber - 1)
  }
  const nextSlide = () => {
    slideNumber + 1 === gallery.length
      ? setSliderNumber(0)
      : setSliderNumber(slideNumber + 1)
  }
  return (
    <>

      <motion.div
        className='gallery-menu'
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <section className='gallery-banner-section'></section>
    
    <section className='gallery' id='gallery'>
      <div className='gallery-title'>
        <h3>
          <span>
            {' '}
            <img src={mi} alt='' />
          </span>
          <span>gallery</span>
        </h3>
      </div>
      {openModal && (
        <div className='sliderWrap'>
          <FaTimes className='btnClose' onClick={handleCloseModal} />
          <BsFillArrowDownLeftCircleFill
            className='btnPrev'
            onClick={prevSlide}
          />
          <BsFillArrowUpRightCircleFill
            className='btnNext'
            onClick={nextSlide}
          />
          <div className='fullScreenImage'>
            <img src={gallery[slideNumber].image} alt='' />
          </div>
        </div>
      )}
      <div className='galleryWrap'>
        {' '}
        {gallery &&
          gallery.map((slide, index) => {
            return (
              <div
                className='single'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.image} alt='' />
              </div>
            )
          })}
      </div>
    </section>
    </motion.div>
    </>
  )
}

export default Gallery
