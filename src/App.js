// import React, { useState, useEffect } from 'react';
import './App.css';
import Room from './components/Room/Room';
import Intro from './components/Intro/Intro';
function App() {
  // const [room, setRoom] = useState(room);
  return (
    <div className="App">
      <Intro />
      <Room />
    </div>
  );
}

export default App;
