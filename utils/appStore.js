import { configureStore, createReducer, cartSlice } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import dataReducer from './dataSlice';
import userReducer from "./userSlice";

const appStore=configureStore({
    // this reducer is responsible for modification of appStore, Basically combines all the reducers from different slices
    reducer:{
        cart:cartReducer,
        data:dataReducer,
        user:userReducer,
    }
})
export default appStore;