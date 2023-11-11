import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom'

// a block for all the test-cases written 
describe("Contact us page Test Cases",()=>{
    test("Testig Contact us Page", () => {
        // we need to render our component to the js dom before we write the testCases,
        //for that we use render method from react testing library
        render(<Contact />);
        // We have rendered the component and we need to check wheather our screen has the content which we written for that
        // we use screen method from react testing library
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        // if we run now we get our test case failed because jsx is not enabled for our test cases files to enable
        // install npm i -D @babel/preset-react
        // now configure this inside babel.config.js as
        //  [("@babel/preset-react", { runtime: "automatic" })]
      
        // now we again get error when we run npm run test ,even after doing the above stuff the error is
        //   TypeError: expect(...).toBeInTheDocument is not a function
      
        //   9 |   // we use screen method from react testing library
        //  10 |   const heading = screen.getByRole("heading");
        // > 11 |   expect(heading).toBeInTheDocument();
        //     |                   ^
        //  12 |   // if we run now we get our test case failed because jsx is not enabled for our test cases files to enable
        //  13 |   // install npm i -D @babel/preset-react
        //  14 |   // now configure this inside babel.config.js as
      
        // we need to install one more library to escape this error and that library is 
        // npm i -D @testing-library/jest-dom
        // and import it inside the testing file like import '@testing-library/jest-dom'
      
      });
      
      test("testing if the button is rendered or not",()=>{
          render(<Contact/>)
          const button=screen.getByRole('button')
          //assertion
          expect(button).toBeInTheDocument();
      })
      
      test("testing if the 2 input boxes got rendered or not",()=>{
          render(<Contact/>)
          const input=screen.getAllByRole('textbox')
          //assertion
          // if we have more than one same element in the document then we need to use getByAll on the screen checking and it will
          // return us an array of objects 
          expect(input.length).toBe(2);
      })
})

