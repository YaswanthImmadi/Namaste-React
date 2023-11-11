import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import { useState, useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";

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
const Grocery = React.lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Yaswanth",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore} >
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      <div>
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantInfo />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
