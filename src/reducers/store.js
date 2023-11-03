import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { postReducer, commentReducer } from "./reducers";

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
