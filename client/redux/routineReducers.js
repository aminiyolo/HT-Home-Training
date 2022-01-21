import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routines: [],
  isFetching: false,
  error: false,
};

const routineReducer = createSlice({
  name: "routine",
  initialState,
  reducers: {
    loadStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },

    loadSuccess: (state, action) => {
      state.isFetching = false;
      console.log(action.payload);
      state.routines = [...action.payload];
    },

    loadFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    routineAdd: (state, action) => {
      state.routines = [...state.routines, action.payload];
    },

    routineRemove: (state, action) => {
      state.routines = state.routines.filter(
        (routine) => routine._id !== action.payload.id,
      );
    },

    routineUpadte: (state, action) => {
      const { _id } = action.payload;
      const newRoutines = [...state.routines];
      const index = newRoutines.findIndex((routine) => routine._id === _id);
      newRoutines.splice(index, 1, action.payload);
      state.routines = newRoutines;
    },
  },
});

export const {
  loadStart,
  loadSuccess,
  loadFailure,
  routineAdd,
  routineRemove,
  routineUpadte,
} = routineReducer.actions;
export default routineReducer.reducer;
