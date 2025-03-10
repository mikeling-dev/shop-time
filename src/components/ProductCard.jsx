import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md bg-white justify-between">
      <img
        src={product.image}
        alt={product.title}
        loading="lazy"
        className="w-40 h-48 mb-4"
      />

      <h3 className="text-lg font-semibold text-center ">{product.title}</h3>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <div className="flex gap-2">
        <Link
          to={`/product/${product.id}`}
          className="text-inherit bg-transparent hover:bg-transparent hover:text-inherit"
        >
          <Button variant="secondary">View Details</Button>
        </Link>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>
    </div>
  );
}
export default ProductCard;
