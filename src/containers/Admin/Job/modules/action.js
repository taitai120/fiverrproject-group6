import * as ActionType from "./constants";
import { api } from "../../../../utils/adminApi";

export const actFetchListJob = () => {
  return (dispatch) => {
    dispatch(actListJobRequest());

    api
      .get("/api/jobs")
      .then((result) => {
        dispatch(actListJobSuccess(result.data));
      })
      .catch((err) => {
        dispatch(actListJobFailed(err));
      });
  };
};

const actListJobRequest = (data) => {
  return {
    type: ActionType.LIST_JOB_REQUEST,
    payload: data,
  };
};

const actListJobSuccess = (data) => {
  return {
    type: ActionType.LIST_JOB_SUCCESS,
    payload: data,
  };
};

const actListJobFailed = (error) => {
  return {
    type: ActionType.LIST_JOB_FAILED,
    payload: error,
  };
};
