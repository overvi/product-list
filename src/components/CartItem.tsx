import type Card from "../../types/Card";
import { getEachTotal, removeItemFromStore } from "../store";

const CartItem = ({ item }: { item: Card }) => {
  return (
    <div className="cart-card flex justify-between items-center">
      <div className="flex gap-3">
        <img
          className="card-thumbnail"
          width="70"
          src={item.images.thumbnail}
          alt=""
        />
        <div>
          <p className="card-title font-semibold ">{item.titles.full}</p>
          <div className="flex gap-3 items-center">
            <p className="card-price font-semibold">x{item.quantity}</p>
            <p className="card-title--brief text-rose-400 ">
              @ ${item.price.toFixed(2)}
            </p>
            <p className="font-semibold text-rose-400">${getEachTotal(item)}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => removeItemFromStore(item, "instance")}
        className="cart-card-remove flex items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#CAAFA7"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </button>
    </div>
  );
};
export default CartItem;
