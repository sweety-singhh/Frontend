import React from 'react'

import Home from './home/Home'
import {Route,Routes} from "react-router-dom"
import Courses from './courses/Courses'
import Contacts from './contacts/Contacts'
import Signup from './components/Signup'
import About from './about/About'
function App() {
  return (
   <>
  {/* <Home/>
  <Course/> */}
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
   <Route path ="/" element={<Home/>} />
   <Route path ="/course" element={<Courses/>} />
   <Route path ="/contact" element={<Contacts/>} />
   <Route path ="/signup" element={<Signup/>} />
   <Route path ="/about" element={<About/>} />

  </Routes>
  </div>


   </> 
  )
}

export default App
