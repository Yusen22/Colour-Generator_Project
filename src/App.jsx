import { useState, useEffect } from 'react';
import { ColourList, Form } from "../Pages";
import { ToastContainer, toast } from 'react-toastify';
import Values from 'values.js';

// toast.success('awesome');
// toast.error('error message');


const App = () => {
  const [colour, setColour] = useState('');
  const [shades, setShades] = useState([])

useEffect(() => {
    console.log(colour);
}, [colour]);

  const generateShades = (colour) => {
    const newColours = new Values(colour).all(10)
    setShades(newColours)
  }
  return (
  <main className='container'>
    <h2>Color Generator Starter</h2>
    <Form setColour={setColour} colour={colour} generateShades={generateShades}></Form>
    <ColourList shades={shades}/>
    <ToastContainer position='top-center'/>
  </main>

  )
};
export default App;
