import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    listOfRestaurants: [],
    filteredList: [],
    onlineRestaurants: [],
    offers: [],
  },
  reducers: {
    setListOfRestaurants: (state, action) => {
      state.listOfRestaurants = action.payload;
    },
    setFilteredList: (state, action) => {
      state.filteredList = action.payload;
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
  setFilteredList,
  setOnlineRestaurants,
  setOffers,
} = dataSlice.actions;

export default dataSlice.reducer;
