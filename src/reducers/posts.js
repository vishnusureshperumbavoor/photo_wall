import { ref, push, set } from "firebase/database";
import { db } from "../database/config";

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
// export const UPDATE_DATABASE = "UPDATE_DATABASE";

export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    payload: postId,
  };
};

export const addComment = (id, comment) => {
  return {
    type: ADD_COMMENT,
    payloadId: id,
    payloadComment: comment,
  };
};

export const updateDatabase = async (post) => {
  // console.log(post);
  // return async (dispatch) => {
    try {
    await set(push(ref(db, "posts")), post);
    alert("successfull");
    // dispatch(addPost(post));
  } catch (err) {
    alert("eror");
  }
  // };

    // try {
    //   
    //   await set(ref(db, "posts/" + post.id), post);
    //   dispatch(addPost(post));
    //   alert("data successfully updated");
    // } catch (err) {
    //   alert("error");
    //   console.log(err);
    // }
};
