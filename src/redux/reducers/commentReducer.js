import * as types from "../actions/actionType";
import initialState from "./initialState";

export default function commentReducer(state = initialState.comments, action) {
  switch (action.type) {
    case types.ADD_COMMENT:
      return [...state, { ...action.comments }];
    default:
      return state;
  }
}
