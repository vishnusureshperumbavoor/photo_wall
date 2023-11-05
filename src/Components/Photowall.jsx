import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchDataFromReduxStore } from "../reducers/actions";
import Photo from "./Photo";

function Photowall() {
  const [newState, setNewState] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let state = useSelector((state) => state.posts);
  useEffect(() => {
    setNewState(state.posts);
  }, []);
  console.log("hello state");
  console.log(state);

  return (
    <div className="photowall">
      <button
        role="button-3"
        className="button-3"
        onClick={() => navigate("/addphoto")}
      >
        Add Image
      </button>
      <div className="photo-grid">
        {newState.map((post, index) => (
          <Photo key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Photowall;
