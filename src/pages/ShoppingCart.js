import React from 'react';
import Nav from  '../components/Nav';
import './Salados.css';

function Salados() {
  return (
    <div className="Salados">
      <header className="Salados-header">
        <Nav key="main-nav" page="secondary"></Nav>
      </header>
      <div className="Wellcome__container">
        <h1>Pâtisserie de rêve</h1>
        <p>Shopping car</p>
      </div>
    </div>
  );
}

export default Salados;