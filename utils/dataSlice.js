import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    listOfRestaurants: [],
    images: [],
    onlineRestaurants: [],
    offers: [],
  },
  reducers: {
    setListOfRestaurants: (state, action) => {
      state.listOfRestaurants = action.payload;
    },
    setImages: (state, action) => {
      state.images = action.payload;
    },
    setOnlineRestaurants: (state, action) => {
      state.onlineRestaurants = action.payload;
    },
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
});
export const {
  setListOfRestaurants,
  setImages,
  setOnlineRestaurants,
  setOffers,
} = dataSlice.actions;

export default dataSlice.reducer;
