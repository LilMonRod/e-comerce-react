import React from 'react';
import Nav from './components/Nav';
import Product from './components/Product';
import data from './data/data.json';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./img/logo.png" className="App-logo" alt="logo" />
        <Nav key="main-nav"></Nav>
      </header>
      <div className="Products__container">
        {data.product.map((item) => <Product key={item.name+item.id} data={item} />)}
      </div>
    </div>
  );
}

export default App;
