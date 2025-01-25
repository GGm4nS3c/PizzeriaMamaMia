/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { formatter } from "../utils/formatter";
import { FcReading, FcPaid } from "react-icons/fc";
import { Link } from "react-router";

function CardPizza({ pizza }) {
  const { currentCart, setCurrentCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const getPizza = currentCart.find((item) => item.id === pizza.id);

    if (getPizza) {
      const updatedCart = currentCart.map((item) =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      );

      alert(`Has añadido un pizza ${pizza.name} mas al carrito`);
      setCurrentCart(updatedCart);
    } else {
      alert(`has añadido una nueva pizza ${pizza.name} al carrito`);
      setCurrentCart([...currentCart, { ...pizza, count: 1 }]);
    }
  };

  return (
    <div className="max-w-sm rounded-lg shadow bg-gray-800">
      <a className="w-50 h-50" href="#">
        <img className="p-3 rounded-lg" src={pizza.img} alt="Card-img" />
      </a>

      <div className="p-5">
        <a href="#">
          <h5 className="mb-4 text-2xl font-bold tracking-tight text-green-200 dark:text-green-600 text-center">
            {pizza.name}
          </h5>
        </a>

        <div className="min-h-[80px] flex-col text-center border-b border-t mb-3 text-1xl font-normal dark:text-gray-400">
          <h5>Ingredientes:</h5>
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <h6 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {"Precio: $" + formatter(pizza.price)}
        </h6>

        <div className="flex justify-between gap-3 align-baseline">
          <Link to={`/Pizza/${pizza.id}`}>
            <button
              href="#"
              className="gap-2 flex items-center p-2 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Ver más <FcReading />
            </button>
          </Link>

          <button
            onClick={handleAddToCart}
            className="gap-2 flex items-center p-2 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Añadir <FcPaid />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
