import { fromJS } from 'immutable';

import { LOADING_STATES } from '../constants';
import actionTypes from '../constants/actionTypes';

const initialState = fromJS({
  loadingState: LOADING_STATES.INITIAL,
  error: null,
  items: [],
  page: 1,
});

function posts(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST:
      return state.set('loadingState', LOADING_STATES.LOADING);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return state.merge({
        loadingState: LOADING_STATES.SUCCESS,
        items: state.get('items').concat(fromJS(action.payload)),
        page: state.get('page') + 1,
      });
    case actionTypes.FETCH_POSTS_FAILURE:
      return state.merge({
        loadingState: LOADING_STATES.FAILURE,
        error: action.payload,
      });
    default:
      return state;
  }
}

export default posts;
