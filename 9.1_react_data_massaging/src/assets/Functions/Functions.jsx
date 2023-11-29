import { useState } from "react";
import "./Functions.css";
import data from "../../data";
const Functions = ({getName}) => {
  const getPersonsNames = (data) => {
    return data.map((personName, index) => {
     {getName(personName)}
      return (
        <>
          <div key={personName.name}>
            <h3>
              The name of the Person in index: {index}, is: {personName.name}
            </h3>
          </div>
        </>
      );
    });
  };
  const bornBefore1990 = (data) => {
    return data.map((birthDay, index) => {
      if (!birthDay.birthday.includes("-199"))
        return (
          <div key={index} className="birth-before-1990">
            <p>name: {birthDay.name}</p>
            <p>birthday: {birthDay.birthday}</p>
            <p>
              favoriteFoods: meats: {birthDay.favoriteFoods.meats[0]},
              {birthDay.favoriteFoods.meats[1]}{" "}
            </p>
            <p>
              favoriteFoods: fish: {birthDay.favoriteFoods.fish[0]},{" "}
              {birthDay.favoriteFoods.fish[1]}
            </p>
          </div>
        );
    });
  };
  return (
    <>
      <h4>Ex_2.1</h4>
      <div className="name-container">{getPersonsNames(data)}</div>
      <h4>Ex_2.2</h4>
      <div className="born-1900-objects">{bornBefore1990(data)}</div>
    </>
  );
};

export default Functions;
