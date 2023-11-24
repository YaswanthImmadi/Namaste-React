import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import {
  addItem,
  addToPrice,
  decrementCount,
  increamentCount,
  removeItem,
  subtractFromPrice,
} from "../../utils/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ItemList = ({ items, setShowDiv }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemCounts, setItemCounts] = useState({});

  const handleAddItem = (event, item) => {
    setItemCounts((prev) => ({
      ...prev,
      [item?.card?.info?.id]: (prev[item?.card?.info?.id] || 0) + 1,
    }));
    dispatch(addItem(item));
    dispatch(increamentCount());
    dispatch(addToPrice(item.card.info.price || item.card.info.defaultPrice));
    setShowDiv(true);
  };

  const handleRemoveItem = (item) => {
    setItemCounts((prev) => ({
      ...prev,
      [item?.card?.info?.id]: (prev[item?.card?.info?.id] || 0) - 1,
    }));
    dispatch(removeItem(item));
    dispatch(decrementCount());
    dispatch(
      subtractFromPrice(item.card.info.price || item.card.info.defaultPrice)
    );
  };

  return (
    <div>
      {items.length !== 0 &&
        items.map((item) => (
          <div
            data-testid="items"
            key={item.card.info.id}
            className="m-2 p-2 border-gray-200 border-b-2 text-left"
          >
            <div className="flex">
              <div className="py-4 flex-1  ">
                <span className="text-sm font-medium">
                  {item.card.info.name}
                </span>
                <span className="text-sm font-medium">
                  {" "}
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <p className="text-xs text-left">
                  {item.card.info.description}
                </p>
              </div>
              <div className="relative">
                <img
                  className="float-right w-40 h-20 "
                  src={CDN_URL + item.card.info.imageId}
                />
                {(itemCounts[item.card.info.id] || 0) === 0 ? (
                  <button
                    className="absolute bottom-0 right-0 p-1 mx-4 rounded-md bg-white text-green-600 font-semibold flex justify-between items-center shadow-lg"
                    onClick={(event) => handleRemoveItem(event, item)}
                  >
                    ADD+
                  </button>
                ) : (
                  <div className="absolute bottom-0 right-0 p-1 mx-4 rounded-md bg-white text-green-600 font-semibold flex justify-between items-center shadow-lg">
                    <button
                      className="px-2 mx-2 font-bold text-lg"
                      onClick={(event) => handleRemoveItem(event, item)}
                    >
                      -
                    </button>
                    <span>{item.count}</span>
                    <button
                      className="px-2 mx-2 font-bold text-lg"
                      onClick={(event) => handleAddItem(event, item)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default ItemList;
