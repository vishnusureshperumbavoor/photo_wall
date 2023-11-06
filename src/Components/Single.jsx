import React, { useEffect } from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";
import NotFound from "./NotFound";

function Single() {
  const navigate = useNavigate();
  let posts = useSelector((state) => state.posts);
  
  const params = useParams();
  let postID = params.id 
  let post = posts.find((post) => post.index === postID);
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
