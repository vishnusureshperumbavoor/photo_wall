import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePostFromDatabase,
  deletePostFromReduxStore,
  fetchCommentsFromDatabase,
} from "../reducers/actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Photo({ post }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let comments = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(fetchCommentsFromDatabase());
  }, [dispatch])
  

  const handleDeletePost = (index) => {
    //dispatch(deletePostFromReduxStore(postId));
    dispatch(deletePostFromDatabase(index));
    navigate("/");
  };

  return (
    <div key={post.index}>
      <figure className="figure">
        <Link to={`/single/${post.index}`}>
          <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        {post.index} <br></br> {post.date} <br /><br />
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              handleDeletePost(post.index);
            }}
          >
            Remove
          </button>
          <Link className="button" to={`/single/${post.index}`}>
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {comments[post.index] ? comments[post.index].length : 0}
            </div>
          </Link>
        </div>
      </figure>
    </div>
  );
}

export default Photo;
