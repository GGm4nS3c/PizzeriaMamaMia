// import { StrictMode } from 'react'
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ApicontextProvider from "./context/Apicontext.jsx";
import UserContextProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <BrowserRouter>
      <ApicontextProvider>
        <App />
      </ApicontextProvider>
    </BrowserRouter>
  </UserContextProvider>
);
