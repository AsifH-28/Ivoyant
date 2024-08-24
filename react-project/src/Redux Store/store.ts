import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "../Api/Api";
import { AddToCartSlice } from "../Features/AddToCart";

export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    AddToCartSlice: AddToCartSlice.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(ApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
