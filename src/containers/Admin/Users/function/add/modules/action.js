import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";

export const actFetchAddUser = (formData) => {
  return (dispatch) => {
    dispatch(actAddUserRequest());

    api
      .post("/api/users", formData)
      .then((result) => {
        dispatch(actAddUserSuccess(result.data.user));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actAddUserFailed(err));
      });
  };
};

const actAddUserRequest = () => {
  return {
    type: ActionType.ADD_USER_REQUEST,
  };
};

const actAddUserSuccess = (data) => {
  return {
    type: ActionType.ADD_USER_SUCCESS,
    payload: data,
  };
};

const actAddUserFailed = (error) => {
  return {
    type: ActionType.ADD_USER_FAILED,
    payload: error,
  };
};
