import CardPizza from "../components/CardPizza";
import { Apicontext } from "../context/Apicontext";
import Header from "./components/Header";
import { useContext } from "react";
// import axios from "axios";

function Home() {
  const { pizzasData, error } = useContext(Apicontext);
  return (
    <>
      <Header></Header>
      <div className="flex justify-center p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : (
            pizzasData.map((pizza) => (
              <CardPizza key={pizza.id} pizza={pizza} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
