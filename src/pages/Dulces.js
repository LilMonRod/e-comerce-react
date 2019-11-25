import React from 'react';
import Nav from  '../components/Nav';
import Product from  '../components/Product';
import data from  '../data/data.json';
import './Dulces.css';

function Dulces() {
  return (
    <div className="Dulces">
      <header className="Dulces-header">
        <Nav key="main-nav" page="secondary"></Nav>
      </header>
      <div className="Wellcome__container">
        <h1>Pâtisserie de rêve</h1>
        <p>conoce nuestra gran variedad de Bolleria Dulce:</p>
      </div>
      <div className="Products__container">
        {data.product.map((item) => (item.categoryId === 'Bolleria Dulce') ? <Product key={item.name+item.id} data={item} /> : null)}
      </div>
    </div>
  );
}

export default Dulces;