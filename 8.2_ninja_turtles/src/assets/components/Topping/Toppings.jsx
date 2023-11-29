import "../Topping/Toppings.css";
import data from "../../data/data.js";
import { useState } from "react";
const Toppings = ({ isClicked, toppingArr }) => {
  return (
    <>
      {toppingArr.map((topping) =>  {
        if (toppingArr.length <=5)
          return (
            <div className="img-container">
              <h3>{topping.name}</h3>
              <img src={topping.img} alt={topping.name} />
            </div>
          );
      })}
    </>
  );
};

export default Toppings;
