import { ref, push, set, get, remove } from "firebase/database";
import { db } from "../database/config";

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const DELETE_COMMENT = "DELETE_COMMENT"
export const ADD_COMMENT = "ADD_COMMENT";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
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

export const fetchPostsFromDatabase = () => {
  return async (dispatch) => {
    try {
      const snapshot = await get(ref(db, POST_COLLECTION));
      if (snapshot.exists()) {
        const postsData = snapshot.val();
        const posts = Object.keys(postsData).map((index) => ({
          index,
          ...postsData[index],
        }));
        dispatch(fetchPostsFromReduxStore(posts));
        // let postsData = []
        // snapshot.forEach((child)=>{
        //   postsData.push(child.val())
        // })
        //dispatch(fetchPostsFromReduxStore(postsData))
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

export const fetchPostsFromReduxStore = (posts) => {
  return {
    type: FETCH_POSTS,
    payload: posts,
  };
};

export const fetchCommentsFromDatabase = () => {
  return async (dispatch) => {
    try {
      const snapshot = await get(ref(db,COMMENT_COLLECTION))
      if(snapshot.exists()){
        let comments = {}
        snapshot.forEach((child)=>{
          comments[child.key] = Object.values(child.val())
        })
        dispatch(fetchCommentsFromReduxStore(comments))
      }else{
        console.log("no comment exists in database");
        return null;
      }
    } catch (err) {
      console.log("error fetching comments from database");
      return err;
    }
  };
};

export const fetchCommentsFromReduxStore = (comments)=>{
  return{
    type: FETCH_COMMENTS,
    comments
  }
}

export const deletePostFromDatabase = (index) => {
  return async (dispatch) => {
    try {
      await remove(ref(db, `${POST_COLLECTION}/${index}`));
      console.log("deleted " + index + " successfully from database");
      try {
        dispatch(deletePostFromReduxStore(index));
        console.log("deleted " + index + " from redux store");
        try{
          dispatch(deleteCommentsFromDatabase(index))
          console.log("deleted comments from database");
        }catch(err){
          console.log("error deleting comments from database");
        }
      } catch (err) {
        console.log("could not delete " + index + " from redux store");
      }
    } catch (err) {
      console.log("deletion from db error");
    }
  };
};

export const deleteCommentsFromDatabase = (index) => {
  return async (dispatch) => {
    try {
      await remove(ref(db, `${COMMENT_COLLECTION}/${index}`));
      console.log("deleted " + index + "comments from database");
      try {
        dispatch(deleteCommentsFromReduxStore(index));
        console.log("deleted " + index + " comments from redux store");
      } catch (err) {
        console.log("could not delete " + index + " comments from redux store");
      }
    } catch (err) {
      console.log("deletion from db error");
    }
  };
};

export const deleteCommentsFromReduxStore = (index) => {
  return {
    type: DELETE_COMMENT,
    payload: index,
  };
};