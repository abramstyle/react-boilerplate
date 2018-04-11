import { fromJS } from 'immutable';

import { LOADING_STATES } from 'constants';
import actionTypes from 'constants/actionTypes';

const initialState = fromJS({
  loadingState: LOADING_STATES.INITIAL,
  error: null,
  items: [],
});

function services(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_SERVICES_REQUEST:
      return state.set('loadingState', 'LOADING_STATES.LOADING');
    case actionTypes.FETCH_SERVICES_SUCCESS:
      return state.merge({
        loadingState: LOADING_STATES.SUCCESS,
        items: state.get('items').add(action.payload),
      });
    case actionTypes.FETCH_SERVICES_FAILURE:
      return state.merge({
        loadingState: LOADING_STATES.FAILURE,
        error: action.payload,
      });
    default:
      return state;
  }
}

export default services;
