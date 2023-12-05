import { useState } from 'react';
import '../AddCardForm/addCardForm.css'
import Card from '../Card/Card';
const AddCardForm = ({submit}) => {
    const [formInput, setFormInput] = useState({});

    const handleFormInput = (e) => {
      const newInput = {
        [e.target.name]: e.target.value 
      } 
      setFormInput({...formInput, ...newInput});
    };

    console.log(formInput);

  return <div className="addCardForm">
    <form onSubmit={(e)=>submit(e,formInput)}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" onChange={handleFormInput} />
        <label htmlFor="last">Last Name: </label>
        <input type="text" name="last" id="last" onChange={handleFormInput} />
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" id="email" onChange={handleFormInput}/>
        <label htmlFor="address">Address: </label>
        <input type="text" name='address' id='address' onChange={handleFormInput}/>
        <input type="submit"  value='Add Card'/>
    </form>
  </div>;

};

export default AddCardForm;
