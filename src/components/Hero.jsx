import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../assets/service1.webp'
import course from '../assets/Course.webp'
import tarot from '../assets/tarot.webp'
import page4 from '../assets/page4.webp'
import cube_shape from '../assets/ion_cube-sharp.webp'
import cube_shape1 from '../assets/ion_cube-sharp1.webp'
import cube_shape2 from '../assets/ion_cube-sharp2.webp'
import cube_shape3 from '../assets/ion_cube-sharp3.webp'
import page5 from '../assets/chooseus.webp'
import { reviews } from '../assets/reviews'
import women from '../assets/woman-in-lotus-position-medium-light-skin-tone-svgrepo-com.svg'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>

      
      {/* page1 */}

      <div data-scroll data-scroll-speed='-.3' className='h-[95vh] w-screen flex justify-center italic items-center  p-2'>
        <img src={women} alt="" className='h-[30vw]' />
        <div >
        <h1 
          className='text-5xl font-semibold font-mono  mb-6 text-yellow-300 text-center leading-normal lg:w-[60vw] drop-shadow-2xl'>Get a First Free Healing Session</h1>
        <p
          className='text-lg text-white xl:w-[40vw] lg:w-[60vw]'>
          It can help reduce stress, anxiety, and depression by calming the nervous system and releasing negative emotions. It can enhance self-awareness, intuition, and creativity by opening the third eye and crown chakras, which are the centres of wisdom and insight.</p>
      </div></div>

      {/* page1 over  */}

      {/* page 2 start  */}



      <div className='border-t border-neutral-700 py-9 data-scroll data-scroll-speed=".2" w-screen flex justify-center items-center flex-col p-2 bg-neutral-800 z-50'>

        {/* heading of page 2 */}

        <h1
          className='text-4xl font-medium font-serif mb-6 text-pink-300 text-center'>What We Offer</h1>
        <p
          className='text-lg text-white lg:w-[60vw] text-center'>
            We examine all catalysts of transformation – starting from the basics, and well inspire and assist you in making the desired transition.</p>

        {/* card container of page 2 */}
        
        <div className='flex flex-wrap gap-10  mt-8 items-center justify-center'>

          {/* card 1 */}
          <div className='w-72 h-fit flex flex-col justify-center items-center p-4 border border-blue-700 rounded-xl shadow-lg transition-[width,shadow] duration-700 ease-out hover:ease-in-out hover:w-80 hover:shadow-blue-500'>
            <img src={service1} alt="Healing" className='h-20 rounded-full mb-2' />
            <div className='text-center'>
              <h3 className='text-xl text-yellow-100 my-3'>Healing</h3>
              <p className='text-white'>
              Energy healing is a holistic practice that involves the use of subtle energy fields to promote physical, mental, emotional, and spiritual well-being. It is based on the premise that everything in the universe is made of energy and that energy can be manipulated to restore balance and harmony in oneself and others.
              </p>
            </div>
          </div>

          {/* card 2 */}

          <div className='w-72 h-fit flex flex-col justify-center items-center p-4 border border-blue-700 rounded-xl shadow-lg transition-[width,shadow] duration-700 ease-out hover:ease-in-out hover:w-80 hover:shadow-blue-500'>
            <img src={course} alt="Course" className='h-20 rounded-full mb-2' />
            <div className='text-center'>
              <h3 className='text-xl text-yellow-100 my-3'>Course</h3>
              <p className='text-white'>
              Explore transformative energy healing with our comprehensive courses designed for all levels. Delve into techniques like Reiki, chakra balancing, and energy field work to enhance your well-being and empower others. Our expert instructors provide hands-on experience and personalized guidance to help you master these ancient practices.
              </p>
            </div>
          </div>

          {/* card 3 */}

          <div className=' w-72 h-fit flex flex-col justify-center items-center p-4 border border-blue-700 rounded-xl shadow-lg transition-[width,shadow] duration-700 ease-out hover:ease-in-out hover:w-80 hover:shadow-blue-500'>
            <img src={tarot} alt="Healing" className='h-20 rounded-full mb-2' />
            <div className='text-center'>
              <h3 className='text-xl text-yellow-100 my-3'>Tarot Reading</h3>
              <p className='text-white'>
              A tarot reading is a practice where a deck of tarot cards is used to gain insight into various aspects of life, such as personal issues, future possibilities, or spiritual guidance. Each card has specific meanings, and their positions in a spread help to interpret their messages. 
              </p>
            </div>
          </div>
        {/* card container closed */}
        </div>

      </div>

      {/* page 2 end  */}

      {/* page 3 start */}
      
      <div className=' my-32 flex flex-wrap gap-24 items-center justify-center p-2'>
        <div className='sm:w-[95vw] lg:w-[25rem] '>
          <span className='text-blue-800'>OUR SERVICES</span>
          <h2 className='text-4xl my-7 text-slate-300'>Why Choose Avyaanam?</h2>
          <p className='text-white'>Because we provide complete healing in each course.
            That covers all the chakras and aura at once.Healing all problems at once. <br /><br />
              
            It’s one time investment. We provide free healing or at negligible price after our premium courses and for your issue if problems occur afterwards , healing is free .</p>
        </div>
        <img src={page4} alt="" className='w-80 rounded-md shadow-lg shadow-black' />
      </div>

      {/* page 3 over  */}

      {/* page 4 start  */}
      <div >
          <h1
            className='text-5xl font-medium font-serif mb-6 text-pink-300 text-center p-2'>
              What people are saying…
            </h1>
          <p
            className='text-lg text-white text-center'>
              Read the testimonials of our happy customers</p>
          <div className='my-16 flex flex-wrap justify-evenly gap-7'>
            {reviews.map((res)=><div className='w-72 text-white flex flex-col justify-center p-8 rounded-xl shadow-sm shadow-black h-fit'>
              <p className='font-mono'>{res.review}</p>
              <span className='mt-6 text-lg font-mono font-semibold'>{res.client}</span>
            </div>)}
          </div>
      </div>

      {/* page 4 ends here */}

      {/* page 5 starts */}

      <div className='flex flex-wrap justify-evenly items-center mt-28 gap-24 p-2'>
        <div className='sm:w-[95vw] lg:w-[30rem] text-white'>
          <span className='text-blue-800'>CHOOSE US</span>
          <h2 className='text-4xl my-7'>Why Make Us Your Trusted Partner</h2>

          <div>
            <div className='flex items-center justify-between my-10'>
              <img src={cube_shape} alt="" className='h-10 mr-6'/>
              <div>
                <h4 className='text-xl mb-2'>Expert Guidance From Guru</h4>
                <p>Our course is led by a world-class energy healing master with decades of experience and a proven track record of transforming lives.</p>
              </div>
            </div>

            <div className='flex items-center justify-between my-10'>
              <img src={cube_shape1} alt="" className='h-10 mr-6'/>
              <div>
                <h4 className='text-xl mb-2'>Together till the end</h4>
                <p>Together till the end, we harness the boundless energy within, guiding each other toward wholeness and healing, where every step forward is a step closer to the light that heals and unites us.</p>
              </div>
            </div>

            <div className='flex items-center justify-between my-10'>
              <img src={cube_shape2} alt="" className='h-10 mr-6'/>
              <div>
                <h4 className='text-xl mb-2'>Experience the Magic</h4>
                <p>Experience the transformative power of energy healing, where the unseen forces of the universe work to restore balance, rejuvenate the spirit, and ignite the body’s natural ability to heal.</p>
              </div>
            </div>

            <div className='flex items-center justify-between my-10'>
              <img src={cube_shape3} alt="" className='h-10 mr-6'/>
              <div>
                <h4 className='text-xl mb-2'>Proven Results, Real Transformations</h4>
                <p>Proven Results, Real Transformations: Experience the Power of Energy Healing. Witness how holistic practices can renew your body, mind, and spirit, creating lasting positive change.</p>
              </div>
            </div>

          </div>
        </div>
          <img src={page5} alt="" className='h-80 rounded-full shadow-2xl shadow-black'/>
      </div>
      <div className='flex flex-wrap justify-evenly items-center my-16 md:px-12 md:py-12 p-6 rounded-3xl text-white bg-gradient-to-tr from-purple-950 to-purple-700 gap-5 w-[85vw] '>
        <div className='w-[35rem]'>
          <h4 className='text-2xl font-semibold mb-4'>Start Your Journey With Us Today!</h4>
          <p className='text-md '>Whether you’re battling stress, chronic pain, or emotional challenges, our energy healing techniques are tailored to transform your struggles into strengths. Let us guide you toward a balanced, harmonious life.</p>
        </div>
        <Link to='/course' className='h-fit py-4 px-8 text-xl bg-neutral-800 shadow-inner shadow-black rounded-full hover:shadow-2xl'>Course</Link>
      </div>
    </div>
  )
}

export default Hero