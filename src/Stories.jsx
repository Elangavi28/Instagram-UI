import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Stories() {

  const[Story,setStories]=useState([])

  const navigate=useNavigate()
  let tot=0

  useEffect(()=>{
    fetch('http://localhost:3000/story')
    .then(response=>response.json())
    .then(data=>setStories(data))
    .catch(err=>console.log(err))
  },[])


  return (
    <div className='stry'>
      <div className='tot' style={{display:"none"}}>{tot=Story.length}</div>
        {Story.length > 0 ?(
          Story.map((story)=>(
            <div key={story.id} onClick={()=>{navigate(`/storys/${story.id}/${tot}`)}}>
              <div className='gradient-border'>
              <img src={story.user.profile_picture} alt="profile_picture" className='stry-dp' />
              </div>
              <p className='s-text'>{story.user.username}</p>
            </div>
          ))
        ):(
          <p>loading</p>
        )}
      
    </div>
  )
}

export default Stories
