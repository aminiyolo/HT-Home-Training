import { loginFailure, loginSuccess, logoutSuccess } from "./userReducers";

export const loginSucc = (dispatch, userData) => {
  dispatch(loginSuccess(userData));
};

export const loginFail = (dispatch) => {
  dispatch(loginFailure());
};

export const logout = (dispatch) => {
  dispatch(logoutSuccess());
};
