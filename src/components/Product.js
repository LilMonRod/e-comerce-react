import React from 'react';
import './Product.css';

function Product(props) {
  return (
    <div className="Product__container">
      <img src="img/background.png" className="Product__bg-img" alt="" />
      <div className="img__container">
        <img src={props.data.imageUrl} className="Product__img" alt={props.data.subCategoryId} />
      </div>
      <h3>{props.data.name}</h3>
    </div>
  );
}

export default Product;