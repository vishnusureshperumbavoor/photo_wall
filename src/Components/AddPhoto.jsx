import React, { useEffect, useState } from 'react'

let num = 3;

function AddPhoto() {
    const [formData, setFormData] = useState({id:num})

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

    function handleSubmit(event){
        event.preventDefault();
    }
  return (
    <>
    <h1>PhotoWall</h1>
    <div className="">
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Link" name="imageLink" onChange={handleChange} />
        <input type="text" placeholder="Description" name="description" onChange={handleChange} />
        <button>Post</button>
    </form>
    </div>
    </>
  )
}

export default AddPhoto