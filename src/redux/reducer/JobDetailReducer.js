import * as ActionType from "../constants/JobDetailConstants";

const initialState = {
  jobDetail: {},
};

const JobDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_JOB_DETAIL: {
      state.jobDetail = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default JobDetailReducer;
