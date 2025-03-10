import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If exists, map through cart and update quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }

      // If doesn't exist, add new product with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const reduceFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct && existingProduct.quantity > 1) {
      // If quantity > 1, simply reduce quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else if (window.confirm("Remove from your cart?")) {
      // If quantity is 1 and user confirms, remove item
      setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, reduceFromCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
