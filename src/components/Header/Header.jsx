import React from 'react';
import { onClick } from '../../constants';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <input type="text" placeholder="search..." />
      <nav className="nav" onClick={onClick}>
        <a className="nav-btn" href="/">
          HOME
        </a>
        <a className="nav-btn" href="/">
          CART
        </a>
        <a className="nav-btn" href="/">
          CATALOG
        </a>
      </nav>
      <button>LOGIN</button>
    </header>
  );
};

export default Header;
