
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({baseUrl:""}),
    endpoints:(builder)=>({
        getProducts: builder.query<string,null>({
                query:()=>"/Products"
            })
        
    })
})

export const {useGetProductsQuery} = Api;
