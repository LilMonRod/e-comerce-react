import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

function Nav(props) {
  const count = props.count ? props.count : localStorage.getItem('Count');
  return (
    <div className="Nav">
      <ul className="Nav__container">
        <li className="Nav__item-logo">
          <NavLink className="Nav__link" to="/">
            <img src="./img/logo.png" className="Home-logo" alt="logo" />
          </NavLink>
        </li>
        <li className="Nav__item">
          <NavLink className="Nav__link" to="/Dulces">Dulces</NavLink>
        </li>
        <li className="Nav__item">
          <NavLink className="Nav__link" to="/Salados">Salados</NavLink>
        </li>
        <li className="Nav__item">
          <NavLink className="Nav__link" to="/Panes">Panes</NavLink>
        </li>
        <li className="Nav__item">
          <NavLink className="Nav__link" to="/Festivos">Festivos</NavLink>
        </li>

        <li className="Nav__item">
          <NavLink className="Nav__link" to="/ShoppingCart">
            <img src="./img/iconos/cart.svg" className="Nav__cart" alt="logo" />
            <span className="sr-only">ShoppingCart</span>
            <div className="Indicador">{count}</div>
          </NavLink>
        </li>
      </ul>

    </div>
  );
}

export default Nav;
