const { render,screen, fireEvent } = require("@testing-library/react");
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import appStore from "../../../utils/appStore";

it("should render Header component login button", () => {
  // in the react header component we used redux store , but our react testing library doesnt know it , so we need to
  // import our store , from react-redux
  // and also js -dom librarty doesnt know Link in header component so we need to import BrowserRouter also

  render(
    <Provider store={appStore}>
      <BrowserRouter>
    
        <Header />
      </BrowserRouter>
    </Provider>
  );
    // if there are multiple buttons available on the header component and you specifically want to test a button rendered or not 
    // then you can find it by passing extra parameter in the screen.getByRole method like below
  const loginButton = screen.getByRole("button",{name:'Login'});
  // assertion
  expect(loginButton).toBeInTheDocument();
});

it("should render logout Button onClick of login button", () => {
    // in the react header component we used redux store , but our react testing library doesnt know it , so we need to
    // import our store , from react-redux
    // and also js -dom librarty doesnt know Link in header component so we need to import BrowserRouter also
  
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
      // if there are multiple buttons available on the header component and you specifically want to test a button rendered or not 
      // then you can find it by passing extra parameter in the screen.getByRole method like below
    const loginButton = screen.getByRole("button",{name:'Login'});
    // assertion
    expect(loginButton).toBeInTheDocument();
    // to simulate onclick event we have something called fireEvent form react testing library
    fireEvent.click(loginButton)
    const logoutButton=screen.getByRole("button",{name:'Logout'});
    expect(logoutButton).toBeInTheDocument();
  });