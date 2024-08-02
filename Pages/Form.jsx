import { useState, useEffect } from "react";

const Form = ({ colour, setColour, generateShades, coloursRef }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setColour(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    coloursRef.current.scrollIntoView({ behavior: "smooth" });
    generateShades(colour);
  };

  return (
    <section className="section" style={{ background: 'linear-gradient(to right, #16222a, #3a6073)'
    }}>
      <form
        className="colour-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor=""></label>
        <input
          className="colour-input"
          type="color"
          name="colour"
          value={colour || "#47bd14"}
          onChange={handleChange}
        />
        <label htmlFor=""></label>
        <input
          type="text"
          name="text"
          on={handleChange}
          value={colour || "#47bd14"}
        />
        <button
          type="submit"
          className="form-btn"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
export default Form;
