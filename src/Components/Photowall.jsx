import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../reducers/posts";
import Photo from "./Photo";

function Photowall() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let posts = useSelector((state) => state.posts);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

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
        {posts
          ? posts.map((post, index) => <Photo key={index} post={post} />)
          : null}
      </div>
    </div>
  );
}

export default Photowall;
