import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";

export const actFetchUpdateUser = (id) => {
  return (dispatch) => {
    dispatch(actUpdateUserRequest());

    api
      .get(`/api/users/${id}`)
      .then((result) => {
        dispatch(actUpdateUserSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUpdateUserFailed(err));
      });
  };
};

const actUpdateUserRequest = () => {
  return {
    type: ActionType.UPDATE_USER_REQUEST,
  };
};

const actUpdateUserSuccess = (data) => {
  return {
    type: ActionType.UPDATE_USER_SUCCESS,
    payload: data,
  };
};

const actUpdateUserFailed = (error) => {
  return {
    type: ActionType.UPDATE_USER_FAILED,
    payload: error,
  };
};
