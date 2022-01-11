import * as ActionType from "../constants/SubJobConstants";
import api from "../../utils/apiUtils";

export const actGetSubJob = (subid) => {
  return async (dispatch) => {
    try {
      const result = await api.get(
        `api/jobs/by-sub-type?subType=${subid}&skip=0&llimit=10`
      );
      const data = await result.data;

      dispatch({
        type: ActionType.SET_LIST_SUB_JOB,
        payload: data,
      });
    } catch (errors) {
      console.log("erros", errors.message);
    }
  };
};

export const actGetTargetSubTypeJob = (subid) => {
  return async (dispatch) => {
    try {
      const result = await api.get(`api/sub-type-jobs/${subid}`);
      const data = await result.data;
      dispatch({
        type: ActionType.SET_TARGET_SUB_TYPE_JOB,
        payload: data,
      });
    } catch (errors) {
      console.log("erros", errors.message);
    }
  };
};

export const actGetListSubTypeJob = (subid) => {
  return async (dispatch) => {
    try {
      const result = await api.get(
        `api/jobs/by-sub-type?subType=${subid}&skip=0&llimit=10`
      );
      const data = await result.data;
      dispatch({
        type: ActionType.SET_LIST_SUB_TYPE_JOB,
        payload: data,
      });
    } catch (errors) {
      console.log("erros", errors.message);
    }
  };
};
