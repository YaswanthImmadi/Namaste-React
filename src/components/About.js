import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const About=()=>{
    const data=useContext(UserContext);
    return(
        <div className="about">
            <h1>About Us</h1>
            <h2>Welcome to Swiggy App</h2>
            <h2>{data.loggedInUser}</h2>
        </div>
    )
}
export default About;