import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

function Photowall({posts}) {
  const navigate = useNavigate();
  return (
    <>
    <button className="addIcon" onClick={()=>navigate('/addphoto')}>+</button>
    <div className="photo-grid">
        {posts.map((post,index)=><Photo key={index} post={post} />)}
    </div>
    </>
  )
}

export default Photowall