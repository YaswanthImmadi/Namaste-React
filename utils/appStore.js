import { configureStore, createReducer, cartSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({
    // this reducer is responsible for modification of appStore, Basically combines all the reducers from different slices
    reducer:{
        cart:cartReducer,
    }
})
export default appStore;