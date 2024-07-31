import Values from "values.js";
import classNames from 'classnames';
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";

const ColourList = ({ shades }) => {
  // console.log(shades?.hex || "Error");

  return (
    <section>
      <div className="colour-list">
        {shades.map((colour, i) => {
          const id = nanoid();
          const colourClasses = classNames({
            "colour": true, // Always apply this class
            "initial-colour": i === Math.round(shades.length / 2 - 1),
            "text-dark": colour.rgbValue >= (755 / 2),
            "text-light": colour.rgbValue < (755 / 2)
          });
          return (
            <div
              className={colourClasses}
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
