import React, { useState } from 'react'
import CountUp from "react-countup"
import ScrollTrigger from 'react-scroll-trigger'
const ProgreBar = () => {
 const [count,setCount]= useState(false)
  return (
    <section className='section-center progress-content'>
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <div className='progress-bar'>
          <div className='progress'>
            <h1>
              {count && <CountUp start={0} end={28} duration={2} delay={0}  />}+
            </h1>
            <span>Years Of Experience</span>
          </div>
          <div className='progress'>
            <h1>
              {count && <CountUp start={0} end={520} duration={2} delay={0} />}+
            </h1>
            <span>Happy Clients</span>
          </div>
          <div className='progress'>
            <h1>
              {count && <CountUp start={0} end={720} duration={2} delay={0} />}+
            </h1>
            <span>Projects Completed</span>
          </div>
        </div>
        <div className="progress-bar-2">

        </div>
      </ScrollTrigger>
    </section>
  )
}

export default ProgreBar