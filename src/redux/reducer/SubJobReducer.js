import * as ActionType from "../constants/SubJobConstants";

const initialState = {
  data: [],
  targetSubTypeJob: {},
  listSubTypeJob: [],
};

const SubJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LIST_SUB_JOB: {
      state.data = action.payload;
      return { ...state };
    }

    case ActionType.SET_TARGET_SUB_TYPE_JOB: {
      state.targetSubTypeJob = action.payload;
      return { ...state };
    }

    case ActionType.SET_LIST_SUB_TYPE_JOB: {
      state.listSubTypeJob = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default SubJobReducer;
