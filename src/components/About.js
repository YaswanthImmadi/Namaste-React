import { useContext } from "react";
import UserContext from "../../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props)
       console.log('Parent Class Constructor')
    }
    // componentDidMount(){
    //     console.log('parent component did mount')
    // }

  render() {
    console.log('parent class render')
    return (
      <div className="about">
        <h1>About Us</h1>
        <h2>Welcome to MealMate App</h2>
        {/* <h2>{data.loggedInUser}</h2> */}
        {/* <User  name={'Yaswanth Sai Immadi'} location={"Guntur"}/> */}
        <UserClass name={"Yaswanth Sai Immadi"} location={"Guntur"} />
      </div>
    );
  }
}

export default About;
