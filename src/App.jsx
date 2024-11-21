import "./App.css";
import "./index.css"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>

        <Navbar></Navbar>
          <Home></Home>
        <Footer></Footer>
    </>
  );
}

export default App;
