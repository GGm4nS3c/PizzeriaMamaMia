/* eslint-disable no-unused-vars */
import "./App.css";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
import CartProvider from "./context/CartContext";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const {tokenStatus} = useContext(UserContext);
  return (
    <>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar></Navbar>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login"  element={tokenStatus ? (<Navigate to="/Profile" />) : (<Login></Login>)} />
              <Route path="/Register"  element={tokenStatus ? (<Navigate to="/Profile" />) : (<Register></Register>)} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Pizza/:id" element={<Pizza />} />
              <Route
                path="/Profile"
                element={tokenStatus ? (<Profile></Profile>) : ( <Navigate to="/login" />)}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer></Footer>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
