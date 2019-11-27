import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button onClick={props.addToCart} id={props.id} className="button">
      {props.text}
    </button>
  );
}

export default Button;