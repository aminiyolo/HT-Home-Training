import { loginFailure, loginSuccess, logoutSuccess } from "./userReducers";
import { changeDate } from "./recordReducers";
import {
  loadStart,
  loadSuccess,
  loadFailure,
  routineAdd,
  routineRemove,
  routineUpadte,
  postRecord,
} from "./routineReducers";
import { axiosInstance } from "../utill/axios";
import dayjs from "dayjs";

export const setDate = (dispatch, day = "") => {
  if (!day) dispatch(changeDate(dayjs(new Date()).format("YYYY-MM-DD")));
  else dispatch(changeDate(day));
};

export const loginSucc = (dispatch, userData) => {
  dispatch(loginSuccess(userData));
  getRoutine(dispatch, userData.googleId);
  getRecord(dispatch, userData.googleId);
  setDate(dispatch);
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

export const getRecord = async (dispatch, id) => {
  try {
    const res = await axiosInstance.get("/records/get", { params: id });
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const addRecord = async (dispatch, data) => {
  try {
    const res = await axiosInstance.post("/records/post", data);
    console.log(res.data);
    // postRecord
  } catch (err) {
    console.log(err);
  }
};
