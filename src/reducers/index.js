import { combineReducers } from 'redux';

import user from './user';
import posts from './posts';
// import comments from './comments';

const reducers = combineReducers({
  user,
  posts,
  // comments,
});

export default reducers;
