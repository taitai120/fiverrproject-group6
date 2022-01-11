import * as ActionType from "./constants";
import { api } from "../../../../../../utils/adminApi";
import { actFetchListJob } from "../../../modules/action";

export const actFetchDeleteJob = (id) => {
  return (dispatch) => {
    dispatch(actDeleteJobRequest());

    api
      .delete(`/api/jobs/${id}`)
      .then((result) => {
        dispatch(actDeleteJobSuccess(result));
        // console.log(result);
        alert("Bạn đã xóa công việc thành công");
        dispatch(actFetchListJob());
      })
      .catch((error) => {
        dispatch(actDeleteJobFailed(error));
      });
  };
};

const actDeleteJobRequest = () => {
  return {
    type: ActionType.DELETE_JOB_REQUEST,
  };
};

const actDeleteJobSuccess = (data) => {
  return {
    type: ActionType.DELETE_JOB_SUCCESS,
    payload: data,
  };
};

const actDeleteJobFailed = (error) => {
  return {
    type: ActionType.DELETE_JOB_FAILED,
    payload: error,
  };
};
