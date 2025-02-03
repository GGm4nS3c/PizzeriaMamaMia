/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [currentCart, setCurrentCart] = useState([]);
  const total = currentCart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  const clearCart = () => {
    setCurrentCart([]);
  };

  return (
    <CartContext.Provider value={{ currentCart, setCurrentCart, total, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
