import { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";

const CustomerProfile = () => {
  const [userData, setUserData] = useState({
    picture: { large: "" },
    name: { title: "", first: "", last: "" },
    login: { username: "" },
    email: "",
    phone: "",
  });
  const [error, setError] = useState(null);
  const endpoint = "https://randomuser.me/api";

  useEffect(() => {
    async function getData(endpoint) {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
        }
        const data = await res.json();
        setUserData(data.results[0]);
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
        <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm mx-auto mt-10">
          <img
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-4"
            src={userData.picture.large}
          />
          <h1 className="text-xl font-semibold  text-gray-900 dark:text-white mb-5">
            {userData.name.title} {userData.name.first} {userData.name.last}
          </h1>
          <p className="text-gray-300 text-sm mb-1">
            <strong>Username:</strong> {userData.login.username}
          </p>
          <p className="text-gray-300 text-sm mb-1">
            <strong>Email:</strong> {userData.email}
          </p>
          <p className="text-gray-300 text-sm">
            <strong>Phone:</strong> {userData.phone}
          </p>
          <button className="gap-1 m-5 inline-flex items-center p-2 w-15 h-7 justify-center text-sm bg-gray-600 text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <IoMdLogOut />
            logout
          </button>
        </div>
      )}
    </>
  );
};

export default CustomerProfile;
