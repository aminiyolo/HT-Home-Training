import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  date: "",
  records: {},
  isFetching: false,
  error: false,
};

const recordReducer = createSlice({
  name: "record",
  initialState,
  reducers: {
    loadRecord: (state, action) => {
      console.log(action.payload);
      // state.records = { ...action.payload };
    },

    postRecord: (state, action) => {
      console.log(action.payload);
    },

    changeDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { loadRecord, postRecord, changeDate } = recordReducer.actions;
export default recordReducer.reducer;
