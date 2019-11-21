import React, { useState} from 'react';
import Nav from './components/Nav';
import Product from './components/Product';
import data from './data/data.json';
import './Panes.css';

function Panes() {
  return (
    <div className="Panes">
      <header className="Panes-header">
        <img src="./img/logo.png" className="Panes-logo" alt="logo" />
        <Nav key="main-nav" count={count}></Nav>
      </header>
      <div className="Wellcome__container">
        <h1>Pâtisserie de rêve</h1>
        <p>conoce nuestra gran variedad de panes:</p>
      </div>
      <div className="Products__container">
        {data.product.map((item) => (item.categoryId === 'Pan') ? <Product key={item.name+item.id} data={item} count={count} setCount={setCount}/> : null)}
      </div>
    </div>
  );
}

export default Panes;