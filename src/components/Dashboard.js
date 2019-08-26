import React from 'react';
import '../styles/Dashboard.css';
import './Card'

function Dashboard() {
    return (
      <section className="dashboard">
        <h3 className="content-header">Analytics</h3>
        <div class="card large col-full">
            <img className="card-chart-image" src="/img/line-chart-desktop.svg" alt="Main Line Chart" />
        </div>
      </section>
    );
  }
  
  export default Dashboard;