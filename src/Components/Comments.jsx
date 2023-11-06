import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCommentToReduxStore, addCommentToDatabase } from "../reducers/actions";
import { useParams } from "react-router-dom";

function Comments() {
  console.log("current state");
  let comments = useSelector((state) => state.comments);
  console.log(comments);
  const params = useParams();
  const postID = params.id;
  console.log("postid = ",postID);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(addCommentToReduxStore(postID, comment));
    dispatch(addCommentToDatabase(postID, comment));
    setComment("");
  };

  // const existingId = comments.filter((comment) => comment[postID] === postID);
  // console.log("existingid = " + existingId);
  // if (existingId[0]) {
  //   comments = existingId[0].comments;
  // }

  return (
    <div className="comment">
      {/* {existingId && existingId[0] && existingId[0].comments
        ? comments.map((comment, index) => <p key={index}>{comment}</p>)
        : null} */}
      <form action="" className="comment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="comment"
          name="comment"
          onChange={handleChange}
          id="comment"
          value={comment}
        />
        <br />
        <br />
        <input type="submit" hidden />
      </form>
    </div>
  );
}
export default Comments;
