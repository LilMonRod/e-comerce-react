import React from 'react';
import './Product.css';
import Buttom from './Button';
import ModalTool from './ModalTool';

function Product(props) {
  return (
    <div className="Product__container">
      <div className="img__container">
        <img src={props.data.imageUrl} className="Product__img" alt={props.data.subCategoryId} />
      </div>
        <h3 className="title">{props.data.name + ' ID:' + props.data.id }</h3>
        <p>Precio:<span className="Disapear">_</span><span className="High-light">{props.data.price}</span>CRC</p>
      <div>
        <ModalTool data={props.data}/>
        <Buttom addToCart={props.addToCart} id={props.data.id} text="Agregar al carrito"/>
      </div>
    </div>
  );
}

export default Product;