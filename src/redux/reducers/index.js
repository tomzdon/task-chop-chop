import { combineReducers } from "redux";
import comments from "./commentReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  comments,
  apiCallsInProgress,
});

export default rootReducer;
