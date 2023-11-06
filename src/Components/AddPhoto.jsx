import React, { useState } from "react";
import { addPostToDatabase, addPostToReduxStore } from "../reducers/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

function AddPhoto() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPost = (event) => {
    const newFormData = { ...formData, date: Math.floor(Date.now()) };
    event.preventDefault();
    //dispatch(addPostToReduxStore(newFormData))
    dispatch(addPostToDatabase(newFormData));
    navigate("/");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Title />
      <div className="formdiv">
        <form action="" onSubmit={handleAddPost}>
          <input
            type="text"
            placeholder="Link"
            name="imageLink"
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            required
          />
          <br />
          <button className="button-3">Post</button>
        </form>
      </div>
      <p>Nature</p>
      <p>
        https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=
      </p>
      <br />
      <br />
      <p>butterfly</p>
      <p>
        https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg
      </p>
    </>
  );
}

export default AddPhoto;
