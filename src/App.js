import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Cover from './Cover';
import Button from './Button';
import Box from './Box';
import randomColor from 'randomcolor';

function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div className="App">
      <Cover />
      <Box color={color} />
      <Button onClickRandomColor={() => setColor(randomColor())} />
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
