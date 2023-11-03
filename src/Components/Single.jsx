import React from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

function Single() {
  let store = useSelector((state) => state.posts);
  let posts = store.posts
  const params = useParams();
  let postID = Number(params.id);
  let post = posts.find((post) => post.id === postID);
  return (
    <>
      <Title />
      <div className="single-photo">
        <Photo post={post}/>
        <Comments/>
      </div>
    </>
  );
}

export default Single;
