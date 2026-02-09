import React from 'react'
import '../css/Aquaalert.css'
import AAbar from './AAbar'
import Sidebar from './Sidebar'
import Feed from './Feed'
function Aquaalert() {
  return (
    <div> 
      <AAbar />
      <div className='aa__content'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default Aquaalert
