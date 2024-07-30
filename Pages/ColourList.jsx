import Values from "values.js";
import { nanoid } from "nanoid";

const ColourList = ({shades}) => {
  console.log(shades?.[0]?.hex)
  return (
    <section>
      <div className="colour-list">
        {shades.map((shade) => {
          const id = nanoid()
          return (
            <div className="colour" key={id} style={{backgroundColor: `#${shade.hex}`}}>
              <h5>#{shade.hex}</h5> 
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default ColourList