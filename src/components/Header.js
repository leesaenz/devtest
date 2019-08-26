import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import './HeaderMenu'

function Header() {
    return (
      <header className="header">
        <div className="container-no-margin">
          <nav className="top-menu">
            <ul className="mobile-menu">
              <li>
                <i className="icon icon-menu"></i>
              </li>
            </ul>
            <NavLink className="logo-link" exact to="/"><h1 className="logo">Velocity</h1></NavLink>
            <h1 className="page-header">Analytics</h1>
            <ul>
              <li>
                <NavLink exact to="/"><i className="icon icon-bell"></i><span className="notification"></span></NavLink>
              </li>
              <li>
                <NavLink exact to="/"><i className="icon icon-email"></i><span className="notification"></span></NavLink>
              </li>
              <li>
                <NavLink exact to="/"><img className="profile-pic" src="/img/profile.png" alt="Profile Pic" /></NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  