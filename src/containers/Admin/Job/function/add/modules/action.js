import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";

export const actFetchAddJob = (formData) => {
  return (dispatch) => {
    dispatch(actAddJobRequest());

    api
      .post("/api/jobs", formData)
      .then((result) => {
        dispatch(actAddJobSuccess(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(actAddJobFailed(err));
      });
  };
};

const actAddJobRequest = () => {
  return {
    type: ActionType.ADD_JOB_REQUEST,
  };
};

const actAddJobSuccess = (data) => {
  return {
    type: ActionType.ADD_JOB_SUCCESS,
    payload: data,
  };
};

const actAddJobFailed = (error) => {
  return {
    type: ActionType.ADD_JOB_FAILED,
    payload: error,
  };
};
