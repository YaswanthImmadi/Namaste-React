import useRestaurantInfo from "../../utils/useRestaurantInfo";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantInfo = () => {
  let { id } = useParams();

  const resInfo = useRestaurantInfo(id);
  console.log(resInfo)
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    areaName,
    totalRatingsString,
  } = resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  let categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });
  // console.log(categories);

  const handleAccordianClick = (index) => {
    if (showIndex === index) {
      // if the clicked accordian is already Open, close it
      setShowIndex(null);
    } else {
      // if the Clicked Accordian is not Open , open it
      setShowIndex(index);
    }
  };

  return (
    <div className="flex flex-col justify-center m-4 p-2">
      <div className="flex flex-col text-left mx-auto my-4 w-[730px] border-b-4 border-solid border-green-600">
        <h1 className="font-bold text-2xl text-orange-600">{name}</h1>

        <div className="flex justify-between">
          <div>
            {" "}
            <h3 className=" text-md">{cuisines.join(",")}</h3>
            <h4 className="text-md">{areaName}</h4>
            <h4 className="text-md">{costForTwoMessage}</h4>
          </div>

          <div className="w-[80px] my-4 ">
            <table className="border-2 border-solid border-black-400 text-center">
              <tr className="border-b-2 border-black-250 text-green-600 font-bold p-2">
                ⭐{avgRating}
              </tr>
              <tr className="text-sm p-2">{totalRatingsString}</tr>
            </table>
          </div>
        </div>
      </div>

      {Array.isArray(categories) &&
        categories.map((category, index) => (
          <RestaurantCategory
            data={category.card?.card}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => handleAccordianClick(index)}
          />
        ))}
    </div>
  );
};
export default RestaurantInfo;
