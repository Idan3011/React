import React, { useState } from "react";

const useCounter = (initialValue) => {
  const [value, setValue]= useState(initialValue)
  const increment = () => setValue((value)=>value+1)
  const decrement = () => setValue((value)=>value-1)
  const double = () => setValue((value)=>value*2)
  const divide = () => setValue((value)=>value/2)
  const reset = () => setValue(initialValue)
  return {value, increment,decrement, double, divide, reset}
  
};

export default useCounter;
