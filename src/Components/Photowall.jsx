import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDataFromDatabase,
  fetchDataFromReduxStore,
} from "../reducers/actions";
import Photo from "./Photo";

function Photowall() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let state = useSelector((state) => state);
  state = state.posts;
  console.log("state = ");
  console.log(state.posts);
  useEffect(() => {
      try {
        dispatch(fetchDataFromDatabase());
      } catch (err) {
        console.error("Error fetching data:", err);
      }
  }, [dispatch]);

  // useEffect(() => {
  //   console.log("state");
  //   console.log(state);
  // }, [state]);
  //let sortedPosts = posts.sort((a, b) => b.id - a.id);

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
        {state.map((post, index) => (
          <Photo key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Photowall;
