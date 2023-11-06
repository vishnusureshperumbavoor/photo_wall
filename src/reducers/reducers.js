import {
  DELETE_POST,
  ADD_POST,
  ADD_COMMENT,
  FETCH_POSTS,
  FETCH_COMMENTS,
} from "./actions";
import { initialState } from "../data/data";

export const postReducer = (state = initialState, action) => {
  console.log("postsreducer");
  console.log(state);
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export const commentReducer = (state = initialState, action) => {
  console.log("commetsreducer");
  console.log(state)
  const id = action.payloadId;
  const comment = action.payloadComment;
  switch (action.type) {
    case ADD_COMMENT:
      console.log(state[id]);
      if (!state[id]) {
        return { ...state, [id]: [comment] };
      } else {
        return { ...state, [id]: [...state[id], comment] };
      }
    case FETCH_COMMENTS:
      return action.comments
    default:
      return state;
  }
};
