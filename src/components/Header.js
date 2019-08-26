import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/Header.css';
import './HeaderMenu'

function Header() {
    return (
      <header className="header">
        <div className="container-no-margin">
          <NavLink exact to="/"><h1 className="logo">Velocity</h1></NavLink>
        </div>
      </header>
    );
  }
  
  export default Header;