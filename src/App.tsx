import React from 'react';
import './App.css';
import PlayerClass from './Components/PlayerClass/PlayerClass';
import PlayerFunction from './Components/PlayerFunction/PlayerFunction';

function App() {
  return (
    <div className="App">
      <h1>Class Vs Function Component</h1>
      {/* Functional Components */}
      <PlayerFunction name='Messi' goals={5} />
      <PlayerFunction name='Ronaldo' goals={-5} />
      <PlayerFunction name='Zlatan' goals={-5} />
      {/* Class Components */}
      <PlayerClass name='Messi' goals={5} />
      <PlayerClass name='Ronaldo' goals={-5} />
      <PlayerClass name='Zlatan' goals={-5} />
    </div>
  );
}

export default App;
