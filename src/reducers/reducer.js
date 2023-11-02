import {
  DELETE_POST,
  ADD_POST,
} from "../actions/posts";
import initialState from "../data/data";
import { combineReducers } from "redux";

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

const commentReducer = function comments(state=[],action){
  return state;
}



export default postsReducer;
