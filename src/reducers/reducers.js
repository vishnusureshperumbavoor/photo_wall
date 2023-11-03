import {
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  LOAD_POSTS,
  FETCH_SINGLE_POST,
} from "./actions";
import { initialState } from "../data/data";

export const postReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };

    case DELETE_POST:
      let posts = state.posts
      return {
        ...state,
        posts: posts.filter((post) => post.id !== action.payload),
      };

    case LOAD_POSTS:
      return action.payload;

    default:
      return state;
  }
};

export const commentReducer = (state = initialState, action) => {
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
