import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
//   console.log(data);
    // const [showItems,setShowItems]=useState(false);

    const handleClick=()=>{
        setShowIndex()
    }

  return (
    <div>
      {/** Accordian Header */}
      <div data-testid='menu' className="w-6/12 bg-gray-100 mx-auto my-2 p-6  text-sm  shadow-md " onClick={handleClick}>
        <div  className="flex justify-between">
          <span data-testid='heading' className="font-bold">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
       {showItems && <ItemList items={data.itemCards}/>}
      </div>
      {/** Accordian Body*/}
    </div>
  );
};
export default RestaurantCategory;
