import React from 'react';
import './Button.css';
import propTypes from 'prop-types';

export default function Button(props) {
  return (
    <button className="Button" onClick={props.onClickRandomColor}>
      <h1 className="Button-Text">Generate Color</h1>
    </button>
  );
}
Button.propTypes = { onClickRandomColor: propTypes.func };
