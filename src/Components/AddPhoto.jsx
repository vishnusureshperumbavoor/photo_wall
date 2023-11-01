import React, { useEffect, useState } from 'react'
import { addPost } from '../actions/posts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddPhoto() {
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleAddPost = (event)=>{
    event.preventDefault();
    dispatch(addPost(formData))
    navigate("/")
  }

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
  return (
    <>
    <h1 onClick={()=>navigate("/")}>PhotoWall</h1>
    <div className="formdiv">
    <form action="" onSubmit={handleAddPost}>
        <input type="text" placeholder="Link" name="imageLink" onChange={handleChange} /><br /><br />
        <input type="text" placeholder="Description" name="description" onChange={handleChange} /><br />
        <button className="button-3">Post</button>
    </form>
    </div>
    </>
  )
}

export default AddPhoto