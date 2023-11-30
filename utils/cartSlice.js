import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  // this createSlice takes some configuration like name of the slice , initialState
  name: "cart",
  initialState: {
    totalCount: 0,
    totalPrice: 0,
    items: [],
  },
  reducers: {
    // reducers is an object which contains actions
    addItem: (state, action) => {
      // mutating the state here
      const itemId = action.payload.card.info.id;
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === itemId
      );
      if (itemIndex >= 0) {
        // if item Already Exists increament its count
        state.items[itemIndex].count += 1;
      } else {
        // If item Does not exists , add it to the cart
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    removeItem: (state,action) => {
      const itemId = action.payload.card.info.id;
      const itemIndex = state.items.findIndex(
        (item) => item.card.info.id === itemId
      );
      if (itemIndex >= 0) {
        // if item Already Exists decreament its count
        state.items[itemIndex].count -= 1;
        if (state.items[itemIndex].count <= 0) {
          // if the count is 0 or less , remove the item from the cart
          state.items.splice(itemIndex, 1);
        }
      }
    },
    increamentCount: (state, action) => {
      state.totalCount += 1;
      if (action.payload) {
        state.items[action.payload.id] =
          (state.items[action.payload.id] || 0) + 1;
      }
    },
    decrementCount: (state, action) => {
      state.totalCount -= 1;
      if (action.payload && state.items[action.payload.id]) {
        state.items[action.payload.id] -= 1;
      }
    },
    addToPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    subtractFromPrice: (state, action) => {
      state.totalPrice -= action.payload;
    },
    clearCart: (state) => {
      (state.totalCount = 0), (state.totalPrice = 0), (state.items.length = 0);
    },
  },
});
// this cartSlice will return an object which consists actions and reducer like below
// {
//     actions:{
//         addItem,
//         removeItem,
//         clearItem,
//     }
//     reducer;
// }
export const totalCount = (state) => state.cart.totalCount;
export const totalPrice = (state) => state.cart.totalPrice;
export const items = (state) => state.cart.items;

export const {
  addItem,
  removeItem,
  clearCart,
  increamentCount,
  decrementCount,
  addToPrice,
  subtractFromPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
