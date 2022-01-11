import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";

export const actFetchUpdateJob = (id) => {
  return (dispatch) => {
    dispatch(actUpdateJobRequest());

    api
      .get(`/api/jobs/${id}`)
      .then((result) => {
        dispatch(actUpdateJobSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actUpdateJobFailed(err));
      });
  };
};

const actUpdateJobRequest = () => {
  return {
    type: ActionType.UPDATE_JOB_REQUEST,
  };
};

const actUpdateJobSuccess = (data) => {
  return {
    type: ActionType.UPDATE_JOB_SUCCESS,
    payload: data,
  };
};

const actUpdateJobFailed = (error) => {
  return {
    type: ActionType.UPDATE_JOB_FAILED,
    payload: error,
  };
};
