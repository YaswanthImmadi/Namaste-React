import useRestaurantInfo from "../../utils/useRestaurantInfo";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantInfo = () => {
  let { id } = useParams();

  const resInfo = useRestaurantInfo(id);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

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

  return (
    <div className="text-center">
      <h1 className="text-center font-bold text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(",")}</h3>

      {/* <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3> */}

      {categories.map((category, index) => (
        <RestaurantCategory
          data={category.card?.card}
          showItems={showIndex === index ? true : false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantInfo;
