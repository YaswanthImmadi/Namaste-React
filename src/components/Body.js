import RestaurantCard from "./RestaurantCard";
// import resList from "../../utils/mockData";
import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional Rendering using If/else
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  // using ternary Operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
        >
          Know Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} />
          <RestaurantCard resData={resList[10]} />
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} />
          <RestaurantCard resData={resList[13]} />
          <RestaurantCard resData={resList[14]} />
          <RestaurantCard resData={resList[15]} />
          <RestaurantCard resData={resList[16]} />
          <RestaurantCard resData={resList[17]} />
          <RestaurantCard resData={resList[18]} />
          <RestaurantCard resData={resList[19]} /> */}
        {/* Instaed Of manually creating the RestaurantCard component we can use map function to loop over the resList like below */}
        {listOfRestaurants.map((restaurant) => (
          // console.log(restaurant)
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
