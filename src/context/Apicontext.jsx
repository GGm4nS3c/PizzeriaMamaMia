import { useEffect, useState } from "react";
import { createContext } from "react";

export const Apicontext = createContext();

const ApicontextProvider = ({ children }) => {
  const [pizzasData, setPizzasData] = useState([]);
  const [error, setError] = useState(null);
  const endpoint = "http://localhost:5000/api/pizzas";

  useEffect(() => {
    async function getData(endpoint) {
      try {
        const res = await fetch(endpoint);
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status} - ${res.statusText}`);
        }
        const data = await res.json();
        setPizzasData([...data]);
      } catch (error) {
        setError(error);
      }
    }
    getData(endpoint);
    // axios.get(endpoint).then((response) => {
    //   setPizzasData(response.data);
    // })
  }, []);

  return (
    <Apicontext.Provider value={{ pizzasData, error }}>
      {children}
    </Apicontext.Provider>
  );
};

export default ApicontextProvider;
