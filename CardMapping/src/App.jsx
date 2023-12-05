import { useState } from "react";
import "./App.css";
import AddCardForm from "./assets/AddCardForm/AddCardForm";
import Card from "./assets/Card/Card";
function App() {

const [cards, setCards] = useState([])

  const handleSubmit = (e, newCard) => {
    e.preventDefault();
    console.log('hello');
    setCards(oldCards=> [...oldCards, newCard])
  };


  return (
    <>
      <div className="MapCardsPage">
        <h1>Map Card Page</h1>
        <AddCardForm submit={handleSubmit} />
        <Card inputsArray={cards} />
      </div>
    </>
  );
}

export default App;
