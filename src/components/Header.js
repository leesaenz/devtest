import React from 'react';
import '../styles/Header.css';
import './HeaderMenu'

function Header() {
    return (
      <header className="header">
        <div className="container-no-margin">
          <h1 className="logo">Velocity</h1>
        </div>
      </header>
    );
  }
  
  export default Header;