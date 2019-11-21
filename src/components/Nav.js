import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
      
      <ul className="Nav__container">
        <li className="Nav__item">item</li>
        <li className="Nav__item">item</li>
        <li className="Nav__item">item</li>

        <li className="Nav__item">
        <img src="./img/iconos/cart.svg" className="Nav__cart" alt="logo" />
        </li>
      </ul>

    </div>
  );
}

export default Nav;