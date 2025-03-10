import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";

function Cart({ onClose }) {
  const { cart, removeFromCart, addToCart, reduceFromCart } = useCart();

  const totalCost = () => {
    let subTotal = 0;
    cart.forEach((item) => {
      subTotal += item.quantity * item.price;
    });
    return subTotal;
  };

  return (
    <div className="p-4 h-screen flex flex-col justify-between">
      <div className="flex flex-col h-[calc(100vh-10rem)]">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Cart ({cart.length})</h2>
          <div onClick={onClose} className="w-8 h-8 hover:cursor-pointer">
            <svg
              dataSlot="icon"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </div>
        </div>
        <div className="space-y-4 overflow-y-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-2 gap-2"
            >
              <img src={item.image} className="w-16 h-20" />
              <div className="w-3/5">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <div className="font-semibold mb-1 flex gap-2 justify-between items-center align-middle w-full">
                  <button
                    onClick={() => reduceFromCart(item)}
                    className="bg-transparent border border-gray-300 p-0 w-6 h-6 text-xs hover:cursor-pointer hover:bg-gray-200 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="text-xs">x {item.quantity || 1}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-transparent border border-gray-300 p-0 w-6 h-6 text-xs hover:cursor-pointer hover:bg-gray-200 focus:outline-none"
                  >
                    +
                  </button>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="danger"
                  className="w-full"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-4 flex flex-col gap-3 bg-white  border-t-2 border-t-gray-400">
        <div className="flex w-full text-2xl justify-between  ">
          <p>Total: </p>
          <span>${totalCost().toFixed(2)}</span>
        </div>
        <Link
          to={"/checkout"}
          className="text-inherit bg-inherit hover:bg-inherit hover:text-inherit"
          onClick={onClose}
        >
          <Button variant="success" className="w-full">
            Check Out
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
