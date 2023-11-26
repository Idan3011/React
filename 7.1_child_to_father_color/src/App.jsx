import { useState } from 'react'
import './App.css'
const colors = ['blue', 'red', 'yellow']

 

function App() {
  const [color, setColor] = useState('')
  function CustomButton(){
    
      
    return(
      <>
      {colors.map(item=>{
        function getColor(){
        if(item ? 'red' :item ? 'blue' : 'yellow'){
          setColor(item)
        }
    }
      return(
            <button key={item} onClick={getColor} className={item}>{item}</button>
            
        );
      })}
      </>
    
    )
  }
  return (
    <>
    <div className="content-container">
      <div className="btn-container">
      
      <CustomButton />
      <h1>The color selected is: {color}</h1>
      </div>
      
      </div>
    </>
  )
}

export default App
