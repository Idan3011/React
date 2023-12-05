import { useRef, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputVal, setInputVal] = useState([]);
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef();

  const handleInput = (e) => {
    let val = e.target.value;
    setInputVal(val);
    inputRef.current.value = inputVal;
    if(!inputRef.current.click()){
        setClicked(true)
    console.log(clicked);
    console.log(inputVal);
    
    }
  };
  return (
    <>
      <main className="content-container">
        <h1>Todo's</h1>
        <p>Local storage CRUD app</p>
        <p>CRUD - Create Read Update Delete</p>
        <div className="input-field">
          <h4>add to Todo</h4>
          <input type="text" onChange={handleInput} />
          <button ref={inputRef} onClick={handleInput}>ADD</button>
        </div>
        <div className={clicked ? "todo-field" : 'not-active'}>{inputVal}</div>
      </main>
    </>
  );
};

export default Todo;
