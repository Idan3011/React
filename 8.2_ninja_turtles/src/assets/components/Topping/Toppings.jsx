import "../Topping/Toppings.css";
import data from "../../data/data.js";
import { useState } from "react";
const Toppings = ({ isClicked, toppingArr }) => {
  return (
    <>
      {toppingArr.map((topping) => {
        return (
          <div className={toppingArr.length >= 5 ? 'active-container' : "img-container" }>
            <h3>{topping.name}</h3>
            <img src={topping.img} alt={topping.name} />
            {toppingArr.includes(isClicked)}
            {}
          </div>
        );
      })}
    </>
  );
};

export default Toppings;
