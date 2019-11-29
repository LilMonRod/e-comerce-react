import React from 'react';
import './LittleProduct.css';

function LittleProduct(props) {
  return (
    <div className="LittleProduct__container">
      <button className="Quit-btn" id={props.data.id} onClick={props.deleteItem}>Quitar</button>
      <div className="Info__container">
        <img src={props.data.imageUrl} className="LittleProduct__img" alt={props.data.subCategoryId} />
      </div>
      <div className="title-container">
        <h4 className="title">{props.data.name}</h4>
        <p className="amount">Precio:<span className="Disapear">_</span><span className="High-light">{props.data.price}</span>CRC</p>
      </div>
    </div>
  );
}

export default LittleProduct;