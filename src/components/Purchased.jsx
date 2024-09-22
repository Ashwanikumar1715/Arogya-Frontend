import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Purchased() {

    const [purchase, setPurchase] = useState([]);

    useEffect(()=>{
      axios.defaults.withCredentials = true;
      axios.get(`http://localhost:8000/user/signin/purchasedCourse`)
      .then(res=> setPurchase(res.data.message))
      .catch(err=>console.log(err))
    },[])

  return (
    <>
      <h1 className='text-white text-8xl font-serif text-center m-10'>Purchased</h1>
      <div className='flex flex-wrap justify-center items-center'>
        {purchase.map(res=><Card key={res._id} title={res.title} description={res.description} price={res.price} />)}
      </div>
    </>
  )
}
function Card({title, description, price}){
  

  return(
    <div className='w-1/4 m-3  bg-slate-950 flex flex-wrap p-2  mb-24 rounded-lg shadow-2xl shadow-slate-400 border border-white relative'>
      <div className='  m-4 '>
        <img src="https://static.vecteezy.com/system/resources/previews/029/629/575/non_2x/monks-in-meditation-tibetan-monk-from-behind-sitting-on-a-rock-near-the-water-among-misty-mountains-free-photo.jpeg" alt="" className='rounded-xl border border-white'/>
      </div>
        <h2 className='text-2xl font-bold text-white mx-3'>{title}</h2>
        <button className='bg-blue-400 w-full h-12 m-3 mt-4 rounded-md text-xl text-white'>View Content</button>
    </div>
  )
}

export default Purchased