import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentToReduxStore,
  addCommentToDatabase,
} from "../reducers/actions";
import { useParams } from "react-router-dom";

function Comments() {
  const comments = useSelector((state) => state.comments);
  console.log(comments);
  const params = useParams();
  const postID = params.id;
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  const existingIdComment = comments[postID];
  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(addCommentToReduxStore(postID, comment));
    dispatch(addCommentToDatabase(postID, comment));
    setComment("");
  };

  return (
    <div className="comment">
      {existingIdComment.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
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
