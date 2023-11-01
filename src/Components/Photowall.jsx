import React from 'react'
import Photo from './Photo'

function Photowall({posts}) {
  return (
    <div className="photo-grid">
        photowall
        {posts.map((post,index)=><Photo key={index} post={post}/>)}
    </div>
  )
}

export default Photowall