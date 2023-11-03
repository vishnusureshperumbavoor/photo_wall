import React from "react";
import Title from "./Title";
//import { connect } from "react-redux";
import PhotoWall from "./Photowall";

function Main() {
  return (
    <>
      <Title />
      <PhotoWall/>
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts.posts,
//   };
// };

// export default connect(mapStateToProps)(Main);
export default Main
