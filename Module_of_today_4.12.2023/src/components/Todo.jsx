import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Todo.css";

const Todo = () => {
  const [inputVal, setInputVal] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [personsProfile, setPersonsProFile] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    fetchPerson();
  }, []);
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };
  const handleCLick = (e) => {
    personsProfile.map((person) => {
      if (person.includes(inputVal)) {
        return setPersonsProFile(person);
      }
    });
  };

  const fetchPerson = async() => {
    const response = await axios.get(`https://65717888d61ba6fcc012a5a3.mockapi.io/id`);
    const persons = response.data;
    setTimeout(() => {
      setPersonsProFile((prev) => [...prev, ...persons]);
    }, 2000);
  };

  if (!personsProfile) return <div>Loading....</div>;
  return (
    <>
      <main className="content-container">
        <h1>job hunter's</h1>
        <p>search for your next Worker</p>
        <p>search by is name/address or proffesion</p>
        <div className="input-field">
          <h4>find Worker</h4>
          <input type="text" onChange={handleInput} />
          <button ref={inputRef} onClick={handleCLick}>
            SEARCH
          </button>
        </div>
        <div className="persons-container" key={Math.random()}>
          {personsProfile.map((person, index) => {
            return (
              <div className="card-container" key={index}>
                <h1>{person.name}</h1>
                <img src={person.avatar} alt={person.name} />
                <ul>
                  <li>Address: {person.address}</li>
                  <li>Email: {person.email}</li>
                  <li>Job Title: {person.jobTitle}</li>
                  <li>Job Description: {person.jobType}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Todo;
