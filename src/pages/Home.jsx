import CardPizza from "../components/CardPizza";
import Header from "./components/Header";
import { useEffect, useState } from "react";
// import axios from "axios";

function Home() {
  const [pizzasData, setPizzasData] = useState([]);
  const [error, setError] = useState(null);
  const endpoint = 'http://localhost:5000/api/pizzas'

  useEffect(() => {
    async function getData(endpoint) {
      try {
      const res = await fetch(endpoint);
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
      }
      const data = await res.json();
      setPizzasData(data);
    } catch (error) {
      setError(error);
    }
    }
    getData(endpoint)
    // axios.get(endpoint).then((response) => {
    //   setPizzasData(response.data);
    // })
  }, []);

  return (
    <>
      <Header></Header>
      <div className="flex justify-center p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {error ? (
            <p className="text-red-500">Error: {error.message}</p>
          ) : (
            // Mostrar las pizzas si no hay error
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
