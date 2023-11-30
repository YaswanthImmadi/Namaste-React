import { useState, useContext,useEffect } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { IoWifi } from "react-icons/io5";
import { CiWifiOff } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../../utils/userSlice";

export const Header = () => {
  // const [btnName, setBtnName] = useState("Login");

  // console.log("Header Rendered")
  const dispatch=useDispatch();
  const Navigate=useNavigate();
  const status = useOnlineStatus();
  const user = useSelector((store) => store.user);
  //  let {loggedInUser,setUserName}= useContext(UserContext);
  // console.log(data);

  // Subscribing to appStore created inorder to read data , we use useSelector Hook form react-redux
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        Navigate("/home");
      } else {
        // User is signed out
        dispatch(removeUser());
        Navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
 

  return (
    <div className="flex justify-between m-2 shadow-md ">
      <div className="logo-container">
        <Link to="/home">
          <img className="w-[100px] mx-[100px]" src={LOGO_URL} />
        </Link>
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
          {/* <li className="px-4  hover:text-orange-600">
            <Link to="/grocery">Grocery🧺</Link>
          </li> */}
          <li className="px-4  hover:text-orange-600 text-lg">
            <Link to="/cart">Cart[{cartItems.length}]</Link>
          </li>
          <li className="px-4  hover:text-orange-600">
            {status ? (
              <IoWifi className="text-green-700 text-2xl" />
            ) : (
              <CiWifiOff className="text-2xl text-red-700" />
            )}
          </li>

          {/* <li className="px-4  hover:text-orange-600">{loggedInUser}</li> */}
          <li>
          <button
            className=" px-2 mx-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
