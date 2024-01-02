import { createSlice } from "@reduxjs/toolkit";

export const driversSlice = createSlice({
  name: "drivers",
  initialState: [],
  reducers: {
    setDrivers: (state, action) => {
      return action.payload;
    },

    resetDriver: (state, action) => {
      return [];
    },
  },
});

export const { setDrivers, resetDriver } = driversSlice.actions;
