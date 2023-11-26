import { useState } from 'react'

import './App.css'

function App() {
  
  const [count, setCount] =useState(0);




  function addOne(){
    setCount(count+1)
  }

  return (
    <>
    <h1>{count}</h1>
    <button onClick={addOne}>increment</button>
    </>
  )
}

export default App
