import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { Component } from 'react'
import Slider from 'react-slick'
import a1 from '../assets/a1.jpeg'
import a2 from '../assets/a2.jpeg'
import a3 from '../assets/a3.jpeg'
import a4 from '../assets/a4.jpg'
import a5 from '../assets/a5.jpeg'
import a6 from '../assets/a6.jpeg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      cssEase: 'linear',

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <div className='slider-tow'>
        <h2> MI MEXICO FAVORITE DISH</h2>
        <Slider {...settings}>
          <div className='gallery-img'>
            <img src={a1} alt='' />
          </div>
          <div className='gallery-img'>
            <img src={a2} alt='' />
          </div>
          <div className='gallery-img'>
            <img src={a3} alt='' />
          </div>
          <div className='gallery-img'>
            <img src={a4} alt='' />
          </div>
          <div className='gallery-img'>
            <img src={a5} alt='' />
          </div>
          <div className='gallery-img'>
            <img src={a6} alt='' />
          </div>
        </Slider>
      </div>
    )
  }
}
