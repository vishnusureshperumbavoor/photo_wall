import { ref, push, set, get, remove } from "firebase/database";
import { db } from "../database/config";

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const LOAD_POSTS = "LOAD_POSTS";
export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST"
export const POST_COLLECTION = "posts";
export const COMMENT_COLLECTION = "comments";

export const addPostToReduxStore = (post) => {
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

export const addPostToDatabase = (post) => {
  return async (dispatch) => {
    try {
      await set(push(ref(db, POST_COLLECTION)), post);
      console.log("added successfully");
      dispatch(addPostToReduxStore(post));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addCommentToDatabase = (index, comment) => {
  return async (dispatch) => {
    try {
      await set(push(ref(db, COMMENT_COLLECTION)), comment);
      console.log("comment added successfully");
      // dispatch(addComment(index,comment));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDataFromDatabase = () => {
  return async (dispatch) => {
    const snapshot = await get(ref(db, POST_COLLECTION));
    let posts = [];
    posts = snapshot.val();
    posts = Object.keys(posts).map((index) => ({
      index,
      ...posts[index],
    }));
    posts.push(posts);
    dispatch(fetchDataFromReduxStore(posts));
  };
};

export const fetchDataFromReduxStore = (posts) => {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
};

export const deleteFromDatabase = (index, id) => {
  return async (dispatch) => {
    try {
      await remove(ref(db, `${POST_COLLECTION}/${index}`));
      console.log("deleted successfully from database");
      // try {
      //   dispatch(deletePost(id));
      //   console.log("deleted from redux store");
      // } catch (err) {
      //   console.log("could not delete redux store");
      // }
    } catch (err) {
      console.log("deletion from db error");
    }
  };
};
