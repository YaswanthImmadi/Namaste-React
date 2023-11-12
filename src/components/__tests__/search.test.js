import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../Mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  // the actual fetch function will return  a promise which will have json
  return Promise.resolve({
    // and again this json method will return a promise with data inside it
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should search resList for burger search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn=screen.getByRole('button',{name:'search'})
//   console.log(searchBtn)

  // assertion
  expect(searchBtn).toBeInTheDocument();

  const searchInput=screen.getByTestId('search')
  expect(searchInput).toBeInTheDocument();

  const cardsBeforesearch=screen.getAllByTestId('resCard')
  expect(cardsBeforesearch.length).toBe(20);
    
  fireEvent.change(searchInput,{target:{value:'burger'}})
  fireEvent.click(searchBtn)

  const cards=screen.getAllByTestId('resCard')

  expect(cards.length).toBe(2);

  

  // it will throw an error as fetch is not defined because jsdom doesnt know about fetch , we are using
  // fetch method in BODY component , so we need to write mock Fetch function to resolve

  // now after we mock the fetch call if we re-run the test case now we will recieve this warning
  // console.error
  //   Warning: An update to Body inside a test was not wrapped in act(...).

  //   When testing, code that causes React state updates should be wrapped into act(...):

  //   act(() => {
  //     /* fire events that update state */
  //   });
  // whenever we have a async operation and state updates we need to wrap our render into a act function
  // this act function will come from 'reactdom-test-utils' and we need to make this act function await
});

test("should search resList for burger search input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
  
   
  
    const searchInput=screen.getByTestId('search')
    expect(searchInput).toBeInTheDocument();
  
    const cardsBeforesearch=screen.getAllByTestId('resCard')
    expect(cardsBeforesearch.length).toBe(20);
      
   const filterBtn=screen.getByRole('button',{name:'Know Top Rated Restaurants'})

   expect(filterBtn).toBeInTheDocument();

   fireEvent.click(filterBtn)

   const cards=screen.getAllByTestId('resCard')
   expect(cards.length).toBe(19)
  
    
  
    
  });