import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.name)
    this.state = {
      count: 0,
      // count2:1
      userInfo:{

      }
    };
    console.log('Child Class Constructor')
  }
 async componentDidMount(){
    // console.log('child class component did mount')
    const data=await fetch('https://api.github.com/users/YaswanthImmadi')
    const json=await data.json();
    this.setState({userInfo:json})
    console.log(json)
  }

  componentDidUpdate(){
    console.log('ComponentDidUpdate Called')
  }
  componentWillUnmount(){
    console.log('ComponentWillUnmount called')
  }

  render() {
    console.log('child class render method')
    const { login, location } = this.state.userInfo
    const { count } = this.state;
    return (
      <div className="p-4 m-4 border border-red-500">
        <h1>Count:{count}</h1>
        {/* <h1>Count2:{this.state.count2}</h1> */}
        <h1>Name:{login}</h1>
        <h2>Location:{location}</h2>
        <h2>Contact: @SaiImmadi</h2>
        <button className="p-2 m-2 border border-green-500"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}
export default UserClass;
