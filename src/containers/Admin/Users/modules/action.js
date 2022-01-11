import * as ActionType from "./constants";
import { api } from "../../../../utils/adminApi";

export const actFetchListUser = () => {
  return (dispatch) => {
    dispatch(actListUserRequest());

    api
      .get("/api/users")
      .then((result) => {
        dispatch(actListUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListUserFailed(err));
      });
  };
};

const actListUserRequest = (data) => {
  return {
    type: ActionType.LIST_USER_REQUEST,
    payload: data,
  };
};

const actListUserSuccess = (data) => {
  return {
    type: ActionType.LIST_USER_SUCCESS,
    payload: data,
  };
};

const actListUserFailed = (error) => {
  return {
    type: ActionType.LIST_USER_FAILED,
    payload: error,
  };
};
