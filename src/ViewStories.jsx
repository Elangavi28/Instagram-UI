import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate} from 'react-router-dom'

function ViewStories() {
  const {id,tot}=useParams()
  
  const[story,setStory]=useState(null)

  const navigate=useNavigate()


  useEffect(()=>{
    fetch(`http://localhost:3000/story/${id}`)
    .then(response=>response.json())
    .then(data=>setStory(data))
    .catch(err=>console.log(err))
  },[id]);

  if(id > tot || id <= 0){
    navigate('/');
  }

  return (
    <div>
      {story ? <div className='stories'>
             <Link to={`http://localhost:5173/storys/${Number(id)-1}/${tot}`}><i className="arrow fa-solid fa-arrow-left"></i></Link> 
             <img src={story.image} alt="image"  className='stry-img'/>
             <Link to={`http://localhost:5173/storys/${Number(id)+1}/${tot}`}><i className="arrow fa-solid fa-arrow-right"></i></Link>
        </div>
      : <div>Loading...</div>}
      </div>
  )
}

export default ViewStories
