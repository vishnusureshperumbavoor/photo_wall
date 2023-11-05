import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFromDatabase,
  deletePostFromReduxStore,
  fetchDataFromDatabase,
  fetchDataFromReduxStore,
} from "../reducers/actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Photo({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let comments = useSelector((state) => state.comments.comments);

  const handleDeletePost = (index, postId) => {
    //dispatch(deletePostFromReduxStore(postId));
    dispatch(deleteFromDatabase(index,postId))
    //navigate("/");
  };

  let commentslength = 0;

  function getCommentCount(postId) {
    let matchingComments = comments.filter((comment) => comment.id === postId);
    if (matchingComments.length > 0) {
      commentslength = matchingComments[0].comments.length;
    }
    return commentslength;
  }

  return (
    <div key={post.id}>
      <figure className="figure">
        <Link to={`/single/${post.id}`}>
          <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        {post.id} <br></br> {post.index}
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              handleDeletePost(post.index, post.id);
            }}
          >
            Remove
          </button>
          <Link className="button" to={`/single/${post.id}`}>
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {`${getCommentCount(post.id)}`}
            </div>
          </Link>
        </div>
      </figure>
    </div>
  );
}

export default Photo;
