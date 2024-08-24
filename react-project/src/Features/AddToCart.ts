import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../Interface/Interface";

const initialState: Product[] = [];
export const AddToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    AddToCart: (state, action:PayloadAction<Product>) => {
        let AddProduct = action.payload;
        const flag = state.some(item=>item.id===AddProduct.id)
        if(!flag){
            state.push(AddProduct)
        }else{
            alert("Product Already Exist In Cart")
        }
        
    },
    RemoveFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { AddToCart, RemoveFromCart } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
