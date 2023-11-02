import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className=" my-3 p-4  w-[300px] h-[400px] rounded-lg hover:bg-gray-200 hover:transform hover:scale-110 transition-transform ease-out duration-300">
      <img
        className="w-full h-[60%] object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 font-futura text-md text-orange-500">
        {name}
        <br />⭐{avgRating} 🚚 {resData.info.sla.deliveryTime} mins
      </h3>
      <h5 className=" overflow-hidden  text-sm">{cuisines.join(",")}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default RestaurantCard;
