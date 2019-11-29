import React from 'react';
import Nav from  '../components/Nav';
import LittleProduct from  '../components/LittleProduct';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: props.shoppingCart,
      total: 0
    };
    console.log(props)
    this.categories = this.props.categories;
    this.products = this.props.products;

    this.chooseTitle = this.chooseTitle.bind(this);
    this.sumTotal = this.sumTotal.bind(this);
    
  }

  chooseTitle() {
    if (this.state.shoppingCart.length > 0) {
      return <h3>Este es tu carrito de compras:</h3>
    } else {
      return<h3>Oh! parece que no has incluido nada a tu carrito de compras.</h3>
    }
  }

  sumTotal(){
    if (this.state.shoppingCart.length > 0) {
      let sum = 0;
      this.state.shoppingCart.map(x => sum = x.price + sum)
      console.log(sum);
    
      return <div className="CheckOut__container"><h4>Total: {sum} </h4> <button>Confirmar Pago</button></div>
    }  
  }

  render() {
    return (
      <div className="ShoppingCart">
        <header className="ShoppingCart-header">
          <Nav key="main-nav" page="secondary" count={this.props.shoppingCart}></Nav>
        </header>
        <div className="Wellcome__container">
          {this.chooseTitle()}
        </div>
        <div className="Products__container">
          {this.props.shoppingCart.map((item) => <LittleProduct key={item.name+item.id} data={item}/>)}
          {this.sumTotal()}
        </div>

      </div>
    );
  }
}

export default ShoppingCart;