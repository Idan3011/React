import { useRef } from "react";
import "./App.css";
 
function App() {

  const vidref = useRef(null);
 function playvideo() {
  vidref.current.play();
  }
  function pauseVideo(){
    vidref.current.pause()
  }

  return (
    <>
      <div className="video-container">
        <video ref={vidref}>
          <source src="../public/videos/530521_Skateboarder Jump Trick Man Riding_By_Stockbusters_Artlist_HD.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="btn-container">
        <button onClick={playvideo}>Play</button>
        <button onClick={(pauseVideo)}>Pause</button>
      </div>
    </>
  );
}

export default App;
