import * as ActionType from "../constants/CommentsConstants";

const initialState = {
  commentList: [],
};

const JobDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_COMMENTS: {
      state.commentList = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default JobDetailReducer;
