import Swatch from "./Swatch";

const Hero = ({setColour}) => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2
          id="hero-title-1"
          style={{
            fontWeight: "300",
            textDecoration: "underline",
            textUnderlineOffset: "7px",
            textDecorationThickness: "2px",
            fontStyle: "italic",
            letterSpacing: "5px",
          }}
        >
          Inspiration in a click
        </h2>
        <h2 style={{ fontWeight: "600" }}>
          Use Shade Generator to add depth to your design
        </h2>
        <p>
          Colour can make or break a design, so having a range of tints and
          shades to hand at a moment's notice is a tool that might just become a
          mainstay in your projects. Use the <span>colour picker below</span>,
          or enter your <span>HEX colour reference</span> to start right away.
        </p>
      </div>
      <div>
        {/* <div>
          <div className="loader"></div>
          <div className="loader-2"></div>
        </div>
        <div>
          <div className="loader-2"></div>
          <div className="loader"></div>
        </div> */}
        <Swatch setColour={setColour} />
      </div>
    </section>
  );
};
export default Hero;
