import * as ActionType from "../constants/MainJobConstants";

const initialState = {
  data: [],
};

const MainJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LIST_MAIN_JOB: {
      state.data = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default MainJobReducer;
