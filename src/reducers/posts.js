import { ref, push, set, get, remove } from "firebase/database";
import { db } from "../database/config";

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const LOAD_POSTS = "LOAD_PHOTOS";
const POST_COLLECTION = "posts";

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

export const addToDatabase = (post) => {
  return async (dispatch) => {
    try {
      await set(push(ref(db, POST_COLLECTION)), post);
      console.log("added successfully");
      dispatch(addPost(post));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchData = () => {
  console.log("fetchdata called");
  return async (dispatch) => {
    const snapshot = await get(ref(db, POST_COLLECTION));
    let posts = [];
    posts = snapshot.val();
    posts = Object.keys(posts).map((index) => ({
      index,
      ...posts[index],
    }));
    posts.push(posts);
    dispatch(loadPosts(posts));
  };
};

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
};

export const deleteFromDatabase = (index, id) => {
  console.log("delete from database called");
  return async (dispatch) => {
    try {
      await remove(ref(db, `${POST_COLLECTION}/${index}`));
      console.log("deleted successfully from database");
      dispatch(deletePost(id));
    } catch (err) {
      console.log("deletion error");
    }
  };
};
