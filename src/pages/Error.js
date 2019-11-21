import React from 'react';
import Nav from '../components/Nav';
import './Error.css';

import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div className="Error">
      <header className="Error-header">
        <NavLink className="Nav__link" to="/">
          <img src="./img/logo.png" className="Error-logo" alt="logo" />
        </NavLink>
        <img src="./img/logo.png" className="Error-logo" alt="logo" />
        <Nav key="main-nav"></Nav>
      </header>
      <div className="Wellcome__container">
        <h1>Pâtisserie de rêve</h1>
        <h2> <span>Error: 404.</span> Page not found</h2>
      </div>
    </div>
  );
}

export default Error;