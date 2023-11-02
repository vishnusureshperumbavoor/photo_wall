import { DELETE_POST, ADD_POST, ADD_COMMENT } from "./posts";
import initialState from "../data/data";
import { combineReducers } from "redux";

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

const comments = (state = initialState, action) => {
  const id= action.payload1;
  const comment = action.payload2;
  console.log(action);
  switch (action.type) {
    case ADD_COMMENT:
      const existingPostId = state.comments.findIndex((item) => item.id === id);
      if (existingPostId !== -1) {
        const addComments = [...state.comments];
        // console.log("hello");
        // console.log(addComments[existingPostId].comments);
        addComments[existingPostId].comments.push(comment);
        return {
          ...state,
          comments: addComments,
        };
      } else {
        return {
          ...state,
          comments: [...state.comments, { id, comments: [comment] }],
        };
      }
    default:
      return state;
  }
};

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
