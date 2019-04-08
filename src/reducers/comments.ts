import { fromJS } from "immutable";

import { LOADING_STATES } from "../constants";
import actionTypes from "../constants/actionTypes";

import {IAction} from "../interfaces/redux";

const initialState = fromJS({
  error: null,
  items: [],
  loadingState: LOADING_STATES.INITIAL,
  page: 1,
});

function comments(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_REQUEST:
      return state.set("loadingState", LOADING_STATES.LOADING);
    case actionTypes.FETCH_POSTS_SUCCESS:
      return state.merge({
        items: state.get("items").concat(fromJS(action.payload)),
        loadingState: LOADING_STATES.SUCCESS,
        page: state.get("page") + 1,
      });
    case actionTypes.FETCH_POSTS_FAILURE:
      return state.merge({
        error: action.payload,
        loadingState: LOADING_STATES.FAILURE,
      });
    default:
      return state;
  }
}

export default comments;
