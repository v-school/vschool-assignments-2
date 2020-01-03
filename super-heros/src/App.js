import React from 'react';
import './App.css';
import SuperHeroList from "./SuperHeroList"
import heros from "./heros.json"

function App() {
  return (
    <div className="App">
      <SuperHeroList heros={heros}/>
    </div>
  );
}

export default App;
