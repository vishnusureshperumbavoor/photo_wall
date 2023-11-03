import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData, fetchDataFromReduxStore } from "../reducers/actions";
import Photo from "./Photo";

function Photowall() {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  let state = useSelector((state) => state.posts);
  console.log("state deii");
  console.log(state);
  let newstate = state.posts;
  // useEffect(() => {
  //   dispatch(fetchDataFromReduxStore());
  // }, []);

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
        {
          newstate.map((post, index) => <Photo key={index} post={post} />)}
      </div>
    </div>
  );
}

export default Photowall;
