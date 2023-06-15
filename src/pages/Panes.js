import React from 'react';
import Nav from  '../components/Nav';
import Sort from '../components/Sort';

import './Panes.css';

class Panes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categorySelected: 'default',
      sortedList: props.products,
      shoppingCart: props.shoppingCart
    };
    
    this.categories = props.categories;
    this.products = props.products;
    this.CategoryProducts =  props.products.product.filter(item => item.categoryId === 'Panes');

    this.addToCart = this.addToCart.bind(this);
    this.verify = this.verify.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  verify(element,id){ 
    if (element.id === id) {
      return element;
    }
  }

  addToCart(event) {
    const id = parseFloat(event.target.id);
    const element = this.products.product.find(element => this.verify(element,id));

    const newShoppingCart = this.props.shoppingCart.slice()
    newShoppingCart.push(element);
    this.setState({shoppingCart: newShoppingCart},  () => this.updateCart(element)) 
  }
  
  updateCart(element) {
    this.props.shoppingCart.push(element);
    localStorage.setItem('shoppingCart', JSON.stringify(this.state.shoppingCart));
  }

  render() {
    return (
      <div className='Home'>
        <header className='Home-header'>
          <Nav key='main-nav' page='main' count={this.state.shoppingCart}></Nav>
        </header>
        <div className='Wellcome__container'>
          <h1>Bienvenido a Pâtisserie de rêve</h1>
          <p>conoce nuestra gran variedad de {this.CategoryProducts[0].categoryId}:</p>
        </div>
        <Sort key='sort' addToCart={this.addToCart} categories={this.props.categories} products={this.CategoryProducts} shoppingCart={this.props.shoppingCart}/>
      </div>
    );
  }
}
export default Panes;
