import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {

    const[profile,setProfile]=useState(null)

    const[followers,setFollower]=useState([])
    const[unfollow,setUnfollow]=useState(0)

    useEffect(()=>{
         axios.get('http://localhost:3000/profile')
        .then(data=>setProfile(data.data))
        .catch(err=>console.log(err))

        axios.get('http://localhost:3000/Followers')
        .then(data=>setFollower(data.data))
        .catch(err=>console.log(err))

    },[unfollow])

    function handleOnchange(e){
        setProfile(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handleUpdate= async()=>{
        axios.put('http://localhost:3000/profile',profile)
        .then(console.log('updated'))
        .catch(err=>console.log(err))
        
    }
    const handleUnfollow=async(id)=>{
       axios.delete(`http://localhost:3000/Followers/${id}`)
      .then(alert('unfollow'))
      .then(setUnfollow(!unfollow))
      .catch(err=>console.log(err))
    }

  return (
    <div className='prof-m'>
      {profile ? (<div className='prof-m1'>
        <img src={profile.profile_picture} alt="rofile_picture" className='profile' />
            <p>{profile.username}</p>
            <input type="text" value={profile.username} name='username' onChange={handleOnchange} />
            <input type="text" name='profile_picture' value={profile.profile_picture} onChange={handleOnchange} />
            <button className='btn' onClick={handleUpdate}>update</button>
        </div>)
        :(<div>Loading Profile....</div>)
      }
      {followers.length > 0 ? (
        followers.map(follow=>(
            <div key={follow.user_id} className='followers'>
                <b>{follow.username}</b>
                <button className='btn-2' onClick={()=>{handleUnfollow(follow.id)}}>unfollowed</button>
            </div>
        ))
      ):(
        <div></div>
      ) }
    </div>
  )
}

export default Profile
