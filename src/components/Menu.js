import React from 'react';
import '../styles/Menu.css';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
      <aside className="main-menu">
        <ul>
            <li>
                <i className="icon icon-menu"></i>
            </li>
            <li className="empty-space">
                <NavLink activeClassName="active" exact to="/"><i className="icon icon-dashboard"></i></NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/analytics"><i className="icon icon-analytics"></i></NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/vehicles"><i className="icon icon-vehicles"></i></NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/service"><i className="icon icon-service"></i></NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/locations"><i className="icon icon-map"></i></NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/contact"><i className="icon icon-email"></i></NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/settings"><i className="icon icon-settings"></i></NavLink>
            </li>
        </ul>
      </aside>
    );
  }
  
  export default Menu;