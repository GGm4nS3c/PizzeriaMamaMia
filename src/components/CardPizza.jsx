/* eslint-disable react/prop-types */
import { formatter } from "../utils/formatter";
import { FcReading, FcPaid } from "react-icons/fc";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <>
      <div className="max-w-sm  rounded-lg shadow bg-gray-800">
        <a className="" href="#">
          <img className="p-3 rounded-t-lg" src={img} alt="Card-img" />
        </a>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>

          <div className="min-h-[80px] flex-col text-center border-b border-t mb-3  text-1xl font-normal dark:text-gray-400">
            <h5>Ingredientes:</h5>
            <p>{ingredients.join(", ")}</p>
          </div>

          <h6 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {"Precio: $" + formatter(price)}
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
    </>
  );
}

export default CardPizza;
