import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import Slider from '../Slider'
import { motion } from 'framer-motion'
import m1 from "../assets/m1.png"
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import m4 from '../assets/m4.png'
import m5 from '../assets/m5.png'
import m6 from '../assets/m6.png'
import m7 from '../assets/m7.png'
import m8 from '../assets/m8.png'
import m9 from '../assets/m9.png'
import m10 from '../assets/m10.png'
import m11 from '../assets/m11.png'
import m12 from '../assets/m12.png'
import m13 from '../assets/m13.png'
import m14 from '../assets/m14.png'
import { Link } from 'react-router-dom'

import AOS from 'aos'
import 'aos/dist/aos.css'
const Home = () => {
   useEffect(() => {
     AOS.init({
       offset:400,
       duration:1000,
       delay:50,
       easing:"ease-in-out"
     })
   }, [])
   const {  closeSubmenu } = useGlobalContext()
  return (
    <>
      <motion.div
        className='div'
        onMouseOver={closeSubmenu}
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <Slider />
      </motion.div>
      <section className='section-center home'>
        <div className='home-menu'>
          <div className='menu-title'>
            <h3 data-aos='fade-up'>menu</h3>
            <div className='underline'></div>
            <h2 data-aos='fade-right'>what's your food mood?</h2>
            <p>
              “This appetizing dish was prepared with great care and attention
              to detail. The presentation and the taste were both perfect.”
            </p>
            <h2
              className='color'
              data-aos='fade-up'
              data-aos-offset='200'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              data-aos-mirror='true'
              data-aos-once='false'
            >
              SPECIALTIES MI MEXICO
            </h2>
          </div>
          <div className='container-home'>
            <article data-aos='fade-up' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m1} alt='' />
                </div>
                <div>
                  <h3>
                    specialties mi mexico <span>|</span>
                  </h3>
                  <p>
                    When you come to our family-owned restaurant, you'll only
                    receive the very best service. Get larger portions of great
                    food at lower prices when you come in and see us at Mi
                    Mexico Restaurant. We also have a full bar open and live
                    music on occasion. Rest assured that any diet and allergy
                    can be attended to by our friendly staff. We carry
                    kid-friendly menu options as well!
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-right' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m2} alt='' />
                </div>
                <div>
                  <h3>
                    fajita's<span>|</span>
                  </h3>
                  <p>
                    fajita recipe, chicken is infused with a flavorful marinade,
                    then cooked with bell peppers, onions and garlic. Served
                    with your favorite tortillas, guacamole, and homemade salsa,
                    these chicken fajitas are an easy, healthy & delicious
                    weeknight meal.
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-right' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m3} alt='' />
                </div>
                <div>
                  <h3>
                    grill SPECIALTIES <span>|</span>
                  </h3>
                  <p>
                    The flavor of a grilled dish depends on the choice of wood,
                    and we use only best beechwood for grilling, which provides
                    our dishes with the unique flavor. Then, it's time to choose
                    and balance spices and aromas, that must enhance the flavor
                    of food without making it disappear.
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-up' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m4} alt='' />
                </div>
                <div>
                  <h3>
                    steaks <span>|</span>
                  </h3>
                  <p>
                    I have eaten at nearly every Mexican food restaurant in
                    Cortez and beyond. Mi Mexico is fantastic. Great food, good
                    prices, good service, and friendly owners. I have tried
                    several dishes and each one has exceeded my expectations.
                    What I like is the food is hot, attractive dishes, very
                    fresh and not overcooked. The chips and salsa are good,
                    especially what the owner called Salsa Mexicana, a cabbage
                    based appetizer like no other I have eaten. I could eat a
                    whole bowl of it as a side dish!!!
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-right' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m5} alt='' />
                </div>
                <div>
                  <h3>
                    combination dinners <span>|</span>
                  </h3>
                  <p>
                    I travel with my family two hours away just to come eat
                    here. Home made tortillas and Authentic Mexican food really
                    makes my family feel at home. People are friendly.I’ll
                    continue to come here cause it’s an over all great place.
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-up' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m13} alt='' />
                </div>
                <div>
                  <h3>
                    burritos <span>|</span>
                  </h3>
                  <p>
                    My husband and I love to eat at Mi Mexico and are usually
                    joined by relatives. Their food is excellent as well as
                    their service. And...they have the coldest beer! Awesome
                    experience every time.
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-right' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m6} alt='' />
                </div>
                <div>
                  <h3>
                    lunch specials <span>|</span>
                  </h3>
                  <p>
                    Stop for lunch after a day of travel. Lots of lunch specials
                    to choose from very good prices had a margarita was very
                    good had beef enchiladas with beans and rice. Lots of food.
                    The service was fast getting the food took a little while to
                    get our check when ready to go. The place was decorated very
                    nicely.
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-up' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m7} alt='' />
                </div>
                <div>
                  <h3>
                    kids menu <span>|</span>
                  </h3>
                  <p>
                    We went here for lunch and it was a pleasant experience for
                    us.. We've been here before on my son's hockey team dinner
                    and went back because we really liked their food. The place
                    is almost empty (Monday lunch time) and so we were served
                    pretty quick. The chips are good, you can ask for refill if
                    you feel wanting more. The place is clean and very
                    organized. Check out was also fast and really no issue at
                    all. We're definitely coming back and highly recommend this
                    place. We all ordered burrito, and we loved the cheese sauce
                    that is topped on our burrito..
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-right' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m8} alt='' />
                </div>
                <div>
                  <h3>
                    nachos <span>|</span>
                  </h3>
                  <p>
                    nachos are one of my go-to weeknight meals, and I’m here to
                    make sure they’re one of yours, too. No, I’m not talking
                    about grabbing loaded nachos at happy hour. I’m talking
                    about easy homemade chicken nachos, which will save you
                    money and are ready in minutes.
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-up' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m9} alt='' />
                </div>
                <div>
                  <h3>
                    seafood <span>|</span>
                  </h3>
                  <p>
                    My wife had a bowl of black bean soup and could only eat
                    half of it. I had a combo, and ate a little over half. They
                    start you with salsa, chips, and mushroom salsa ( never had
                    before, but it was great).
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-up' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m10} alt='' />
                </div>
                <div>
                  <h3>
                    salads <span>|</span>
                  </h3>
                  <p>
                    This Vegan Chicken Fajita Salad is a healthy and filling
                    dinner that is done in under 30 minutes. It features Dr.
                    Preager’s Vegan Classic Chick’n Tenders and creamy —no sad
                    salad here!
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-right' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m11} alt='' />
                </div>
                <div>
                  <h3>
                    drinks <span>|</span>
                  </h3>
                  <p>
                    In 1948 Acapulco socialite Margarita Sames created a
                    sensation by mixing Cointreau, Tequila and lime juice. Her
                    concoction was such a success, it was named after her and to
                    this day is known as "The Original Margarita".
                  </p>
                </div>
              </div>
            </article>
            <article data-aos='fade-up' className='home-content'>
              <div className='home-details'>
                <div>
                  <img src={m12} alt='' />
                </div>
                <div>
                  <h3>
                    desserts <span>|</span>
                  </h3>
                  <p>
                    On the hunt for some authentic Mexican dessert recipes for
                    your next fiesta? From fried ice cream and caramel flan to
                    traditional churros and sopapillas, these tasty treats will
                    satisfy every taste bud.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <div className='home-last-menu'>
        <div className='home-container-last-menu section-center'>
          <article data-aos='fade-right' className='last-menu-content'>
            <motion.h2
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                duration: '3',
                delay: '1',
              }}
            >
              menus
            </motion.h2>

            <p>
              After opening in 2008, Mi Mexico became Minot’s finest authentic
              Mexican Cuisine. Mi Mexico is a family run business perfect for
              celebrations. Mi Mexico offers a free meal on your birthday, daily
              lunch specials and military discounts on all their food. When you
              are deciding on a restaurant, the fun and friendly atmosphere of
              Mi Mexico is a perfect to place relax.​Come in an experience
              authentic Mexican Cuisine.
            </p>
            <a href={`/menu`}>
              <button className='btn btn-last-menu'>view our menus</button>
            </a>
          </article>
          <article data-aos='fade-up'>
            <img src={m14} alt='' />
          </article>
        </div>
      </div>
    </>
  )
}

export default Home