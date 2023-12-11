import { useState } from 'react'
import './App.css'

function App() {
 let startTime;
 let second ;
  const time = () =>{
    startTime =performance.now();
    second = startTime/1000
    console.log(second);
  }

  return (
    <>
     {time()}
    </>
  )
}

export default App
