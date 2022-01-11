import * as ActionType from "../constants/CommentsConstants";
import api from "../../utils/apiUtils";

export const actGetComments = (id) => {
  return async (dispatch) => {
    try {
      const result = await api.get(`api/comments/by-job/${id}`);
      const data = await result.data;
      dispatch({
        type: ActionType.GET_COMMENTS,
        payload: data,
      });
    } catch (errors) {
      console.log("erros", errors.message);
    }
  };
};
