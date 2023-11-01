import React from 'react'

function Photo({post,onRemovePhoto}) {
  return (
    <div>
        <figure className="figure">
            photo
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className='button-container'>
            <button className='remove-button' onClick={()=>{
               onRemovePhoto(post)
            }}>Remove</button>
            </div>
        </figure>
    </div>
  )
}

export default Photo