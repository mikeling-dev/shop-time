import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import useCategory from "../hooks/useCategory";

function Home() {
  //   const [products, setProducts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const { products, loading } = useCategory(category);
  const [searchInput, setSearchInput] = useState("");

  const filteredProducts = searchInput
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    : products;

  if (loading) return <Loading />;
  return (
    <div className="w-full p-8 gap-3 flex flex-col">
      <div className="flex gap-3 h-12">
        <input
          type="text"
          className="w-3/4 rounded-md shadow-md focus:outline-none px-4"
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="eg. Jacket"
        ></input>
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="w-1/4 focus:outline-none shadow-md rounded-md"
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Home;
