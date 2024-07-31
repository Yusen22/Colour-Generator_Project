import { useState, useEffect } from "react";
import { ColourList, Form } from "../Pages";
import { ToastContainer, toast } from "react-toastify";
import hexRgb from "hex-rgb";
import Values from "values.js";

// toast.success('awesome');
// toast.error('error message');

const App = () => {
  const [colour, setColour] = useState("");
  const [shades, setShades] = useState([]);

  useEffect(() => {
    console.log(colour);
  }, [colour]);

  const generateShades = (colour) => {
    // Generates an array of hex string shades of chosen colour
    const colours = new Values(colour).all(10);
    console.log(colours);
    const fullColours = getRgbValues(colours);
    console.log(fullColours);
    setShades(fullColours);
  };

  const getRgbValues = (colours) => {
    const newRgb = colours.map((colour) => {
      // converts hex to rgb
      const convRgb = hexRgb(colour.hex);
      console.log(convRgb);
      // returns null if not a colour
      if (!convRgb) return null;

      let rgbVals = [convRgb.red, convRgb.green, convRgb.blue].map(Number);
      let rgbVal = rgbVals.reduce((a, b) => a + b, 0);
      console.log(rgbVal);

      return {
        hex: colour.hex,
        rgb: `rgb(${convRgb.red}, ${convRgb.green}, ${convRgb.blue})`,
        rgbValue: rgbVal,
      };
    });
    return newRgb;
  };
  return (
    <main>
      <h2 className="title">Color Generator Starter</h2>
      <Form
        setColour={setColour}
        colour={colour}
        generateShades={generateShades}
      ></Form>
      <ColourList shades={shades} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
