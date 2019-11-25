import React from 'react';
import Nav from '../components/Nav';
import './Error.css';

function Error() {
  return (
    <div className="Error">
      <header className="Error-header">
        <Nav key="main-nav" page="secondary"></Nav>
      </header>
      <div className="Wellcome__container">
        <h1>Pâtisserie de rêve</h1>
        <h2> <span>Error: 404.</span> Page not found</h2>
      </div>
    </div>
  );
}

export default Error;