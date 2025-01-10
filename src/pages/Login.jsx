/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { validateFieldsLogin } from "../utils/submitValidator";

const login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSumitLogin = (e) => {
    e.preventDefault();
    const validationResult = validateFieldsLogin(email, pass);

    if (validationResult === true) {
      setIsSuccess(true);
      setMessage("Autenticación exitosa");
      alert("Autenticación exitosa");
    } else {
      setIsSuccess(false);
      setMessage(validationResult);
      alert(validationResult);
    }
  };

  return (
    <form className=" bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10 flex justify-center items-center flex-col">
      <div className="mb-3 w-full">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-200 dark:text-green-700"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5 w-full">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-200 dark:text-green-700"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className="ms-2 text-sm font-medium text-gray-200 dark:text-green-700"
        >
          Remember me
        </label>
      </div>
      {message &&
        (isSuccess ? (
          <div
            id="alert-3"
            className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">{message}</div>
          </div>
        ) : (
          <div
            id="alert-3"
            className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">{message}</div>
          </div>
        ))}
      <button
        type="submit"
        className=" text-gray-200 dark:text-green-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        onClick={handleSumitLogin}
      >
        Submit
      </button>
    </form>
  );
};

export default login;
