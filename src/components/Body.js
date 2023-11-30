import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
// import resList from "../../utils/mockData";
import React, { useRef } from "react";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
// import UserContext from "../../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import {
  setOffers,
  setListOfRestaurants,
  setOnlineRestaurants,
  setImages,
} from "../../utils/dataSlice";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { CDN_URL } from "../../utils/constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const status = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLable(RestaurantCard);
  const [buttonClicked, setButtonClicked] = useState(false);
  const data = useSelector((state) => state.data);
  const Navigate = useNavigate();

  const scrollRef = useRef(null);
  const offersRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.3066525&lng=80.4365402&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    dispatch(setOffers(json?.data?.cards[0]?.card?.card?.imageGridCards?.info));
    dispatch(setImages(json?.data?.cards[1]?.card?.card?.imageGridCards?.info));
    dispatch(
      setListOfRestaurants(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );
    dispatch(
      setOnlineRestaurants(
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      )
    );
  };

  if (status === false)
    return <h1>No Internet Connection , please Check your network</h1>;
  return data.listOfRestaurants && data.listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-auto  max-w-screen-lg">
      <div className=" m-4 p-2 items-center ">
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

      <div className="m-4">
        <div className="flex justify-between items-center ">
          <h3 className="text-xl font-bold px-2">Best Offers For You</h3>
          <div className="flex justify-between my-4">
            <FaArrowCircleLeft
              className="cursor-pointer mx-2 w-8 h-8"
              onClick={() => offersRef.current.scrollBy(-500, 0)}
            />
            <FaArrowCircleRight
              className="cursor-pointer mx-2 w-8 h-8"
              onClick={() => offersRef.current.scrollBy(500, 0)}
            />
          </div>
        </div>
        <div ref={offersRef} className="flex overflow-hidden my-4 ">
          {Array.isArray(data.offers) &&
            data.offers.map((offer) => (
              <img
                key={offer.id}
                className="w-90 h-60 mx-4 px-2 object-cover"
                src={CDN_URL + offer.imageId}
              />
            ))}
        </div>
      </div>

      <div className="m-4">
        <div className="flex justify-between items-center  ">
          <h3 className="text-xl font-bold px-2">what's on your mind?</h3>
          <div className="flex justify-between my-4">
            <FaArrowCircleLeft
              className="cursor-pointer mx-2 w-8 h-8"
              onClick={() => scrollRef.current.scrollBy(-500, 0)}
            />
            <FaArrowCircleRight
              className="cursor-pointer mx-2 w-8 h-8"
              onClick={() => scrollRef.current.scrollBy(500, 0)}
            />
          </div>
        </div>
        <div ref={scrollRef} className="flex my-4  overflow-hidden ">
          {Array.isArray(data.images) &&
            data.images.map((image) => (
              <img
                key={image.id}
                className="w-95 h-60 mx-4 px-2 object-cover cursor-pointer"
                src={CDN_URL + image.imageId}
                onClick={() => {
                  Navigate("/restaurant/" + image.id);
                }}
              />
            ))}
        </div>
      </div>

      <div className="m-4">
        <h2 className="p-2 m-2 text-xl font-bold">
          Top Restaurant Chains Near you
        </h2>
        <div className="flex flex-wrap justify-center borber-b-2  ">
          {Array.isArray(data.listOfRestaurants) &&
            data.listOfRestaurants.map((restaurant) => (
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

      <div className="m-4">
        <h2 className="p-2 m-2 text-xl font-bold">
          restaurants with Online food Delivery
        </h2>
        <div className="flex flex-wrap justify-center borber-b-2  ">
          {Array.isArray(data.listOfRestaurants) &&
            data.onlineRestaurants.map((restaurant) => (
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
    </div>
  );
};
export default Body;
