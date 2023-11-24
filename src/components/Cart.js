import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../utils/cartSlice";
import CartList from './CartList'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleOrderClick=()=>{
    if(cartItems.length === 0){
      alert('Please Add Items to the cart')
      Navigate('/')
      return
    }
    Navigate('/order')
  }

  return (
    <div>
      <h1 className="font-bold text-xl m-8 p-8 text-center">Your Cart Items</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black rounded-lg text-white"
          onClick={handleClearCart}
        >
          ClearCart
        </button>
        <button
          className="p-2 m-2 bg-black rounded-lg text-white"
          onClick={handleOrderClick}
        >
          Place Order
        </button>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center  p-6 m-6">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQChyJ-tdcNq6HOqEU4Y_B4YPGAE48GfiCwQnm2OFbj-lyhKNVN"
              alt="Image Not Found"
            />
            <p className="p-4 m-4 text-orange-600 font-bold">Good Food is Always Cooking ! Go and order some yummy food from the
            menu! </p>
           
          </div>
        ) : (
         <CartList/>
        )}
      </div>
    </div>
  );
};

export default Cart;
