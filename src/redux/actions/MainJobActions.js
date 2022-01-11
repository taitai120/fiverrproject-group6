import * as ActionType from "../constants/MainJobConstants";
import api from "../../utils/apiUtils";

export const actGetMainJob = (id) => {
  return async (dispatch) => {
    try {
      const result = await api.get(`api/type-jobs/${id}`);
      const data = await result.data;
      dispatch({
        type: ActionType.SET_LIST_MAIN_JOB,
        payload: data,
      });
    } catch (errors) {
      console.log("erros", errors.message);
    }
  };
};
