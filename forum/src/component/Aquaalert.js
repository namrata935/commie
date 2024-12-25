import React from 'react'
import '../css/Aquaalert.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
function Aquaalert() {
  return (
    <div> 
      <Navbar />
      <div className='aa__content'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default Aquaalert
