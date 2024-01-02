import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  dataId: {},
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setResetData: (state, action) => {
      state.data = [];
    },
    setDataId: (state, action) => {
      if (!state.data.length) {
        state.dataId = { msg: "No hay datos cargados" };
        return;
      }

      const findId = state.data.find((d) => d.externalKey === action.payload);

      if (!findId) {
        state.dataId = { msg: "No se encontro" };
      } else {
        state.dataId = findId;
      }
    },
  },
});

export const { setData, setDataId, setResetData } = dataSlice.actions;
