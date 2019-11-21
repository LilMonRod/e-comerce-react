import React from 'react';
import { Router, Route, Switch } from "react-router";

import './Nav.css';

function Nav(props) {
  return (
    <div className="Nav">
      
      <ul className="Nav__container">
        <li className="Nav__item">Dulces</li>
        <li className="Nav__item">Salados</li>
        <li className="Nav__item">Panes</li>
        <li className="Nav__item">Festivos</li>

        <li className="Nav__item">
        <img src="./img/iconos/cart.svg" className="Nav__cart" alt="logo" />
        <div className="Indicador">{props.count}</div>
        </li>
      </ul>

    </div>
  );
}

export default Nav;
