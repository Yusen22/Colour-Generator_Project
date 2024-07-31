import 'react-toastify/dist/ReactToastify.css';

import { useState, useEffect } from "react";


const Form = ({colour, setColour, generateShades, coloursRef}) => {
  
  const handleChange = (e) => {
    console.log(e.target.value);
    setColour(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      coloursRef.current.scrollIntoView({ behavior: 'smooth' });
    generateShades(colour)
  }

  return (
    
      <form
        className="colour-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor=""></label>
        <input
          className="colour-input"
          type="color"
          name="colour"
          value={colour ? colour : "#47bd14"}
          onChange={handleChange}
        />
          <label htmlFor=""></label>
          <input
            type="text"
            name="text"
            onChange={handleChange}
            value={colour}
          />
          <button
            type="submit"
            className="form-btn"
          >
            Submit
          </button>
      </form>
  );
};
export default Form;
