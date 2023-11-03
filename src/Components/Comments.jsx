import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, addCommentToDatabase } from "../reducers/actions";
import { useParams } from "react-router-dom";

function Comments() {
  let comments = useSelector((state) => state.comments.comments);
  const params = useParams();
  const postID = Number(params.id);
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //dispatch(addComment(postID, comment));
    dispatch(addCommentToDatabase(postID, comment));
    setComment("");
  };

  // const existingId = comments.filter((comment) => comment.id === postID);
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
