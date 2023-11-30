import { useState } from "react";
import "./App.css";
import Functions from "./assets/Functions/Functions";
import Name from "./assets/Name/Name";
function App() {
  const [name, setName] = useState([]);
  const [before1990, setBefore1990] = useState([])
  const handleName = (person) => {
    if (name.length > 1) {
      return;
    }
    setName((name)=>[...name, person.name]);
  };
  const handleBefore1990=(person)=>{
    setBefore1990((person)=>[...before1990, person])
  }
  
  
  
  return (
    <>
      <Functions getName={handleName} />
      <Name getName={name}/>
      
    </>
  );
}

export default App;
