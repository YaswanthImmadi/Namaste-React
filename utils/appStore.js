import { configureStore, createReducer, cartSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import dataReducer from './dataSlice';

const appStore=configureStore({
    // this reducer is responsible for modification of appStore, Basically combines all the reducers from different slices
    reducer:{
        cart:cartReducer,
        data:dataReducer,
    }
})
export default appStore;