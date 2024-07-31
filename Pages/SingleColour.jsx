import { useState, useEffect } from "react";
import { FaCopy } from "react-icons/fa6";

const SingleColour = ({ className, colour, shades, clipCopy }) => {
  const [isHovered, setIsHovered] = useState(false);

  const copyClass = useEffect(() => {
    console.log(shades);
  }, [isHovered]);

  return (
    <>
      <div
        className={className}
        style={{ backgroundColor: `#${colour.hex}` }}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <div style={{transition: 'all 300ms ease', transform: isHovered ? "translate(0, 10%)" : "translate(0, 20%)"}}>
          <h3 >{colour.name}</h3>
          <h5>{`#${colour.hex}`}</h5>
          <p style={{transition: 'all 600ms ease', opacity: isHovered ? "1" : '0',}}>{colour.rgb}</p>
        </div>

        <div
          style={{
            transform: isHovered ? "translate(0)" : "translate(0, -100%)",
            transition: "transform 0.4s ease",
          }}
          className="copy-section"
        >
          <div onClick={() => clipCopy(colour.hex)}>
            <FaCopy className="icon" />
            <p>Copy Hex</p>
          </div>
          <div onClick={() => clipCopy(colour.rgb)}>
            <FaCopy className="icon" />
            <p>Copy RGB</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleColour;
