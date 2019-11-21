import React from 'react';
import './Product.css';
import Buttom from './Button';

function Product(props) {
  return (
    <div className="Product__container">
      <div className="img__container">
        <img src={props.data.imageUrl} className="Product__img" alt={props.data.subCategoryId} />
        </div>
        <h3>{props.data.name}</h3>
        <p>Precio:<span className="Disapear">_</span><span className="High-light">{props.data.price}</span>CRC</p>
      <div>
        <Buttom id="see-details-Button" text="ver mas detalles"/>
        <Buttom count={props.count} setCount={props.setCount} id="buy-Button" text="Agregar al carrito"/>
      </div>
    </div>
  );
}

export default Product;