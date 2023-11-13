import  { useState, useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // console.log("Header Rendered")
  const status = useOnlineStatus();
 let {loggedInUser,setUserName}= useContext(UserContext);
  // console.log(data);

  // Subscribing to appStore created inorder to read data , we use useSelector Hook form react-redux
  const cartItems=useSelector((store)=>store.cart.items)
  //console.log(cartItems)

  return (
    <div className="flex justify-between m-2 shadow-md ">
      <div className="logo-container">
       <Link to='/'><img className="w-[100px] mx-[100px]" src={LOGO_URL} /></Link> 
      </div>
      <div className=" items-center">
        <ul className="flex p-5 m-2 mr-8 font-bold">
          <li className="px-4  hover:text-orange-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:text-orange-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4  hover:text-orange-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  hover:text-orange-600">
            <Link to="/grocery">Grocery🧺</Link>
          </li>
          <li className="px-4  hover:text-orange-600 text-lg">
            <Link to="/cart">Cart[{cartItems.length}]</Link>
          </li>
          <li className="px-4  hover:text-orange-600">
            📶:{status ? "🟢" : "🔴"}
          </li>

          <li className="px-4  hover:text-orange-600">{loggedInUser}</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
