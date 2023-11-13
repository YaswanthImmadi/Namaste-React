import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantInfo from "../RestaurantInfo";
import { BrowserRouter, json } from "react-router-dom";
import MOCK_DATA from "../Mocks/mockResInfo.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render restaurant menu component", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantInfo />
        </BrowserRouter>
      </Provider>
    );
    const accordianHeader = screen.getByText("Recommended(14)");
    fireEvent.click(accordianHeader);
    expect(accordianHeader.length).toBe(14);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);
    expect(screen.getByText('Cart[1]').toBeInTheDocument)
    expect(screen.getAllByTestId('items').length.toBe(1))
    fireEvent.click(screen.getByRole('button',{name:'ClearCart'}).toBeInTheDocument)
    expect(screen.getAllByTestId('items').length.toBe(0))
  });
});
