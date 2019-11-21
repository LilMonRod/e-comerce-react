import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button onClick={() => props.setCount(props.count + 1)} id={props.id} className="button">
      {props.text}
    </button>
  );
}

export default Button;