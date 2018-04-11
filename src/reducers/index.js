import { combineReducers } from 'redux';

import user from './user';
import services from './services';
import posts from './posts';

const reducers = combineReducers({
  user,
  services,
  posts,
});

export default reducers;
