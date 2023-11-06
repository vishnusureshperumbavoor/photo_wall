import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchPostsFromDatabase,
  fetchPostsFromReduxStore,
} from "../reducers/actions";
import Photo from "./Photo";

function Photowall({posts}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      dispatch(fetchPostsFromDatabase());
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }, [dispatch]);

  
  if (posts.length > 0) {
    posts = posts.sort((a, b) => b.date - a.date);
  }

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
        {posts.map((post, index) => (
          <Photo key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Photowall;
