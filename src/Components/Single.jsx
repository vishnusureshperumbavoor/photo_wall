import React, { useEffect } from "react";
import Title from "./Title";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";

function Single({posts}) {
  const params = useParams();
  let postID = params.id;
  postID = Number(postID)
  const post = posts.find((post)=>post.id===postID)
  console.log(post);
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(Single);
