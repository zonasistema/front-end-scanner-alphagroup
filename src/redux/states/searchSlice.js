import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameOrAddress: [],
  search: {},
  selected: {},
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setReset: (state, action) => {
      state.search = action.payload;
    },
    setNameOrAddress: (state, action) => {
      state.nameOrAddress = action.payload;
    },
    setResetNOA: (state, action) => {
      state.nameOrAddress = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const {
  setSearch,
  setReset,
  setNameOrAddress,
  setResetNOA,
  setSelected,
} = searchSlice.actions;
