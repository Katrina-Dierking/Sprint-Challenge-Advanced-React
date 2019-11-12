import React from 'react';
import PlayerData from './components/PlayerData';
import ToggleBar from './components/ToggleBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Woman's World Cup Players: </h1>
        </header>
        
        <div className="info-box">
        <ToggleBar />
        <PlayerData />
        </div>
    </div>
  );
}

export default App;
