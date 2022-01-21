import { loginFailure, loginSuccess, logoutSuccess } from "./userReducers";
import {
  loadStart,
  loadSuccess,
  loadFailure,
  routineAdd,
  routineRemove,
  routineUpadte,
} from "./routineReducers";
import { axiosInstance } from "../utill/axios";

export const loginSucc = (dispatch, userData) => {
  dispatch(loginSuccess(userData));
  getRoutine(dispatch, userData.googleId);
};

export const loginFail = (dispatch) => {
  dispatch(loginFailure());
};

export const logout = (dispatch) => {
  dispatch(logoutSuccess());
};

export const getRoutine = async (dispatch, id) => {
  dispatch(loadStart());
  try {
    const res = await axiosInstance.get("/routines/get", { params: { id } });
    dispatch(loadSuccess(res.data));
  } catch (err) {
    dispatch(loadFailure());
  }
};

export const addRoutine = async (dispatch, data) => {
  try {
    const res = await axiosInstance.post("/routines/add", data);
    dispatch(routineAdd(res.data));
  } catch (err) {
    console.log(err);
  }
};

export const removeRoutine = async (dispatch, id) => {
  try {
    await axiosInstance.post("/routines/remove", id);
    dispatch(routineRemove(id));
  } catch (err) {
    console.log(err);
  }
};

export const updateRoutine = async (dispatch, data) => {
  try {
    const res = await axiosInstance.post("/routines/update", data);
    dispatch(routineUpadte(res.data));
  } catch (err) {
    console.log(err);
  }
};
