import React from 'react';
import Nav from  '../components/Nav';
import Sort from '../components/Sort' 

import './Festivos.css';

function Festivos(props) {
  console.log(props.products);
  const CategoryProducts =  props.products.product.filter(item => item.categoryId === 'Dulces Festivos');
  console.log(CategoryProducts);
  return (
    <div className="Festivos">
      <header className="Festivos-header">
        <Nav key="main-nav" page="secondary" count={props.shoppingCart}></Nav>
      </header>
      <div className="Wellcome__container">
        <h1>Pâtisserie de rêve</h1>
        <p>conoce nuestra gran variedad de {CategoryProducts[0].categoryId}:</p>
      </div>

      <Sort key='sort' categories={props.categories} products={CategoryProducts} shoppingCart={props.shoppingCart}/>
    </div>
  );
}

export default Festivos;