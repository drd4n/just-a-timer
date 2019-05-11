import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer time="1000000" />
      </header>

      
    </div>
  );
}

export default App;
