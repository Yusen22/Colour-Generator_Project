import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa6";
import classNames from "classnames";
import rgbHex from "rgb-hex";

const Swatch = ({ setColour }) => {
  const [state, setState] = useState(0);
  const [swatchColours, setSwatchColours] = useState([]);

  //   creates template div for mapping 16 swatch squares and 3 swatches
  const swatchArray = Array.from({ length: 10 }, (_, index) => index + 1);

  //   function for generating random rgb value
  const randomColour = () => {
    const getValue = () => Math.floor(Math.random() * 255);
    const [red, green, blue] = [getValue(), getValue(), getValue()];
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const handleSwatchClick = (e) => {
    const swatchSquareElement = e.currentTarget.firstChild
    console.log(swatchSquareElement);
    const computedStyle = window.getComputedStyle(swatchSquareElement);
    const backgroundColor = `#${rgbHex(computedStyle.backgroundColor)}`;
    console.log("Clicked element background color:", backgroundColor);
    setColour(backgroundColor);
  };

  useEffect(() => {
    const mountColors = swatchArray.map(() =>
      Array.from({ length: 16 }, () => randomColour())
    );
    setSwatchColours(mountColors);
  }, []);

    useEffect(() => {
      const nextSlide = () => {
        setState((currentState) => (currentState + 1) % swatchArray.length);
      };
      let sliderId = setInterval(nextSlide, 10000);
      return () => clearInterval(sliderId);
    }, []);

  return (
    <section>
      <div className="swatch-container">
        {/* Maps 3 swatches from swatchArray */}
        {swatchColours.map((swatch, i) => {
          return (
            <div
              style={{
                transform: `translateX(${100 * (i - state)}%)`,
              }}
              className="swatch"
              key={i}
            >
              {swatchColours[0].map((square, j) => {
                //   classNames for styling of swatch squares
                const swatchCornerClasses = classNames({
                  "swatch-square": true,
                  "sw-s-top-l": j === 0,
                  "sw-s-top-r": j === 3,
                  "sw-s-bottom-l": j === 12,
                  "sw-s-bottom-r": j === 15,
                });
                return (
                  <div
                    className="square-container"
                    onClick={handleSwatchClick}
                  >
                    <div
                      className={swatchCornerClasses}
                      key={square}
                      style={{
                        backgroundColor:
                          swatchColours[i]?.[j] || randomColour(),
                      }}
                    />
                    <div className="swatch-icon">
                      <FaCopy className="icon"></FaCopy>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Swatch;
