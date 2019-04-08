import { combineReducers } from "redux";

import posts from "./posts";
import user from "./user";
// import comments from './comments';

const reducers = combineReducers({
  posts,
  user,
  // comments,
});

export default reducers;
