import * as ActionType from "../constants/UserListConstants";
import api from "../../utils/apiUtils";

export const actGetUserList = () => {
  return async (dispatch) => {
    try {
      const result = await api.get(`api/users`);
      const data = await result.data;
      dispatch({
        type: ActionType.GET_USER_LIST,
        payload: data,
      });
    } catch (errors) {
      console.log("erros", errors.message);
    }
  };
};

export const actGetUserListDetail = (id) => {
  return async (dispatch) => {
    try {
      const result = await api.get(`api/users/${id}`);
      const data = await result.data;
      dispatch({
        type: ActionType.GET_USER_LIST_DETAIL,
        payload: data,
      });
    } catch (errors) {
      console.log("erros", errors.message);
    }
  };
};
