import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { dataSlice } from "../states/dataSlice";
import { searchSlice } from "../states/searchSlice";
import { driversSlice } from "../states/driversSlice";

// Configuración personalizada del middleware, desactivando la comprobación serializable
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    search: searchSlice.reducer,
    drivers: driversSlice.reducer,
  },
  middleware: customizedMiddleware,
});
