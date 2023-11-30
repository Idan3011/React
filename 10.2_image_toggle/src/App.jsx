import {useRef } from 'react'

import './App.css'

function App() {
  const imageRef = useRef()
  const imageRef1 = useRef()
function handleRef(){
  return(
    imageRef.current.src = '../public/Images/10 Days in Croatia_ The Perfect Croatia Itinerary - Road Affair.jpeg'
   
    )
    
}

function hadndleRef1(){
  imageRef1.current.src = "../public/Images/308 Pics From ‘Project Van Life’ Instagram That Will Make You Wanna Quit Your Job And Travel The World.jpeg"
}
function handleMove(){
  imageRef.current.src = "../public/Images/10 Days in Croatia_ The Perfect Croatia Itinerary - Road Affair-modified.jpeg"
}

function handleMove1(){
  imageRef1.current.src = '../public/Images/308 Pics From ‘Project Van Life’ Instagram That Will Make You Wanna Quit Your Job And Travel The World-modified.jpeg'
}
  return (
    <>
      <div className="img-container">
        <img ref={imageRef} src="../public/Images/10 Days in Croatia_ The Perfect Croatia Itinerary - Road Affair-modified.jpeg" alt="" onMouseOver={handleRef} onMouseLeave={handleMove}/>
        <img ref={imageRef1 } src="\public\Images\308 Pics From ‘Project Van Life’ Instagram That Will Make You Wanna Quit Your Job And Travel The World-modified.jpeg" onMouseOver={hadndleRef1} onMouseLeave={handleMove1} />
      </div>
      
    </>
  )
}

export default App
