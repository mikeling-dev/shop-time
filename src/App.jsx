import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import ProductDetails from "./page/ProductDetails";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Checkout from "./page/Checkout";
import { Suspense } from "react";
import Loading from "./components/Loading";

function App() {
  return (
    <CartProvider>
      <div>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
      </div>
    </CartProvider>
  );
}

export default App;
