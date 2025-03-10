import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";

function Navbar() {
  const [cartShowing, setCartShowing] = useState(false);

  useEffect(() => {
    if (cartShowing) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [cartShowing]);

  return (
    <nav className="text-black p-4 px-8 relative">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-slate-700">
          ShopTime
        </Link>
        {/* <div className="flex items-center gap-4"></div> */}
        <div
          onClick={() => setCartShowing(!cartShowing)}
          className="w-8 h-8 hover:cursor-pointer"
        >
          <svg
            dataSlot="icon"
            fill="gray"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          </svg>
        </div>
      </div>
      {cartShowing && (
        <div className="fixed top-0 right-0 h-full w-3/4 md:w-1/2 bg-white shadow-lg z-50">
          <Cart onClose={() => setCartShowing(false)} />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
