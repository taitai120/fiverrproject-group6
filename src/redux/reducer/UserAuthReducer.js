import * as ActionType from "../constants/UserAuthConstants";

const initialState = {
  userLogin: JSON.parse(localStorage.getItem("User")) || {},
};

const UserAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER: {
      state.userLogin = action.payload.user;
      return { ...state };
    }

    case ActionType.REGISTER_USER: {
      return { ...state };
    }

    case ActionType.LOGOUT_USER: {
      console.log(action);
      state.userLogin = null;
      return { ...state };
    }

    case ActionType.BUY_JOB: {
      return { ...state };
    }

    case ActionType.GET_DETAIL_USER: {
      state.userLogin = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default UserAuthReducer;
