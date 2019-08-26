import React from 'react'
import '../styles/App.css'
import '../styles/Containers.css'
import Main from './Main'
import Header from './Header'
import Menu from './Menu'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
