import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate=useNavigate()
  return (
    <div className='side'>
        <div className="menu">
        <img src="src\assets\print-204012277.webp" alt="" className='logo'/>
                <div className='sb'><i className="fa-solid fa-house"></i>Home</div>
                <div className='sb'><i className="fa-solid fa-magnifying-glass"></i>Search</div>
                <div className='sb'><i className="fa-solid fa-compass"></i>Explore</div>
                <div className='sb'><i className="fa-solid fa-circle-play"></i>Reels</div>
                <div className='sb'><i className="fa-solid fa-comment-dots"></i>Message</div>
                <div className='sb'><i className="fa-regular fa-heart"></i>Notification</div>
                <div className='sb'><i className="fa-regular fa-square-plus"></i>Create</div>
                <div className='sb' onClick={()=>{navigate('/profile')}}><i className="fa-solid fa-circle-user"></i>Profile</div>
        </div>
         <div className='footer-1'>       
          <div className='sb'><i className="fa-solid fa-bars"></i>More</div>
         </div>
    </div>
  )
}

export default Sidebar
