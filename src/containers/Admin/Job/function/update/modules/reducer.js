import * as ActionType from "./constants";

const initialStatae = {
  loading: false,
  data: null,
  error: null,
};

const updateJobReducer = (state = initialStatae, action) => {
  switch (action.type) {
    case ActionType.UPDATE_JOB_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.UPDATE_JOB_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      // console.log(state.data);
      return { ...state };

    case ActionType.UPDATE_JOB_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default updateJobReducer;
