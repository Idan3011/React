import { useState } from "react";
import "./App.css";
import Cards from "./assets/components/Cards/Cards";
import Toppings from "./assets/components/Topping/Toppings";
function App() {
  const [buttonClick, setButtonClick] = useState('');
  const [toppingArray, setToppingArray] = useState([]);
  

let arr =toppingArray
console.log(arr);



  const handleClick = (topping) => {
    setButtonClick(topping)
    setToppingArray([...toppingArray, buttonClick])
  }
 

  

  return (
    <>
      <main className="orders-container">
        <h2>Ninja Turtles</h2>
        <h3>Order Pizza with the turtles</h3>
        <div className="cards-container">
          <Cards change={handleClick} />
        </div>
        <h4>Our Order:</h4>
        <div className="topppings-Container">
          <Toppings toppingArr={toppingArray} isClicked={buttonClick} />
        </div>
      </main>
      <section className={arr.length ==5 ? 'section h3' : 'not-active'}>
        <h3>you Have reached the maximum possible toppings!</h3>
      </section>
    </>
  );
}

export default App;
