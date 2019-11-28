import React from 'react';
import Nav from  '../components/Nav';
import Sort from '../components/Sort';
import './Home.css';

function Home(props) {
  return (
    <div className='Home'>
      <header className='Home-header'>
        <Nav key='main-nav' page='main' count={props.shoppingCart}></Nav>
      </header>
      <div className='Wellcome__container'>
        <h1>Bienvenido a Pâtisserie de rêve</h1>
        <p>conoce nuestra gran variedad de productos:</p>
      </div>
      <Sort key='sort' categories={props.categories} products={props.products.product} shoppingCart={props.shoppingCart}/>
    </div>
  );
}

export default Home;