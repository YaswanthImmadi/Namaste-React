import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo ,cloudinaryImageId} = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
           CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4><span>Menu:</span>
          {cuisines.join(",")}
        </h4>
        <h4>
          <span>Rating: </span> {avgRating}
        </h4>
        <h4>
          <span>Cost: </span> {costForTwo}
        </h4>
        <h4>
          <span>deliveryTime:</span> {resData.info.sla.deliveryTime} minutes
        </h4>
      </div>
    );
  };
  export default RestaurantCard;