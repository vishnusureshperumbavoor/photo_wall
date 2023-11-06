import React from "react";
import Title from "./Title";
import PhotoWall from "./Photowall";
import { useSelector } from "react-redux";

function Main() {
  return (
    <>
      <Title />
      <PhotoWall/>
    </>
  );
}

export default Main
