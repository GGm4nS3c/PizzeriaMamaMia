/* eslint-disable no-unused-vars */
import "./App.css";
import "./index.css"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login"

function App() {
  return (
    <>

        <Navbar></Navbar>
        {/* <Login></Login> */}
        <Register></Register>
        {/* <Home></Home> */}
        <Footer></Footer>
    </>
  );
}

export default App;
