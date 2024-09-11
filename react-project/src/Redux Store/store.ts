import {configureStore} from "@reduxjs/toolkit";
import { api } from "../services/api";

export const store = configureStore({
    reducer:{
        [api.reducerPath]:api.reducer

    },
    middleware:(defaultMiddleware)=>defaultMiddleware().concat(api.middleware)
})

export type Rootstate = ReturnType<typeof store.getState>
export type dispatch = typeof store.dispatch;