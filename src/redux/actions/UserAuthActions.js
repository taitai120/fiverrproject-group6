import * as ActionType from "../constants/UserAuthConstants";
import api from "../../utils/apiUtils";

export const actLoginUser = (user, history) => {
  return async (dispatch) => {
    try {
      const result = await api.post(`api/auth/signin?=&=`, user);
      const data = await result.data;

      data.user.token = data.token;

      if (data.user.role === "ADMIN") {
        localStorage.setItem("UserAdmin", JSON.stringify(data.user));
        history.push("/dashboard");
      } else {
        localStorage.setItem("User", JSON.stringify(data.user));
        history.push("/");
      }

      dispatch({
        type: ActionType.LOGIN_USER,
        payload: data,
      });
    } catch (errors) {
      alert(`Error 1: ${errors.message}`);
    }
  };
};

export const actRegisterUser = (newUser, history) => {
  return async (dispatch) => {
    try {
      const result = await api.post(`api/users`, newUser);

      alert("Register Successfully");

      history.push("/");

      dispatch({
        type: ActionType.REGISTER_USER,
      });
    } catch (errors) {
      alert(`Error 1: ${errors.message}`);
    }
  };
};

export const actLogout = (history) => {
  return (dispatch) => {
    localStorage.removeItem("User");
    localStorage.removeItem("UserAdmin");
    localStorage.removeItem("exp");

    history.push("/");

    alert("logout");

    dispatch({
      type: ActionType.LOGOUT_USER,
    });
  };
};

export const actBuyJob = (id, user) => {
  return async (dispatch) => {
    try {
      const result = await api.patch(`api/jobs/booking/${id}`);
      const data = await result.data;

      alert("Buying job successfully!");

      dispatch({
        type: ActionType.BUY_JOB,
        payload: id,
      });
    } catch (errors) {
      alert(`Error 2: ${errors.message}`);
    }
  };
};

export const actGetUserDetail = (id) => {
  return async (dispatch) => {
    try {
      const result = await api.get(`api/users/${id}`);
      const data = await result.data;

      dispatch({
        type: ActionType.GET_DETAIL_USER,
        payload: data,
      });
    } catch (errors) {
      alert(`Error: ${errors.message}`);
    }
  };
};
