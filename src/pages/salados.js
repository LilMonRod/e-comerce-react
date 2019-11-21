import React from 'react';
import Nav from  '../components/Nav';
import Product from  '../components/Product';
import data from  '../data/data.json';
import './Salados.css';

import { NavLink } from 'react-router-dom';

function Salados() {
  return (
    <div className="Salados">
      <header className="Salados-header">
        <NavLink className="Nav__link" to="/">
          <img src="./img/logo.png" className="Salados-logo" alt="logo" />
        </NavLink>
        <Nav key="main-nav"></Nav>
      </header>
      <div className="Wellcome__container">
        <h1>Pâtisserie de rêve</h1>
        <p>conoce nuestra gran variedad de Bolleria Salada:</p>
      </div>
      <div className="Products__container">
        {data.product.map((item) => (item.categoryId === 'Pan') ? <Product key={item.name+item.id} data={item} /> : null)}
      </div>
    </div>
  );
}

export default Salados;