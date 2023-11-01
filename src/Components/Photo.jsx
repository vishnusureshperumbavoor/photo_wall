import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deletePost } from '../actions/posts'

function Photo({post}) {
  const dispatch = useDispatch();

  const handleDeletePost = (postId)=>{
    dispatch(deletePost(postId));
  }

  return (
    <div key={post.id}>
        <figure className="figure">
            photo
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className='button-container'>
            <button className='remove-button' onClick={()=>{
               handleDeletePost(post.id)
            }}>Remove</button>
            </div>
        </figure>
    </div>
  )
}

export default Photo