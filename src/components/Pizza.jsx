/* eslint-disable react/prop-types */
import { formatter } from "../utils/formatter";
import { FcReading, FcPaid } from "react-icons/fc";
import { useState, useEffect } from "react";

function Pizza() {
  const [pizzaItem, setPizzaItem] = useState({
    img: "",
    name: "",
    ingredients: [],
    price: 0,
  });
  const [error, setError] = useState(null);
  const endpoint = "http://localhost:5000/api/pizzas/p001";

  useEffect(() => {
    async function getData(endpoint) {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
        }
        const data = await res.json();
        console.log(data);
        setPizzaItem(data);
      } catch (error) {
        setError(error);
      }
    }
    getData(endpoint);
  }, []);

  return (
    <>
      {error ? (
        <p className="text-red-500 font-bold">⚠️ Error: {error.message}</p>
      ) : (
        <div className="max-w-lg mx-auto text-center flex flex-col justify-center items-center rounded-lg  bg-gray-800">
          <a className="h-auto object-contain" href="#">
            <img className="p-3 w-full h-full object-cover rounded-lg" src={pizzaItem.img} alt="Card-img" />
          </a>

          <div className="p-5">
            <a href="#">
              <h5 className="mb-4 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                {pizzaItem.name}
              </h5>
            </a>
            <div className="p-5  text-gray-900 dark:text-white">
            {pizzaItem.desc}
            </div>

            <div className="min-h-[80px] flex-col text-center border-b border-t mb-3  text-1xl font-normal dark:text-gray-400">
              <h5>Ingredientes:</h5>

              <ul>
                {pizzaItem.ingredients.map((ingredient, index) => {
                  return <li key={index}>{ingredient}</li>;
                })}
              </ul>
            </div>

            <h6 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {console.log(pizzaItem.price)}
              {"Precio: $" + formatter(pizzaItem.price)}
            </h6>


            <div className="flex justify-between gap-3 align-baseline">
              <a
                href="#"
                className="gap-2 flex items-center p-2 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Ver mas <FcReading />
              </a>
              <a
                href="#"
                className="gap-2 flex items-center p-2 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Añadir <FcPaid />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pizza;
