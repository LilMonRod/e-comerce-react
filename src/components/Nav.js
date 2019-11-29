import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sortedList: this.props.products,
        shoppingCart: this.props.shoppingCart
      };
      this.categories = this.props.categories;
      this.products = this.props.products;
    }
  render() {
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
            <NavLink className="Nav__link" to="/CarritoDeCompras">
              <img src="./img/iconos/cart.svg" className="Nav__cart" alt="logo" />
              <span className="sr-only">ShoppingCart</span>
              <div className="Indicador">{this.props.count.length}</div>
            </NavLink>
          </li>
        </ul>

      </div>
    );
  }
}

export default Nav;
