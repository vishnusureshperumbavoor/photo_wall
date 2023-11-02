import React from "react";
import { useNavigate } from "react-router-dom";

function Title() {
  const navigate = useNavigate();
  return <h1 onClick={()=>navigate("/")} >PhotoWall</h1>;
}

export default Title;
