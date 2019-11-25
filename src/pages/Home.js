import React, { useState } from 'react';
import Nav from  '../components/Nav';
import Product from  '../components/Product';
import data from '../data/data.json';
import './Home.css';

function Home() {
  const [count, setCount] = useState(0);
  localStorage.setItem('Count', count);
  return (
    <div className="Home">
      <header className="Home-header">
        <Nav key="main-nav" page="main" count={count}></Nav>
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

export default Home;