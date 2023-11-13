import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  //   console.log(items);
  const dispatch = useDispatch();
  const handleAddItem = (event,item) => {
    event.stopPropagation();
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid='items'
          key={item.card.info.id}
          className="m-2 p-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex">
            <div className="py-4 flex-1  ">
              <span className="text-sm font-medium">{item.card.info.name}</span>
              <span className="text-sm font-medium">
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs text-left">{item.card.info.description}</p>
            </div>
            <div className="absolte">
              <img
                className="flaot-right w-40 h-20 "
                src={CDN_URL + item.card.info.imageId}
              />
              <button
                className="p-1 mx-10 rounded-md bg-white text-green font-semibold "
                onClick={(event) => handleAddItem(event,item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
