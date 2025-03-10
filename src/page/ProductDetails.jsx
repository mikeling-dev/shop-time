import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import Loading from "../components/Loading";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error: ", error));
  }, [id]);

  if (!product) return <Loading />;

  return (
    <div className="w-full mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] object-contain"
            />
          </div>
        </div>

        {/* Product Info Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{product.title}</h2>

          <div className="flex items-center">
            <span className="text-4xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>

          <div className="border-t border-b py-4">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Category:</span>
              <span className="px-3 py-1 bg-gray-400 text-gray-50 rounded-full text-sm">
                {product.category}
              </span>
            </div>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
