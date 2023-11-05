import React, { useEffect } from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";
import NotFound from "./NotFound";

function Single() {
  const navigate = useNavigate();
  let store = useSelector((state) => state.posts);
  let posts = store.posts;
  const params = useParams();
  let postID = Number(params.id);
  let post = posts.find((post) => post.id === postID);
  console.log(post);
  if(!post){
    return <NotFound/>
  }

  return (
    <>
      <Title />
      <div className="single-photo">
        <Photo post={post} />
        <Comments />
      </div>
    </>
  );
}

export default Single;
