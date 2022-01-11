import * as ActionType from "../constants/JobDetailConstants";
import api from "../../utils/apiUtils";

export const actGetJobDetail = (id) => {
  return async (dispatch) => {
    try {
      const result = await api.get(`api/jobs/${id}`);
      const data = await result.data;
      dispatch({
        type: ActionType.GET_JOB_DETAIL,
        payload: data,
      });
    } catch (errors) {
      console.log("erros", errors.message);
    }
  };
};
