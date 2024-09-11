import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { user } from "../Interface/interface";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:4000/"}),
    endpoints:(build)=>({
        getusers:build.query<user[],void>(
            {
                query:()=>"users",
            }
        )
    })
}) 

export const {useGetusersQuery} = api;