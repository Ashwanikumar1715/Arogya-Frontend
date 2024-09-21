import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Course() {

  const [courses, setCourses] = useState([])

  useEffect(()=>{
    axios.defaults.withCredentials = true
    axios.get(`https://arogya-backend-t515.onrender.com/user/signIn/course`)
    .then((res)=>{
      setCourses(res.data)
    })
    .catch((e)=>{
      console.log(e)
    })

  },[])

  return (
    <div className=" h-max  ">
      <div className='flex flex-wrap items-center justify-center pt-24 flex-col gap-8 '>
      <h1 className='text-8xl text-center mb-8 z-10 text-white drop-shadow-[0_3.2px_3.6px_rgba(0,0,0,0.8)] font-bold'>Courses</h1>
      <div className='flex flex-wrap items-center justify-center gap-24'>
        {courses.map((res)=> <Card key={res._id} id={res._id} title={res.title} description={res.description} price={res.price}/>)}
        </div>
      </div>
    </div>
  )
}
function Card({id, title, description, price}){
  
  const truncatedDisc = description.length>200? description.slice(0,200)+"..." : description;

  return(
    <div className='sm:w-[95vw] md:w-[60vw]  flex flex-wrap gap-8 p-5 justify-center items-center rounded-lg shadow-2xl shadow-black m-2'>
      <div className=' lg:w-[48%] sm:h-full '>
        <img src="https://static.vecteezy.com/system/resources/previews/029/629/575/non_2x/monks-in-meditation-tibetan-monk-from-behind-sitting-on-a-rock-near-the-water-among-misty-mountains-free-photo.jpeg" alt="" className='rounded-xl '/>
      </div>
      <div className='lg:w-[40%] sm:h-full flex flex-col gap-1'>
        <h2 className='text-3xl font-bold text-white'>{title}</h2>
        <p className='mt-4 text-lg text-white'>{truncatedDisc}</p>
        <span>{price}</span>
        <Link to={`/courseDetail/${id}`} className='bg-blue-800 shadow-lg shadow-blue-950 p-2 text-center rounded text-xl text-white font-semibold'>View Details</Link>
      </div>
    </div>
  )
}

export default Course