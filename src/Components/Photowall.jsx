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
  dispatch(fetchDataFromDatabase());
  const state = useSelector((state) => state.posts);
  let sortedPosts = state.slice().sort((a, b) => b.id - a.id);

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
        {sortedPosts.length > 0 &&
          sortedPosts.map((post, index) => <Photo key={index} post={post} />)}
      </div>
    </div>
  );
}

export default Photowall;
