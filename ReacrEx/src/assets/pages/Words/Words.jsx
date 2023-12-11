import { useState } from "react";
import "../Words/Words.css";
import { generate } from "random-words";
import { useEffect } from "react";
import { useRef } from "react";
const word = generate({ minLength: 4 });
const Words = () => {
  const [inputVal, setInpuVal] = useState("");
  const [inputField, setInpuField] = useState([""]);
  const [guessingWord, setGuessingWord] = useState([]);
  const myRef = useRef([]);
  const announcment = (
    <h3>your are right! the random word is:{guessingWord.join("")}</h3>
  );
  const handleChange = (e, i, word) => {
    setInpuVal(e.target.value);

    if (i !== inputField.length - 1) {
      myRef.current[i + 1].focus();
      console.log(myRef.current[i].value);
    }
    if (word[i] === myRef.current[i].value) {
      myRef.current[i].className = "active ";
      setGuessingWord((prev) => [...prev, myRef.current[i].value]);
      console.log("guessing word is: ", guessingWord.join(""));

      return;
    }
    myRef.current[i].className = null;
    
  };

  const handleInputField = (word, i) => {
    setInpuField(Array(word.length).fill(""));
    console.log("random word is: ", word);
  };

  useEffect(() => {
    const setTime = setTimeout(() => {
      handleInputField(word);
    }, 50);
    return () => {
      clearTimeout(setTime);
    };
  }, [myRef]);

  return (
    <>
      <div className="page-container">
        <h1>
          Word to guess: {guessingWord.join("") === word ? announcment : null  }
        </h1>
        <ul key={inputField}>
          {inputField.map((val, index) => {
            return (
              <li key={index}>
                <input
                  ref={(e) => (myRef.current[index] = e)}
                  type="text"
                  maxLength={1}
                  onChange={(e) => handleChange(e, index, word)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Words;
