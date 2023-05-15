
import { useDispatch } from "react-redux";
import { decreaseCart } from "../../store/cartSlice";
import { IncreaseCart } from "../../store/cartSlice";


const Counter = ({ quantity }) => {
  const dispatch = useDispatch();

  const handleIncrement = (quantity) => {
    dispatch(IncreaseCart(quantity));
  };
  const handleDecrement = (quantity) => {
    dispatch(decreaseCart(quantity));
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="mr-4 bg-gray-400  rounded px-2 font-bold text-white hover:bg-teal-500"
        onClick={() => handleDecrement(quantity)}
      >
        -
      </button>
      <span className="text-2xl font-bold">{quantity.cartQuantity}</span>
      <button
        onClick={() => handleIncrement(quantity)}
        className="ml-4 bg-gray-400  rounded px-2 font-bold text-white  hover:bg-teal-500"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
