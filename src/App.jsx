import React, { useState } from 'react'

import Course from './components/Course'
import Navbar from './components/Navabar'
import CourseDetail from './components/CourseDetail'
import {Routes,Route} from 'react-router-dom'
import Hero from './components/Hero'
import Login from './components/Login'
import Signup from './components/Signup'
import Purchased from './components/Purchased'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const [loggedIn , setLoggedIn] = useState(true);
  const locomotive = new LocomotiveScroll()

  return (
    <React.Fragment>
      <div >
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      </div>
      <div>
        <Routes>
          <Route path='/login' element={<Login setLoggedIn={setLoggedIn}/>}/>
          <Route path='/signUp' element={<Signup/>}/>
          <Route path='/' element={<Hero/>}/>
          <Route path='/CourseDetail/:id' element={<CourseDetail/>}/>
          <Route path='/course' element={<Course />}/>
          <Route path='/purchase' element={<Purchased />}/>
        </Routes>

      </div>
      
    </React.Fragment>
  )
}

export default App
