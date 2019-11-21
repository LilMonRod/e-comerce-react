import React from 'react';
import './Buy.css';

function Buy(props) {
    console.log(props);
  return (
    <button className="Buy__container">
      {props.text}
    </button>
  );
}

export default Buy;