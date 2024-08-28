import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {Todo} from "../interface/interface"

const initialState:Todo[]=[];
export const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        AddTodo:(state,action:PayloadAction<Todo>)=>{
            console.log(action.payload)
            state.push(action.payload);
        }

    }
}) 

export const {AddTodo} = TodoSlice.actions;