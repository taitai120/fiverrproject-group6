import * as ActionType from "../constants/UserConstants";
import api from "../../utils/apiUtils";

export const actGetUserInfo = (id) => {
  return async (dispatch) => {
    try {
      const result = await api.get(`api/users/${id}`);
      const data = await result.data;
      dispatch({
        type: ActionType.GET_USER_INFO,
        payload: data,
      });
    } catch (errors) {
      console.log(errors.message);
    }
  };
};
