import React from 'react';
import '../styles/Dashboard.css';
import './Card'
import { NavLink } from 'react-router-dom';

function Dashboard() {
    return (
        <section className="dashboard">
                <h3 className="content-header">Analytics</h3>
                    <div className="row no-pad">
                        <div className="card large col-full">
                            <div className="card-label">
                                <h5>Revenue</h5>
                                <NavLink exact to="/"><i className="icon icon-options"></i></NavLink> 
                            </div>
                            <img className="card-img desktop" src="/img/line-chart-desktop.svg" alt="Desktop Line Chart" />
                            <img className="card-img tablet" src="/img/line-chart-tablet.svg" alt="Tablet Line Chart" />
                            <img className="card-img mobile" src="/img/line-chart-mobile.svg" alt="Mobile Line Chart" />
                        </div>    
                    </div>
                    
                    <div className="row no-pad">
                        <div className="card small col-quarter vehicles">
                            <span className="card-header">
                                <span className="card-icon">
                                    <i className="icon icon-check"></i>
                                </span>
                            </span>
                            <h2 className="h1">$1,428</h2>
                            <p>Vehicles on track</p>
                        </div>
                        <div className="card small col-quarter distance">
                            <span className="card-header">
                                <span className="card-icon">
                                    <i className="icon icon-marker"></i>
                                </span>
                            </span>
                            <h2 className="h1">158.3 mi</h2>
                            <p>Distance driven</p>
                        </div>
                        <div className="card small col-quarter energy">
                            <span className="card-header">
                                <span className="card-icon">
                                    <i className="icon icon-energy"></i>
                                </span>
                            </span>
                            <h2 className="h1">87.5 kWh</h2>
                            <p>Energy consumed</p>
                        </div>
                        <div className="card small col-quarter time">
                        <span className="card-header">
                            <span className="card-icon">
                                <i className="icon icon-dynamic"></i>
                            </span>
                            </span>
                            <h2 className="h1">24.2 h</h2>
                            <p>Total drive time</p>
                        </div>
                    </div>

                    <div className="row no-pad">
                        <div className="card large col-third">
                            <div className="card-label">
                                <h5>Latest Trips</h5>
                                <NavLink exact to="/"><i className="icon icon-options"></i></NavLink>
                            </div>
                            <ul className="trip-list">
                                <li className="trip-item">
                                    <h4>Chrysler Building - The High Line <span className="cost">$28</span></h4>
                                    <div className="trip-subtext">
                                        <p className="date">
                                            06/03/2018
                                        </p>
                                        <p className="time">
                                            24min
                                        </p>
                                    </div>
                                </li>
                                <li className="trip-item">
                                    <h4>Theatre District - Prospect Park <span className="cost">$34</span></h4>
                                    <div className="trip-subtext">
                                        <p className="date">
                                            06/03/2018
                                        </p>
                                        <p className="time">
                                            21min
                                        </p>
                                    </div>
                                </li>
                                <li className="trip-item">
                                    <h4>Brooklyn Museum - Times Square <span className="cost">$39</span></h4>
                                    <div className="trip-subtext">
                                        <p className="date">
                                            06/04/2018
                                        </p>
                                        <p className="time">
                                            45min
                                        </p>
                                    </div>
                                </li>
                                <li className="trip-item">
                                    <h4>Brookfield Place - Chelse Market <span className="cost">$29</span></h4>
                                    <div className="trip-subtext">
                                        <p className="date">
                                            06/04/2018
                                        </p>
                                        <p className="time">
                                            14min
                                        </p>
                                    </div>
                                </li>
                                <li className="trip-item">
                                    <h4>Smorgasburg - Yankee Stadium <span className="cost">$52</span></h4>
                                    <div className="trip-subtext">
                                        <p className="date">
                                            06/05/2018
                                        </p>
                                        <p className="time">
                                            52min
                                        </p>
                                    </div>
                                </li>
                                <li className="trip-item">
                                    <h4>Union Square - The Cloisters <span className="cost">$44</span></h4>
                                    <div className="trip-subtext">
                                        <p className="date">
                                            06/05/2018
                                        </p>
                                        <p className="time">
                                            22min
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card large col-two-third">
                            <div className="card-label">
                                <h5>Trips by Weekday</h5>
                                <NavLink exact to="/"><i className="icon icon-options"></i></NavLink>
                            </div>
                            <img className="card-img desktop" src="/img/bar-chart-desktop.svg" alt="Desktop Bar Chart" />
                            <img className="card-img tablet" src="/img/bar-chart-tablet.svg" alt="Tablet Bar Chart" />
                            <img className="card-img mobile" src="/img/bar-chart-mobile.svg" alt="Mobile Bar Chart" />
                        </div>
                    </div>

                    
        </section>
    );
  }
  
  export default Dashboard;
