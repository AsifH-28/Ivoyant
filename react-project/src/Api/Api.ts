
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    endpoints:(builder)=>({
        getProducts: builder.query<string,null>({
                query:()=>"Products"
            }),
        // postProduct:builder.mutation<string,string>({
        //     query:(data)=>{
        //         url:"Products"
        //         method:"POST"
        //         body:data
        //     }
        // })
        
    })
})

export const {useGetProductsQuery} = Api;
