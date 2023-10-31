import useRestaurantInfo from "../../utils/useRestaurantInfo";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantInfo = () => {
 
  let {id} = useParams();
  
  const resInfo=useRestaurantInfo(id);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

  return  (
    <div className="res-info">
      <h1>{ name}</h1>
      <h3>{ cuisines.join(",")}</h3>

      <h3>{avgRating}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map((items) => (
          <li key={items.card.info.id}>{items.card.info.name}</li>
        ))}
      </ul>
    </div>
    
  );
};
export default RestaurantInfo;
