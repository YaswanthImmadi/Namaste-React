import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
// import resList from "../../utils/mockData";
import React, { useRef } from "react";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
// import UserContext from "../../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";

const Body = () => {
 
  const [searchText, setSearchText] = useState("");
  const status = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);
  const [buttonClicked, setButtonClicked] = useState(false);
  const data=useSelector(state=>state.data);

  const scrollRef=useRef(null);
  const offerRef=useRef(null);
  const dispatch=useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (status === false)
    return <h1>No Internet Connection , please Check your network</h1>;
  return data.listOfRestaurants && data.listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="ml-[10%] mr-[10%]">
      <div className=" m-4 p-2 items-center ml-[100px]">
        <input
          type="text"
          data-testid="search"
          className=" border border-black rounded-lg mx-2 p-2 focus:border-red-600"
          placeholder="your favourite food..."
          value={searchText}
          onChange={(e) => {
            const newValue = e.target.value;
            setSearchText(newValue);
            let filterData = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(newValue.toLowerCase());
            });
            {
              searchText === ""
                ? setListOfRestaurants(listOfRestaurants)
                : setFilteredList(filterData);
            }
          }}
        />
      </div>

      <div className="flex flex-wrap  ml-[160px] ">
        {Array.isArray(data.filteredList) &&
          data.filteredList.map((restaurant) => (
          
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {/***We need to return a restaurant card with promoted lable if it is true else return a normal restaurant card
               * using ternary operator
               */}
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
      </div>
    </div>
  );
};
export default Body;
