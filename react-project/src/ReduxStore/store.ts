import { configureStore } from "@reduxjs/toolkit"; 
import { TodoSlice } from "../features/Todo";

export const store = configureStore({
    reducer:{
        [TodoSlice.name]:TodoSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;