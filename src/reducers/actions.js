import { ref, push, set, get, remove } from "firebase/database";
import { db } from "../database/config";

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const LOAD_POSTS = "LOAD_POSTS";
export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";
export const POST_COLLECTION = "posts";
export const COMMENT_COLLECTION = "comments";

export const addPostToReduxStore = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const deletePostFromReduxStore = (index) => {
  return {
    type: DELETE_POST,
    payload: index,
  };
};

export const addPostToDatabase = (post) => {
  return async (dispatch) => {
    try {
      await set(push(ref(db, POST_COLLECTION)), post);
      console.log("added " + post.description + " successfully to database");
      dispatch(addPostToReduxStore(post));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addCommentToReduxStore = (id, comment) => {
  return {
    type: ADD_COMMENT,
    payloadId: id,
    payloadComment: comment,
  };
};

export const addCommentToDatabase = (index, comment) => {
  return async (dispatch) => {
    try {
      await set(push(ref(db, COMMENT_COLLECTION + "/" + index)), comment);
      dispatch(addCommentToReduxStore(index, comment));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchDataFromDatabase = () => {
  return async (dispatch) => {
    try {
      const snapshot = await get(ref(db, POST_COLLECTION));
      if (snapshot.exists()) {
        const postsData = snapshot.val();
        const posts = Object.keys(postsData).map((index) => ({
          index,
          ...postsData[index],
        }));
        // const postsArray = Object.keys(postsData).map((key) => ({
        //   [key]: {
        //     ...postsData[key],
        //   },
        // }));
        //const posts = Object.values(postsData);
        dispatch(fetchDataFromReduxStore(posts));
        return posts;
      } else {
        console.log("No data found in Firebase.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching data from Firebase:", err);
      return err;
    }
  };
};

export const fetchDataFromReduxStore = (posts) => {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
};

export const deleteFromDatabase = (index) => {
  return async (dispatch) => {
    try {
      await remove(ref(db, `${POST_COLLECTION}/${index}`));
      console.log("deleted " + index + " successfully from database");
      try {
        dispatch(deletePostFromReduxStore(index));
        console.log("deleted " + index + " from redux store");
      } catch (err) {
        console.log("could not delete " + index + " from redux store");
      }
    } catch (err) {
      console.log("deletion from db error");
    }
  };
};
