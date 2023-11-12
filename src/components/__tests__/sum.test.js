// if we want to create a testCase we use a function called test()
//  test("Description of the testCase",()=>{
// callBack Function
// })

import { sum } from "../sum";

test("Testing sum of a , b ", () => {
  const result = sum(3, 4);
  // assertion
  expect(result).toBe(7);
  // this assertion statement is not a mandatory but if we dont use it it will always return passed
  
});
