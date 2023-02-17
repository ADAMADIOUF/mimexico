import React from 'react'
import flag from "./assets/flag.png"
const Map = () => {
  return (
    <section className='map-home '>
      <div className='map-container'>
        <article className='maps'>
         <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=mi%20mexico%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        </article>
        <img src={flag} alt="" className='img-map' />
      </div>
    </section>
  )
}

export default Map
