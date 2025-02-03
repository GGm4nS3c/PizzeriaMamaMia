import { formatter } from "../utils/formatter";
import { FaPizzaSlice, FaCartShopping } from "react-icons/fa6";
import { AiOutlineLogin } from "react-icons/ai";
import { IoMdLogOut } from "react-icons/io";
import { FaRegUser, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className=" bg-white border-gray-200 dark:bg-gray-800 m-1 rounded-lg ">
      <div className="flex w-full justify-center items-center">
        <div className="max-w-screen-xl w-full flex items-center justify-start p-4 gap-3">
          <h5 className=" text-green-600 text-sm p-2">Pizzeria Mama Mia!</h5>
          <NavLink to="/">
            <button className="gap-1 p-5 inline-flex items-center w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <FaPizzaSlice />
              Home
            </button>
          </NavLink>

          {token ? (
            <>
              <NavLink to="/Profile">
                <button className="p-5 inline-flex items-center w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <FaUserCircle />
                  Profile
                </button>
              </NavLink>
              <NavLink to="/">
                <button onClick={logout}
                className="p-5 inline-flex items-center w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <IoMdLogOut />
                  logout
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/Login">
                <button className="p-5 inline-flex items-center w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <AiOutlineLogin />
                  Login
                </button>
              </NavLink>
              <NavLink to="/Register">
                <button className="gap-1 p-5 inline-flex items-center w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <FaRegUser />
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>
        <NavLink to="/Cart">
          <button className="gap-1 p-5 m-2 inline-flex items-center w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <FaCartShopping />
            <span>${formatter(total)}</span>
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
