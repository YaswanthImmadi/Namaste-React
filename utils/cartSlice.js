import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    // this createSlice takes some configuration like name of the slice , initialState
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        // reducers is an object which contains actions
        addItem:(state,action)=>{
            // mutating the state here
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})
// this cartSlice will return an object which consists actions and reducer like below
    // {
    //     actions:{
    //         addItem,
    //         removeItem,
    //         clearItem,
    //     }
    //     reducer;
    // }


export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;