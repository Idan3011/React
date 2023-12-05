import { useState, useEffect, useRef } from "react";
import "./App.css";
import Todo from "./components/Todo";
function App() {
  const [favoriteColor, setFavoriteColor] = useState("blue");
  const [isOn, setIsOn] = useState(false);
  const [color, setColor] = useState("");
  const [spinnerOn, setSpinnerOn] = useState(false);
  const myRef = useRef("");
  const focusRef = useRef()
  let i = 0;
  
  // useEffect(() => {
  //   const setTime = setTimeout(() => {
  //     setFavoriteColor("red");
  //     console.log("color as change to", favoriteColor);
  //   }, 1000);
  //   return () => {
  //     clearInterval(setTime);
  //   };
  // }, [favoriteColor]);

  // useEffect(() => {
  //   const setTime = setTimeout(() => {
  //     setIsOn(true);
  //   }, 1000);
  //   const setTime1 = setTimeout(() => {
  //     setIsOn(false);
  //   }, 4000);
  //   return () => {
  //     clearInterval(setTime, setTime1);
  //   };
  // }, [isOn]);

  // const chagneColor = () => {
  //   const colorsArray = ["green", "red", "yellow", "purple"];
  //   setColor(colorsArray[i])
  //  myRef.current.style.background = colorsArray[i]
  //   i = (i + 1) % colorsArray.length;
  //   if(i==colorsArray.length-1){
  //     myRef.current.style.borderRadius = '50%'
  //   }
  // };

  // useEffect(() => {
  //   const setTime = setInterval(chagneColor, 500);
  //   return () => {

  //     clearTimeout(setTime)
  //   };
  // }, [myRef]);

  // useEffect(()=>{
  //   const setTime = setTimeout(()=>{
  //     setSpinnerOn(false)
  //   },3000)


  // })
  // useEffect(()=>{focusRef.current.focus()})
    
  

  return (
    <>
      {/* <div className="Ex-container">
        <div className="Ex_13_1 Ex">
          <h1>Ex.13.1</h1>
          <h3>My favorite Color is : {favoriteColor}</h3>
        </div>
        <div className="Ex_13_2 Ex">
          <h1>Ex.13.2</h1>
          <div className={isOn ? "box1" : "none"}></div>
          <div className={isOn ? "box2" : "none"}></div>
          <div className={isOn ? "box3" : "none"}></div>
        </div>
        <div className="Ex_13_3 Ex">
          <h1>Ex.13.3</h1>
          <div className={"box"} ref={myRef}></div>
        </div>
        <div className="Ex_13_4 Ex">
          <h1>Ex.13.4</h1>
          <div className={spinnerOn ? 'btn2' : null}></div>
        </div>
        <div className="Ex_13_5 Ex">
          <h1>Ex.13.5</h1>
          <input type="text" ref={focusRef}/>
        </div>
      </div> */}
      <Todo />
    </>
  );
}

export default App;
