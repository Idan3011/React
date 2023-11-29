import React from "react";
import '../Name/Name.css'
const Name = ({getName}) => {
  return (
    <>
    <h4>Ex.2_3</h4>
  <div className="name-container Ex2_3">
    
    <h5>{`${getName.splice(0,1)}`}</h5>
    <h5>{`${getName.splice(1,1)}`}</h5>
    <h5>{`${getName.splice(2,1)}`}</h5>
    <h5>{`${getName.splice(3,1)}`}</h5>
    <h5>{`${getName.splice(4,1)}`}</h5>
    </div>
    </>
  )
  
};

export default Name;
