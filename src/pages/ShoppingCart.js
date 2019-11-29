import React from 'react';
import Nav from  '../components/Nav';
import LittleProduct from  '../components/LittleProduct';
import { NavLink } from 'react-router-dom';

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
    this.deleteItem = this.deleteItem.bind(this);
  }

  chooseTitle() {
    if (this.state.shoppingCart.length > 0) {
      return <h3>Este es tu carrito de compras:</h3>
    } else {
      return<h3>Oh! parece que no has incluido nada a tu carrito de compras.</h3>
    }
  }

  sumTotal(){
    
    console.log(this.state.shoppingCart);
    console.log(this.props.shoppingCart);
    if (this.state.shoppingCart.length > 0) {
      let sum = 0;
      this.state.shoppingCart.map(x => sum = x.price + sum)
      this.setState({total: sum})
      // return <div className="CheckOut__container"><h4>Total: {this.state.total} </h4> <button>Confirmar Pago</button></div>
    }  
  }

  componentDidMount() {
    this.sumTotal()
  }

  deleteItem(event) {
    console.log(this.state.shoppingCart);
    console.log(this.props.shoppingCart);

    this.state.shoppingCart.splice(this.state.shoppingCart.findIndex(c => c.id == event.target.id), 1);
    this.setState({ shoppingCart: this.state.shoppingCart }, this.sumTotal());
    localStorage.setItem('shoppingCart', JSON.stringify(this.state.shoppingCart));
  }

  // array.splice(x, 1);

  checkOut() {
    localStorage.clear();
  }

  render() {
    return (
      <div className="ShoppingCart">
        <header className="ShoppingCart-header">
          <Nav key="main-nav" page="secondary" count={this.props.shoppingCart}></Nav>
        </header>
        <div className="Wellcome__container">
          <div className="Title__container">
            <img src="./img/iconos/cart.svg" className="cart" alt="logo" />
            <h2>Carrito de compras.</h2>
          </div>
          
          {this.chooseTitle()}
        </div>
        <div className="Products__container">
          {this.props.shoppingCart.map((item) => <LittleProduct key={item.name+item.id} deleteItem={this.deleteItem} data={item}/>)}
          
          {this.state.shoppingCart.length ? <div className="CheckOut__container"><h4>Total: {this.state.total} </h4> <button onClick={this.checkOut}>Confirmar Pago</button></div> : <NavLink className="linkToHome" to="/">Ir a la página de inicio</NavLink>}
        </div>

      </div>
    );
  }
}

export default ShoppingCart;