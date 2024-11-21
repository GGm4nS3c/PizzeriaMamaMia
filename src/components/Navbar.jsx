import { formatter } from "../utils/formatter";
import { FaPizzaSlice, FaCartShopping } from "react-icons/fa6";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUser, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className=" bg-white border-gray-200 dark:bg-gray-800  m-1 rounded-lg ">
      <div className="flex w-full justify-between">
        <div className="max-w-screen-xl flex items-center p-4">
          <h5 className=" text-white text-sm p-2">Pizzeria Mama Mia!</h5>
          <button className="gap-1 inline-flex items-center p-2 w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <FaPizzaSlice />
            Home
          </button>

          <div>
            {token ? (
              <div className="m-2">
                <button className="gap-1 m-2 inline-flex items-center p-2 w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <FaUserCircle />
                  Profile
                </button>
                <button className="gap-1 m-2 inline-flex items-center p-2 w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <IoMdLogOut />
                  logout
                </button>
              </div>
            ) : (
              <div className="m-2">
                <button className="gap-1 m-2 inline-flex items-center p-2 w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <AiOutlineLogin />
                  Login
                </button>
                <button className="gap-1 m-2 inline-flex items-center p-2 w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <FaRegUser />
                  Register
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 flex justify-center items-center p-4">
          <FaCartShopping />
          <button>${formatter(total)}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;