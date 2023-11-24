import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;

  return (
    <div
      data-testid="resCard"
      className=" my-3 p-4  w-[300px] h-[400px] rounded-lg"
    >
      <img
        className="w-full h-[60%] object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3
        data-testid="name"
        className="font-bold py-2 font-futura text-md-blue-500"
      >
        {name}
        <br />
        <div className="flex justify-left">
          <div className="bg-green-900 rounded-full p-2 w-7 h-7 flex items-center justify-center"></div>
          <h3 className="ml-1">
            {" "}
            {avgRating} . {resData.info.sla.deliveryTime} mins
          </h3>
        </div>
      </h3>
      <h5 className=" overflow-hidden mx-1  text-sm">
        {cuisines.slice(0, 3).join(",")}
      </h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

// creating a Higher order Component for addign a promoted lable on the restaurant cards
export const withPromotedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-white bg-black m-2 p-2 rounded-md absolute ">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
