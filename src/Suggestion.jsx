import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Suggestion() {

  const[profile,setProfile]=useState(null)
  const[Suggestion,setSuggestion]=useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/profile")
  .then(response=>response.json())
  .then(data=>setProfile(data))
  .catch(err=> console.log(err))

  fetch("http://localhost:3000/Suggestions")
  .then(response=>response.json())
  .then(data=>setSuggestion(data))
  .catch(err=> console.log(err))

 },[] )
    const handleFollow=async(id,username)=>{
       axios.post('http://localhost:3000/Followers',{"id":id, "username":username})
      .then(alert('followed'))
      .catch(err=>console.log(err))
    }



  return (
    <div>
      <div className='suggestion'>
      {profile ? 
     <div className='pf-m'>
        <img  className='pf' src={profile.profile_picture} alt="profile_picture" />
        <h5>{profile.username}</h5>
        <p className='sw'>Switch</p>
      </div>
      
      : <p>Loading....</p>}
      <div className="see">
        <p>Suggested for you</p>
        <b>See All</b>
      </div>
      {Suggestion.length > 0 ? (
            <div className='sg1'>
                {Suggestion.map((suggestion)=>(
                    <div key={suggestion.user_id}>
                        <div className='sg-m'>
                          <img  className='sg' src={suggestion.profile_picture} alt="profile_picture" />
                          <h5>{suggestion.username}</h5>
                          <a href='' className='fol' onClick={()=>{handleFollow(suggestion.user_id,suggestion.username)}}>Follow</a>
                        </div> 
                    </div>
                ))}
            </div>):(
                <div>
                    loading Posts
                </div>

        ) }
      </div>
      <p className='fot'>About . Help . Press. API . Jobs . Privacy . Terms . Locations . Language
        . Meta Verified</p>
      <p className='fot1'>© 2025 Instagram from Meta</p> 
    </div>

  )
}

export default Suggestion
