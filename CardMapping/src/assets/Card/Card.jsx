import { useState } from "react";
import "../Card/Card.css";

const Card = ({ inputsArray }) => {
  console.log(inputsArray);

  return (
    <>
      {inputsArray.map((item, index) => {
        return (
          <div key={index}>
            <p> Name: {item.name}</p>
            <p>Last Name: {item.last}</p>
            <p>Email: {item.email}</p>
            <p>Address: {item.address}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
