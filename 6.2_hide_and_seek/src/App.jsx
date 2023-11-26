import { useState } from 'react'

import './App.css'

function App() {
const [show, setShowClass] = useState('box-item')
const btn = document.querySelector('btn')
function setHideShow(){
  if(show === 'box-item'){
    setShowClass('')
    btn.classList.add('btn-hide')
  } else{
    setShowClass('box-item')
    btn.classList.remove('btn-hide')
  }
}

  return (
    <>
     <div id="box-container">
      <div className='box-content'>
      <button onClick={setHideShow} className='btn'>show/hide</button>
       <div className={show}></div>
        
        
      </div>
     </div>
    </>
  )
}


export default App
