import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HelloWorld } from './test' 
import { Calc } from './test'
import { StrLength } from './test'
function App() {
  

  return (
    <>
    <HelloWorld />
      <Calc />
      <StrLength />
      </>
    
   )
}

export default App
