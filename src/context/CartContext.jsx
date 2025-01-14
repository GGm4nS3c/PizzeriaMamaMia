/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { pizzaCart } from "../data/pizzas";


export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [currentCart, setCurrentCart] = useState(pizzaCart);
    const total = currentCart.reduce(
      (acc, pizza) => acc + pizza.price * pizza.count,
      0
    );

  return (
    <CartContext.Provider value={{ currentCart, setCurrentCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;