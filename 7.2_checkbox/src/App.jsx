import { useState } from 'react'

import './App.css'

function App() {
  const check = ['I read the term of the app', 'I accept the trem of the app',
                 'I want to get the weekly news letter', 'I want to get sales and offer']
  const [checked, setCheck] = useState(true)

    function Checkbox(){
      

      return(
        <>
        
        {check.map((element, index) =>{
            if(index ? index==1: index==0) {
            return(
              <div key={index}>
             <input  type="checkbox"  defaultChecked={!checked}  name={index}/>
             <label htmlFor={index}>{element}</label>
             </div>
        )}  {
          return( 
          <div key={index}>
             <input  type="checkbox"  defaultChecked={checked}  name={index}/>
             <label htmlFor={index}>{element}</label>
             </div>)}       
        })}
        </>
      ) 
    }

  return (
    <>
    <div className="container">
    <Checkbox />
    </div>
    
    </>
  )
}

export default App
