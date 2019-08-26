import React from 'react';
import '../styles/Dashboard.css';
import './Card'

function Dashboard() {
    return (
        <section className="dashboard">
                <h3 className="content-header">Analytics</h3>
                    <div className="row">
                        <div className="card large col-full">
                            <img className="card-chart-image" src="/img/line-chart-desktop.svg" alt="Main Line Chart" />
                        </div>
                    </div>
                    
                    <div className="row no-pad">
                        <div className="card small col-quarter">
                            
                        </div>
                        <div className="card small col-quarter">
                            
                        </div>
                        <div className="card small col-quarter">
                            
                        </div>
                        <div className="card small col-quarter">
                            
                        </div>
                    </div>
        </section>
    );
  }
  
  export default Dashboard;