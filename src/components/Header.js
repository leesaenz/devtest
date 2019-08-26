import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import './HeaderMenu'

function Header() {
    return (
      <header className="header">
        <div className="container-no-margin">
          <nav className="top-menu">
            <NavLink exact to="/"><h1 className="logo">Velocity</h1></NavLink>
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