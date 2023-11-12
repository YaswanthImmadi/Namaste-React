import { render,screen } from "@testing-library/react"
import RestaurantCard from '../RestaurantCard'
import MOCK_DATA from '../Mocks/resCardMock.json'
import '@testing-library/jest-dom';

test('should render restaurant card with props data', () => {
  render(<RestaurantCard resData={MOCK_DATA}/>)
// the RestaurantCard recieves a props data but inorder to test it we need to create a mock data and use it 
    // checking wheather the name field is rendered or not in the card 
    const name=screen.getByTestId('name')

    expect(name).toBeInTheDocument();

})
