import React from 'react';
import '../styling/globals.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link className="header-home" to="/">
            <div className="logo-name">Studenten Dashboard</div>
        </Link>
      </div>
    </header>
  );
};
export default Header;
