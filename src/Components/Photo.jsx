import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../reducers/posts";
import { Link } from "react-router-dom";

function Photo({ post }) {
  const dispatch = useDispatch();

  const handleDeletePost = (postId) => {
    dispatch(deletePost(postId));
  };

  return (
    <div key={post.id}>
      <figure className="figure">
        <Link to={`/single/${post.id}`}>
          <img className="photo" src={post.imageLink} alt={post.description} />
        </Link>
        {post.id}
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              handleDeletePost(post.id);
            }}
          >
            Remove
          </button>
        </div>
      </figure>
    </div>
  );
}

export default Photo;
