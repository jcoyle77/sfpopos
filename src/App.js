// src/App.js

import POPOSList from './POPOSList';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title.js';



function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
    </div>
  );
}

export default App;
