import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../Interface/Interface";

export const ApiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    endpoints:(builder)=>({
        getProducts: builder.query<Product[], void>({
            query: () => 'Products',
          }),
    })
});


export const {useGetProductsQuery} = ApiSlice;