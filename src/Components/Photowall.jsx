import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

function Photowall({posts,onRemovePhoto}) {
  const navigate = useNavigate();
  return (
    <>
    <button className="addIcon" onClick={()=>navigate('/addphoto')}>+</button>
    <div className="photo-grid">
        photowall
        {posts.map((post,index)=><Photo key={index} post={post} onRemovePhoto={onRemovePhoto}/>)}
    </div>
    </>
  )
}

export default Photowall