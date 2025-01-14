import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatter } from "../utils/formatter";

const Cart = () => {
  const { currentCart, setCurrentCart, total } = useContext(CartContext);

  const handleAdd = (id) => {
    const updatedCart = currentCart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCurrentCart(updatedCart);
  };

  const handleDel = (id) => {
    const updatedCart = currentCart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0); 
    setCurrentCart(updatedCart);
  };

  return (
    <div className="flex flex-col items-center text-green-700 font-medium p-3 m-5">
      <h1 className="text-3xl">Detalles del pedido:</h1>
      <ul className="p-5 rounded-3xl bg-gray-800 text-gray-300 text m-3">
        {currentCart.map((pizza) => (
          <li
            className="p-5 m-5 border border-gray-800 flex justify-between gap-10"
            key={pizza.id}
          >
            <img
              className="h-auto max-w-20 transition-all rounded-lg"
              src={pizza.img}
              alt={pizza.name}
            />
            <span className="text-green-700">{pizza.name}</span>
            <span>${pizza.price}</span>
            <button
              className="bg-green-700 h-8 w-8"
              onClick={() => handleAdd(pizza.id)} 
            >
              +
            </button>
            <span>{pizza.count}</span>
            <button
              className="bg-red-700 h-8 w-8"
              onClick={() => handleDel(pizza.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
      <h1 className="text-green-700">Total del pedido: ${formatter(total)}</h1>
    </div>
  );
};

export default Cart;
