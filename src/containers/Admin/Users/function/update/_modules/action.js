import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";

export const actFetchEditUser = (data, history) => {
  return (dispatch) => {
    dispatch(actEditUserRequest());

    api
      .put(`/api/users/`, data)
      .then((result) => {
        dispatch(actEditUserSuccess(result.data));
        alert("Cập nhật người dùng thành công");
        history.push("/dashboard/user");
        window.location.reload();
      })
      .catch((err) => {
        dispatch(actEditUserFailed(err));
      });
  };
};

const actEditUserRequest = () => {
  return {
    type: ActionType.EDIT_USER_REQUEST,
  };
};

const actEditUserSuccess = (data) => {
  return {
    type: ActionType.EDIT_USER_SUCCESS,
    payload: data,
  };
};

const actEditUserFailed = (error) => {
  return {
    type: ActionType.EDIT_USER_FAILED,
    payload: error,
  };
};
