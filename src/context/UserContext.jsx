/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    if (storedToken && storedEmail) {
      setToken(storedToken);
      setEmail(storedEmail);
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error en la autenticación");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", email);
      setToken(data.token);
      setEmail(email);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error en el registro");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("email", email);
      setToken(data.token);
      setEmail(email);
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

  const checkout = async (cart) => {
    console.log("Datos enviados al backend:", { cart });

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error en el proceso de checkout");
      }

      return data;
    } catch (error) {
      console.error("Checkout error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setEmail("");
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, checkout, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
