import React from "react";
import Photo from "./Photo";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Photowall() {
  let posts = useSelector((state) => state.posts.posts);
  console.log(posts);
  const navigate = useNavigate();
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
          .slice()
          .sort((a, b) => b.id - a.id)
          .map((post, index) => (
            <Photo key={index} post={post} />
          ))}
      </div>
    </div>
  );
}

export default Photowall;
