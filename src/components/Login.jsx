import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({setLoggedIn}) {

  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()


  const HandleSubmit = (e)=>{
    e.preventDefault()
    console.log("chalu hai")
    axios.defaults.withCredentials = true;
    axios.post(`https://arogya-backend-t515.onrender.com/user/signIn/`,{ username, password   })
    // console.log('kaam ho rha hai')
    .then((result) => {
      // console.log("result",result)
      if(result.data.sucess){
        setLoggedIn(true);
        navigate('/course');
        location.reload()
      }
      else{
        console.log("invalid")
      }
    })
    .catch(err => console.log(err))
    
    
  }

  return (
    <div className='h-[85vh] min-w-screen flex items-center justify-center '>
      <div className=' rounded-3xl p-5 text-white flex flex-col text-lg max-w-fit shadow-gray-950 shadow-2xl'> 
        
        <h1 className='text-xl font-mono font-semibold text-center mb-6'>Login</h1>
        <form onSubmit={HandleSubmit}>
          <label htmlFor="username" className='mb-4 text-sm font-thin' >Username</label><br />
          <input 
            type="text" 
            name='username'   
            className='mb-8 p-2 w-72 text-black rounded'  
            onChange={(e)=>setusername(e.target.value)}
          /><br />
          <label htmlFor="password" className='mb-4 text-sm font-thin'>Password</label><br />
          <input 
            type="password" 
            name="password" 
            id="" 
            className='p-2 mb-8 w-72 text-black rounded' 
            onChange={(e)=>setPassword(e.target.value)}
          /><br />
          <input type="submit" value="CONTINUE" className='p-2 rounded-md w-72 bg-orange-500  mb-3 text-lg font-medium' />
        </form>
        <span className='text-sm text-center'>New to Arogya?</span>
      </div>
    </div>
  )
}

export default Login