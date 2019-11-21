import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Product from './components/Product';
import data from './data/data.json';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  return (
    <div className="App">
      <header className="App-header">
        <img src="./img/logo.png" className="App-logo" alt="logo" />
        <Nav key="main-nav" count={count}></Nav>
      </header>
      <div className="Wellcome__container">
        <h1>Bienvenido a Pâtisserie de rêve</h1>
        <p>conoce nuestra gran variedad de productos:</p>
      </div>
      <div className="Products__container">
        {data.product.map((item) => <Product key={item.name+item.id} data={item} count={count} setCount={setCount} />)}
      </div>
    </div>
  );
}

export default App;
