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

export const updateDatabase = (post) => {
  return async (dispatch) => {
    try {
      await set(push(ref(db, POST_COLLECTION)), post);
      dispatch(addPost(post));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    const snapshot = await get(ref(db, POST_COLLECTION));
    // console.log("snapshot");
    // console.log(snapshot.val());
    // console.log("Object.values(snapshot.val())")
    // console.log(Object.values(snapshot.val()))
    let posts = [];
    //posts.push(Object.values(snapshot.val()));
    posts = snapshot.val();
    posts = Object.keys(posts).map((index) => ({
      index,
      ...posts[index],
    }));
    posts.push(posts);

    // posts.forEach((element)=>{
    dispatch(loadPosts(posts));
    // })
  };
};

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
};

export const deleteFromDatabae = (id) => {
  console.log("delete from database called");
  return async (dispatch) => {
    await remove(ref(db, `${POST_COLLECTION}/${id}`));
    // dispatch(deletePost(index));
  };
};
