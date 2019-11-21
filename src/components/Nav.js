import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

function Nav(props) {
  return (
    <div className="Nav">
      <ul className="Nav__container">
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
        <img src="./img/iconos/cart.svg" className="Nav__cart" alt="logo" />
        <div className="Indicador">{props.count}</div>
        </li>
      </ul>

    </div>
  );
}

export default Nav;
