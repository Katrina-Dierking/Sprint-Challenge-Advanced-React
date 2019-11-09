import React from 'react';
import PlayerData from './components/PlayerData';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Woman's World Cup Players: </h1>
        <div>
        <PlayerData />
        </div>
      </header>
    </div>
  );
}

export default App;
