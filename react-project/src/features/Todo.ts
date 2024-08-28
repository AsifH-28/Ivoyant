import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {Todo} from "../interface/interface"

const initialState:Todo[]=[];
export const TodoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        AddTodo:(state,action:PayloadAction<Todo>)=>{
            state.push(action.payload);
        },
        UpdateTodo:(state,action:PayloadAction<Todo>)=>{
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index]=action.payload;
            
        },
        DeleteTodo:(state,action:PayloadAction<string>)=>{
            return state.filter((item)=>item.id!==action.payload);
        },
        CompleteTodo:(state,action:PayloadAction<[string,boolean]>) =>{
            return state.map((todo) =>
                todo.id === action.payload[0] ? { ...todo, completed:action.payload[1] } : todo
              );
            

        }

    }
}) 

export const {AddTodo,UpdateTodo,DeleteTodo,CompleteTodo} = TodoSlice.actions;