import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

  
    function increment(){
      if(count>=10){
        return
      }
        setCount(count +1)
    }
    function decrement(){
      if(count<=-10){
        return
      }
      setCount(count -1)

    }
    
  

  return (
    <>
        <div className="content-item">
        <label className={count>0 ? 'green' :count===0 ? 'black' : 'red' }>{count}</label>
        
          <button onClick={increment} className='plus'>PLUS</button>
          <button onClick={decrement} className='minus'>MINUS</button>
          
        </div>
    </>
  )
}

export default App
