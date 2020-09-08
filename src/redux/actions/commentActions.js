import * as types from "./actionType";

export function commentPost(comments) {
  return { type: types.ADD_COMMENT, comments };
}
