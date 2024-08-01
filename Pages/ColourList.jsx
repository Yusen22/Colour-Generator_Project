import Values from "values.js";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import SingleColour from "./SingleColour";

const ColourList = ({ shades, clipCopy, coloursRef }) => {
  // console.log(shades?.hex || "Error");
  return (
    <section>
      <div
        className="colour-list"
        style={{display: shades.length === 0 ? 'none' : ''}}
        ref={coloursRef}
      >
        {shades.map((colour, i) => {
          const colourClasses = classNames({
            colour: true, // Always apply this class
            "colour-name": true,
            "initial-colour colour-name-visible":
              i === Math.round(shades.length / 2 - 1),
            "text-dark": colour.rgbValue >= 755 / 2,
            "text-light": colour.rgbValue < 755 / 2,
          });
          const id = nanoid();
          console.log(id);
          return (
            <SingleColour
              key={id}
              className={colourClasses}
              colour={colour}
              clipCopy={clipCopy}
              shades={shades}
            />
          );
        })}
      </div>
    </section>
  );
};
export default ColourList;
