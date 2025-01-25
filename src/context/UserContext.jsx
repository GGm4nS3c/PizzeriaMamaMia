/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [tokenStatus, setTokeStatus] = useState(true);
  const logOut = () => {
    setTokeStatus(false);
  };

  return (
    <UserContext.Provider value={{ tokenStatus, setTokeStatus, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
