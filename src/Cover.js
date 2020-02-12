import React, { useState } from 'react';
import './Cover.css';

export default function Cover() {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="Cover" hidden={hidden}>
      <p className="Paragraph">
        Welcome to our Random Color Generator website were you can generate your
        won color and get the Hex Code for that color.
      </p>
      <button className="ButtonX" onClick={() => setHidden(true)}>
        &times;
      </button>
    </div>
  );
}
