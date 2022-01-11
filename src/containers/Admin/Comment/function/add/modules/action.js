import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";

export const actFetchAddComment = (formData) => {
  return (dispatch) => {
    dispatch(actAddCommentRequest());

    api
      .post("/api/comments", formData)
      .then((result) => {
        dispatch(actAddCommentSuccess(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actAddCommentFailed(err));
      });
  };
};

const actAddCommentRequest = () => {
  return {
    type: ActionType.ADD_COMMENT_REQUEST,
  };
};

const actAddCommentSuccess = (data) => {
  return {
    type: ActionType.ADD_COMMENT_SUCCESS,
    payload: data,
  };
};

const actAddCommentFailed = (error) => {
  return {
    type: ActionType.ADD_COMMENT_FAILED,
    payload: error,
  };
};
