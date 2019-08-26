import React from 'react'
import '../styles/App.css'
import Main from './Main'
import Header from './Header'
import Menu from './Menu'

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Main />
    </div>
  );
}

export default App;
