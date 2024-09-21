import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Signup() {

  const [username, setusername] = useState('')
const [password, setPassword] =useState('')
const [name, setName] = useState('')
const navigate = useNavigate()

const Handle = ()=>{
  axios.post(`https://arogya-backend-t515.onrender.com/user/signUp/`, { 
    name : name,
    username : username,
    password : password
   }).then((res)=>{
        navigate('/login')
   }).catch((err)=>{
    console.warn(err)
   })
}

  return (
    <div className=' h-[85vh] min-w-screen flex items-center justify-center'>
      <div className='rounded-3xl p-5 text-white flex flex-col text-lg max-w-fit shadow-gray-950 shadow-2xl'>
      <h1 className='text-xl font-mono font-semibold text-center mb-6'>Sign Up</h1>
        <input 
          type="text" 
          placeholder='name' 
          className='mb-8 p-2 w-72 text-black rounded' 
          onChange={(e)=>setName(e.target.value)}/>
        <input 
          type="text" 
          placeholder='username' 
          className='mb-8 p-2 w-72 text-black rounded' 
          onChange={e=>setusername(e.target.value)}/>
        <input 
          type="password" 
          name="" id="" 
          placeholder='password' 
          className='mb-8 p-2 w-72 text-black rounded' 
          onChange={e=>setPassword(e.target.value)}/>
        <button 
        type="submit" 
        className='p-2 rounded-md w-72 bg-orange-500  mb-3 text-lg font-medium' 
        onClick={Handle}>SignUp</button>
      </div>
    </div>
  )
}

export default Signup