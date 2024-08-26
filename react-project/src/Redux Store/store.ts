import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../Api/Api";

export const store = configureStore({
    reducer:{
        [Api.reducerPath]:Api.reducer
    },
    middleware:(defaultMiddleWare)=>defaultMiddleWare().concat(Api.middleware)
});

export type  RootState = ReturnType< typeof store.getState>
export type Dispatch =typeof store.dispatch;