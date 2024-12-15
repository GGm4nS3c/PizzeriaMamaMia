import CardPizza from "../components/CardPizza";
import Header from "./components/Header";
import { pizzas } from "../data/pizzas";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="flex justify-center p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {pizzas.map((pizza, index) => {
            return (
              <CardPizza
                key={index}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
