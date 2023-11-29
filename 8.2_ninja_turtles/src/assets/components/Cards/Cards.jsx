import { useState } from "react";
import "../Cards/Cards.css";
import data from "../../data/data";
const Cards = ({ change }) => {
  const [clicked, setclicked] = useState("");

  function handleChange(topping) {
    setclicked(topping.name);
    change(topping);
  }

  return (
    <>
      {data.map((card) => {
        return (
          <div className="card-container" key={card.id}>
            <h1>{card.name}</h1>
            <img src={card.img} alt={card.name} />
            <h2>Toppings:</h2>
            <div className="button-container">
              {card.pizzaToppings.map((topping) => {
                return (
                  <button
                    key={topping.id}
                    id={topping.name}
                    onClick={() => handleChange(topping)}
                    className={clicked === `${topping.name}` ? "active" : null}
                  >
                    {topping.name}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
{
}
