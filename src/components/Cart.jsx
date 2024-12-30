import { useState } from "react";
import { pizzaCart } from "../data/pizzas";
import { formatter } from "../utils/formatter";

const Cart = () => {
  const [currentCart, setCurrentCart] = useState(pizzaCart);
  const total = currentCart.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  const handleAdd = (index) => {
    currentCart[index].count++;
    setCurrentCart([...currentCart]);
    console.log(currentCart);
  };
  const handleDel = (index) => {
    currentCart[index].count--;
    setCurrentCart([...currentCart.filter((pizza) => pizza.count > 0)]);
    console.log(currentCart);
  };

  return (
    <>
      <div className="flex flex-col items-center text-lg font-medium text-gray-900 p-3 m-5 ">
        <h1>Detalles del pedido:</h1>

        <ul className="p-5 rounded-3xl bg-gray-300">
          {currentCart.map((pizza, index) => {
            return (
              <li
                className="p-5 m-5 border border-gray-800 flex justify-between gap-10"
                key={index}
              >
                <a className="" href="#">
                  <img
                    className="h-auto max-w-20 transition-all"
                    src={pizza.img}
                    alt="pizzaimg"
                  />
                </a>

                <span>{pizza.name}</span>

                <span>${pizza.price}</span>
                <button
                  className="bg-green-500 h-8 w-8"
                  onClick={() => handleAdd(index)}
                >
                  +
                </button>

                <span>{pizza.count}</span>
                <button
                  className="bg-red-500 h-8 w-8"
                  onClick={() => handleDel(index)}
                >
                  -
                </button>
              </li>
            );
          })}
        </ul>


        <h1>Total del pedido: ${formatter(total)}</h1>
      </div>
    </>
  );
};

export default Cart;

