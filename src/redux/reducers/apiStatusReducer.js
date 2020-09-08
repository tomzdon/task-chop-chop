import * as types from "../actions/actionType";
import initialState from "./initialState";

function actionTypeEndInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  // eslint-disable-next-line comma-dangle
  action
) {
  if (action.type == types.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndInSuccess(action.type)
  ) {
    return state - 1;
  }
  return state;
}
