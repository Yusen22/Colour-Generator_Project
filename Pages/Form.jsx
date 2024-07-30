import { useState, useEffect } from "react";

const Form = () => {
  const [colour, setColour] = useState();

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form type="submit">
      <div>
        <label htmlFor=""></label>
        <input
          type="color"
          name="colour"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor=""></label>
        <input
          type="text"
          name="text"
          onChange={handleChange}
        />
        <button
          type="submit"
          onSubmit={handleSubmit}
        ></button>
      </div>
    </form>
  );
};
export default Form;
