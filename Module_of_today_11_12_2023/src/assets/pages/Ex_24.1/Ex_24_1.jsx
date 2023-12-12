import React from "react";
import useCounter from "../../components/useCounter";

const Ex_24_1 = () => {
  const quantity = useCounter(0);

  return (
    <div className="Ex">
      <div className="Ex_24_1">
        <h1>Ex_24_1</h1>
        <h1
          quantity= {quantity.value}
        >
         {quantity.value}
        </h1>
        <button onClick={quantity.increment}>Plus</button>
        <button  onClick={quantity.decrement}>Minus</button>
        <button onClick={quantity.double}>Double</button>
        <button onClick={quantity.divide}>Divide</button>
        <button onClick={quantity.reset}>Reset</button>
      </div>
    </div>
  );
};

export default Ex_24_1;
// quantity={quantity.value}
//             insceremt={quantity.increment}
//             decrement={quantity.decrement}
//             double={quantity.double}
//             divide={quantity.divide}