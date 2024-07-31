import Values from "values.js";
import hexRgb from "hex-rgb";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const ColourList = ({ shades }) => {
  const [rgbHex, setRgbHex] = useState([]);
  const [rgbSum, setRgbSum] = useState(0)
  console.log(shades?.hex || "Error");

  useEffect(() => {
    const getRgbValues = () => {
      const newRgb = shades.map((shade) => {
        const convRgb = hexRgb(shade.hex);
        if (!convRgb) return;
        return {
          hex: shade.hex,
          rgb: `rgb(${convRgb.red}, ${convRgb.green}, ${convRgb.blue})`,
        };
      });
      setRgbHex(newRgb);
    };
    getRgbValues();
  }, [shades]);
  
  useEffect(() => {
    const calculateSumOfRgb = () => {
      console.log(rgbHex)
      rgbHex.map//
    };
    calculateSumOfRgb();
  }, [rgbHex])
 


  return (
    <section>
      <div className="colour-list">
        {rgbHex.map((colour, i) => {
          const initialCol = Math;
          const id = nanoid();
          return (
            <div
              className={
                i === Math.round(shades.length / 2 - 1)
                  ? "colour initial-colour"
                  : "colour"
              }
              className={shades.rgb ? "colour initial-colour" : "colour"}
              key={id}
              style={{ backgroundColor: `#${colour.hex}` }}
            >
              <h5>{`#${colour.hex}`}</h5>
              <p>{colour.rgb}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default ColourList;
