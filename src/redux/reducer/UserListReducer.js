import * as ActionType from "../constants/UserListConstants";

const initialState = {
  userList: [],
  userListDetail: {},
};

const UserListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USER_LIST: {
      state.userList = action.payload;
      return { ...state };
    }

    case ActionType.GET_USER_LIST_DETAIL: {
      state.userListDetail = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default UserListReducer;
