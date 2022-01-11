import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";
import { actFetchListUser } from "../../../modules/action";

export const actFetchDeleteUser = (id) => {
  return (dispatch) => {
    dispatch(actDeleteUserRequest());

    api
      .delete(`/api/users/${id}`)
      .then((result) => {
        dispatch(actDeleteUserSuccess(result));
        // console.log(result);
        alert("Bạn đã xóa người dùng thành công");
        dispatch(actFetchListUser());
      })
      .catch((error) => {
        dispatch(actDeleteUserFailed(error));
      });
  };
};

const actDeleteUserRequest = () => {
  return {
    type: ActionType.DELETE_USER_REQUEST,
  };
};

const actDeleteUserSuccess = (data) => {
  return {
    type: ActionType.DELETE_USER_SUCCESS,
    payload: data,
  };
};

const actDeleteUserFailed = (error) => {
  return {
    type: ActionType.DELETE_USER_FAILED,
    payload: error,
  };
};
