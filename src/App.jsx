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
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile"

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Pizza/p001" element={<Pizza />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
