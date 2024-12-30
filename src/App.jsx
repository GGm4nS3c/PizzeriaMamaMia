/* eslint-disable no-unused-vars */
import "./App.css";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./components/cart";
import Pizza from "./components/Pizza"

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <main className="flex-grow">
          {/* <Home></Home> */}
          {/* <Cart></Cart> */}
          <Pizza></Pizza>
        </main>
        {/* <Login></Login> */}
        {/* <Register></Register> */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
