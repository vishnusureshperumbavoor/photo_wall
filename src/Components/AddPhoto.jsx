import React, { useState } from "react";
import { addPostToDatabase ,addPostToReduxStore} from "../reducers/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

function AddPhoto() {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPost = (event) => {
    const newFormData = { ...formData, id: Math.floor(Date.now()) };
    event.preventDefault();
    dispatch(addPostToReduxStore(newFormData))
    //dispatch(addPostToDatabase(newFormData));
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
    </>
  );
}

export default AddPhoto;
