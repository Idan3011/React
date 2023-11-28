import { useState } from "react";

const Form = () => {
  let initial = {
    fname: "First Name here..",
    lname: "Last Name here..",
    text: "Write Something",
  };
  const [inputText, setInputText] = useState(initial);
  const [clickOn, setClickOn] = useState(false)
  function handleINput(e) {
    setInputText({...inputText, [e.target.name]: e.target.value });
    
  }
  // console.log(inputText)
  const [isSubmit, setIsSubmit] = useState(false);
  let newText;
  function hanldeSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    }
  function handleClick(){
    setClickOn(true)
  }

  


  if (isSubmit) {
    newText = 
      <div className={isSubmit ? 'new-text-container' : 'not-acticve'}>
        <p>First Nmae: {inputText.fname}</p>
        <p>Last Name: {inputText.lname}</p>
        <p>Your Comment: {inputText.text}</p>
        <button onClick={handleClick}>Back</button>
        <button onClick={handleClick}>Send Survey</button>
      </div>
  
  }

  return (
    <>
      <div className={!isSubmit ? 'form-container' : 'not-active'} >
        <form className="form" onSubmit={hanldeSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            onChange={handleINput}
            placeholder={initial.fname}
            required
          />
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            onChange={handleINput}
            placeholder={initial.lname}
            required
          />
          <textarea
            name="text"
            cols="20"
            rows="10"
            onChange={handleINput}
            placeholder={initial.text}
            required
          ></textarea>
          <input
            type="submit"
            name="submit"
            value="CONFRIM"
            
          />
        </form>
      </div>
      {newText}
      
    </>
  );
};

export default Form;
