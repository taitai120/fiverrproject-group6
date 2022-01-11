import * as ActionType from "../constants/UserConstants";

const initialState = {
  listUserCreated: [],
};

const UserListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USER_INFO: {
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default UserListReducer;
