import React from "react";
import ReactDOM from "react-dom/client";
import Header,{Header} from "./components/Header";
import Body from "./components/Body";


{
  /* <div id="parent">
    <div id="child1">
        <h1>Im H1 Tag in chaild1 Div</h1>
        <h2>Im h2 tag of child1 div</h2>
    </div>
    <div id='child2'>
        <h1>Im h1 tag of child2 div</h1>
        <h2>Im h2 tag of child2 div</h2>
    </div>
</div> */
}
// React.createElement is an object which renders html elements defined in it , it takes three elements ,
// 1) Tag
// 2)an object of atributes
// 3)"the contenet that need to be placed in the defined tag"
// the render method, renders the react.CreateElement object as a HTML element on the browser

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "Im h1 tag in child1 div element"),
//     React.createElement("h2", {}, "im h2 tag in child1 div element"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Im h1 tag in child1 div element"),
//     React.createElement("h2", {}, "im h2 tag in child1 div element"),
//   ]),
// ]);
// if we want to write more than one line in a tag then use parenthesis like below



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
