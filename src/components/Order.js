import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../utils/cartSlice";

const Order = () => {
  const store = useSelector((store) => store);
  const cartItems = store.cart.items;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClicked = () => {
    setSuccess(false);
    setIsButtonClicked(true);
  };

  useEffect(() => {
    if (isButtonClicked) {
      const timer = setTimeout(() => {
        dispatch(clearCart()), navigate("/");
      }, 5000);
      return () => clearTimeout(timer);
    }
    
  }, [dispatch, navigate, isButtonClicked]);

  return (
    <div className="relative overflow-x-auto mt-20">
      {success ? (
        <div>
          <table className="w-1/2 mx-auto text-center bg-black text-orange-600 rounded-lg">
            <thead className="text-lg border-b-2">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Item Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
              </tr>
            </thead>
            <tbody className="text-white">
              {cartItems.length !== 0 &&
                cartItems.map((item) => (
                  <tr className="space-y-10 text-center p-4 m-4 my-10 text-md">
                    <td>{item.card.info.name}</td>
                    <td>
                      {item.card.info.price
                        ? item.card.info.price / 100
                        : item.card.info.defaultPrice / 100}
                    </td>
                    <td>{item.count}</td>
                  </tr>
                ))}
              <tr className="p-6 my-10 space-y-10">
                <td className="text-lg text-green-800 ">To Pay</td>
                <td className="text-lg text-green-800 ">
                  {store.cart.totalPrice / 100 }
                </td>
                <td className="text-lg text-green-800 ">
                  {store.cart.totalCount}
                </td>
              </tr>
            </tbody>
          </table>
          <button
            onClick={handleButtonClicked}
            className="block mx-auto text-center bg-orange-600 text-white p-2 m-2 my-6 rounded-lg"
          >
            Confirm Order
          </button>
        </div>
      ) : (
        <div className="w-1/2 mx-auto text-center text-white bg-black text-xl rounded-lg my-20">
            <h2>Your Order Has been placed Successfully !! please pay {store.cart.totalPrice/100} when deliverd, enjoy your food!!</h2>
        </div>
      )}
    </div>
  );
};

export default Order;
