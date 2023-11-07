import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
// import resList from "../../utils/mockData";
import React from "react";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const status = useOnlineStatus();

  const {loggedInUser,setUserName}=useContext(UserContext);

  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // console.log("Body Rendered");

  //conditional Rendering using If/else
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  // using ternary Operator
  if (status === false)
    return <h1>No Internet Connection , please Check your network</h1>;
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" m-4 p-2">
        <input
          type="text"
          className=" border border-solid border-black rounded-lg"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" m-2 px-4 py-1 rounded-lg"
          onClick={() => {
            let filterData = listOfRestaurants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredList(filterData);
          }}
        >
          🔍
        </button>
        <button
          className=" bg-green-100  m-2 px-4 py-1 rounded-lg"
          onClick={() => {
            let data = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            // console.log(filteredList);
            setFilteredList(data);
          }}
        >
          Know Top Rated Restaurants
        </button>
        <input
          type="text"
          className=" border border-solid border-black rounded-lg mx-2"
          value={loggedInUser}
          onChange={(e) =>setUserName(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap  ml-[160px] ">
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
        {filteredList.map((restaurant) => (
          // console.log(restaurant)
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {/***We need to return a restaurant card with promoted lable if it is true else return a normal restaurant card 
             * using ternary operator
             */}
             {restaurant.info.isOpen?(<RestaurantCardPromoted resData={restaurant}/>):<RestaurantCard resData={restaurant} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
