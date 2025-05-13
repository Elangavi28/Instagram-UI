import React, { useEffect, useState } from 'react'

function Posts() {

    const[posts,setPost]=useState([])
    useEffect(()=>{
    fetch("http://localhost:3000/Posts")
    .then(response =>response.json())
    .then(data=>setPost(data))
    .catch((err)=>{
        return err
    })
},[])


  return (
    <div>
        {posts.length > 0 ?(
            <div className='feed'>
                {posts.map((post)=>(
                    <div key={post.id}>
                        <div className='dp-m'>
                        <img  className='dp' src={post.user.profile_picture} alt="profile_picture" />
                        <h5>{post.user.username}</h5>
                        <i className="dot fa-solid fa-ellipsis"></i>
                        </div>
                        <img className='post' src={post.image_url} alt="Post" />
                        <div>
                        <i className="bi fa-regular fa-heart"></i>
                        <i className="bi fa-regular fa-comment"></i>
                        <i className="bi fa-regular fa-paper-plane"></i>
                        <i className="bi fa-regular fa-bookmark"></i>
                        </div>
                        
                        <div className='likes'>{post.likes} likes</div>
                        <div>{post.caption}</div>
                    </div>
                ))}
            </div>):(
                <div>
                    loading Posts
                    </div>

        ) }
      
    </div>
  )
}

export default Posts
