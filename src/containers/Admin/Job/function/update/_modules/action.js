import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";

export const actFetchEditJob = (data, history) => {
  return (dispatch) => {
    dispatch(actEditJobRequest());

    api
      .put(`/api/jobs/`, data)
      .then((result) => {
        dispatch(actEditJobSuccess(result.data));
        alert("Cập nhật công việc thành công");
        history.push("/dashboard/job");
        window.location.reload();
      })
      .catch((err) => {
        dispatch(actEditJobFailed(err));
      });
  };
};

const actEditJobRequest = () => {
  return {
    type: ActionType.EDIT_JOB_REQUEST,
  };
};

const actEditJobSuccess = (data) => {
  return {
    type: ActionType.EDIT_JOB_SUCCESS,
    payload: data,
  };
};

const actEditJobFailed = (error) => {
  return {
    type: ActionType.EDIT_JOB_FAILED,
    payload: error,
  };
};
