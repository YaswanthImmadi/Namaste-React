import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem, removeItem } from "../../utils/cartSlice";

const CartList = () => {
  const dispatch = useDispatch();
  const items=useSelector(state=>state.cart.items)

  const handleAddItem = (event, item) => {
    event.stopPropagation();
    dispatch(addItem(item));
  };

  const handleRemoveItem=(event,item)=>{
     event.stopPropagation();
     dispatch(removeItem(item));
  }

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
                {
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
                }
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CartList;
