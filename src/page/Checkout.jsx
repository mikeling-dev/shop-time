import Button from "../components/Button";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-screen h-screen p-8 text-black">
      <h2 className="text-2xl font-bold">Checkout</h2>
      <div className="flex justify-between border-b-2 border-b-gray-300">
        <table className="w-full text-xs md:text-base">
          <tr>
            <th className="w-1/2 py-2 text-left">
              <p>Item name</p>
            </th>
            <th className="w-1/6 py-2 text-right">
              <p>Price</p>
            </th>
            <th className="w-1/6 py-2 text-right">
              <p>Quantity</p>
            </th>
            <th className="w-1/6 py-2 text-right">
              <p>Subtotal</p>
            </th>
          </tr>
          {cart.map((item) => (
            <tr key={item.id} className="border-b-2 border-b-gray-200">
              <td>
                <p>{item.title}</p>
              </td>
              <td className="text-right">
                <p>${item.price}</p>
              </td>
              <td className="text-right">
                <p>{item.quantity}</p>
              </td>
              <td className="text-right">
                <p>${item.price * item.quantity}</p>
              </td>
            </tr>
          ))}
        </table>
        {/* <p key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </p>
          <p>{item.price * item.quantity}</p> */}
      </div>
      <p className="font-semibold text-right py-4">
        Total: ${total.toFixed(2)}
      </p>
      <Button
        variant="success"
        onClick={() =>
          total ? alert("Purchase simulated!") : alert("Your cart is empty")
        }
        className="absolute right-8"
      >
        Buy Now
      </Button>
    </div>
  );
}
export default Checkout;
