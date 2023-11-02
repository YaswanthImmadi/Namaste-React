import React,{ useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header Rendered")
  const status=useOnlineStatus();
  return (
    <div className="flex justify-between m-2 shadow-md ">
      <div className="logo-container">
        <img className="w-[100px] mx-[100px]" src={LOGO_URL} />
      </div>
      <div className=" items-center">
        <ul className="flex p-5 m-2 mr-8 font-bold" >
         
          <li className="px-4  hover:text-orange-600"><Link to='/' >Home</Link></li>
          <li className="px-4  hover:text-orange-600"><Link to='/about'>About Us</Link></li>
          <li className="px-4  hover:text-orange-600"><Link to='/contact'>Contact Us</Link></li>
          <li className="px-4  hover:text-orange-600"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4  hover:text-orange-600">Online:{status?'🟢':'🔴'}</li>

          <button
            className="login"
            onClick={() =>{
              btnName === "Login"? setBtnName("Logout"):setBtnName("Login")
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
