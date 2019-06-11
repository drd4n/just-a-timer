import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer time="101" />
        <p>เวลาไม่ใช่ของทุกคน</p>
      </header>

      
    </div>
  );
}

export default App;
