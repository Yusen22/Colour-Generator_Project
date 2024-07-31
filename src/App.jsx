import { useState, useEffect, useRef } from "react";
import { ColourList, Form, Header } from "../Pages";
import { ToastContainer, toast } from "react-toastify";
import { GetColorName } from 'hex-color-to-color-name';
import hexRgb from "hex-rgb";
import Values from "values.js";

const App = () => {
  const [colour, setColour] = useState("");
  const [shades, setShades] = useState([]);
  const coloursRef = useRef(null);

  const clipCopy = async (name, colour) => {
    try {
      await navigator.clipboard.writeText(colour);
      console.log(`Text copied to clipboard: ${colour}`);
      toast.success(`${name} copied to clipboard!`);
    } catch (error) {
      console.error("Failed to copy text: ", error);
      toast.error(`Failed to copy colour!`);
    }
  };

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
       // gets name of colour 
       const colorName = GetColorName(colour.hex)
      // converts hex to rgb
      const convRgb = hexRgb(colour.hex);
      console.log(convRgb);
      // returns null if not a colour
      if (!convRgb) return null;
      // gets sum of rgb values for conditional styling
      let rgbVals = [convRgb.red, convRgb.green, convRgb.blue].map(Number);
      let rgbVal = rgbVals.reduce((a, b) => a + b, 0);
      console.log(rgbVal);
  
      // returns an object 
      return {
        name: colorName,
        hex: colour.hex,
        rgb: `rgb(${convRgb.red}, ${convRgb.green}, ${convRgb.blue})`,
        rgbValue: rgbVal,
      };
    });
    return newRgb;
  };
  return (
    <main>
      <Header></Header>
      <Form
        setColour={setColour}
        colour={colour}
        generateShades={generateShades}
        coloursRef={coloursRef}
      ></Form>
      <ColourList
        clipCopy={clipCopy}
        shades={shades}
        coloursRef={coloursRef}
      />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
