import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();

  const handleClearCart=()=>{
    dispatch(clearCart())
  }
  return (
    <div>
      <h1 className="font-bold text-xl m-8 p-8 text-center">
        💐Your Cart Items💐
      </h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black rounded-lg text-white"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
