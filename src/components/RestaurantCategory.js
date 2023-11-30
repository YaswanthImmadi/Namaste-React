import { useState } from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [showDiv, setShowDiv] = useState(false);
  const { totalCount, totalPrice } = useSelector((state) => state.cart);
  const Navigate = useNavigate();

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/** Accordian Header */}
      <div
        data-testid="menu"
        className="w-6/12 bg-gray-100 mx-auto my-2 p-6  text-sm  shadow-md cursor-pointer "
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span data-testid="heading" className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/** Accordian Body*/}
        {showItems && <ItemList items={data.itemCards} setShowDiv={setShowDiv} />}
      </div>
      {showDiv && (
        <div className="fixed bottom-0 right-0 left-0 p-4 mx-[350px] bg-green-500 font-bold shadow-md flex justify-between">
          <div className="flex">
            <span className="text-md text-white m-1">{totalCount} Item</span>|
            <span className="text-md text-white m-1">₹{totalPrice / 100}</span>
            </div>
            <span
              className="cursor-pointer"
              onClick={() => {
                setShowDiv(false);
                setTimeout(() => Navigate("/cart"), 0);
              }}
            >
              🛒VIEW CART
            </span>
         
        </div>
      )}
    </div>
  );
};
export default RestaurantCategory;
