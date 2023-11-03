import {
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  LOAD_POSTS,
  FETCH_SINGLE_POST,
} from "./posts";
import initialState from "../data/reduxStore";
import { combineReducers } from "redux";

const posts = (state = initialState, action) => {
  console.log("state");
  console.log(state);
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case DELETE_POST:
      return {
        ...state,
        posts: state.filter((post) => post.id !== action.payload),
      };

    case LOAD_POSTS:
      return action.payload;

    default:
      return state;
  }
};

const comments = (state = initialState, action) => {
  const id = action.payloadId;
  const comment = action.payloadComment;
  switch (action.type) {
    case ADD_COMMENT:
      const existingPostId = state.comments.findIndex((item) => item.id === id);
      if (existingPostId !== -1) {
        const addComments = [...state.comments];
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
