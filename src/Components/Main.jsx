import React from "react";
import Title from "./Title";
import PhotoWall from "./Photowall";
import { useSelector } from "react-redux";

function Main() {
  let posts = useSelector((state) => state.posts);
  return (
    <>
      <Title />
      <PhotoWall posts={posts}/>
    </>
  );
}

export default Main
