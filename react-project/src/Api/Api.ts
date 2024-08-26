
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../Interface/interface";

export const Api = createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:["Products"],
    endpoints:(builder)=>({
        getProducts: builder.query<Product[],void>({
                query:()=>"Products",
                providesTags:["Products"],
            }),
        postProduct:builder.mutation<null,Product>({
            query:(arg:Product)=>({
                url:"Products",
                method:"POST",
                body:arg

            }),
            invalidatesTags:["Products"]
        }),
        updateproduct:builder.mutation<null,any>({
            query:(arg:any)=>({
                url:`Products/${arg.id}`,
                method:"PATCH",
                body:arg
            }),
            invalidatesTags:["Products"]

        })

        
    })
})

export const {useGetProductsQuery,usePostProductMutation,useUpdateproductMutation} = Api;
