// src/App.js
import POPOSDetails from './POPOSDetails'
import About from './About'
import { HashRouter as Router, Route } from 'react-router-dom'
import POPOSList from './POPOSList';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title.js';



function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSList}/>
         <Route path="/about" component={About} />
         <Route path="/details/:id" component={POPOSDetails} />
      </div>
    </Router>
  );
}
export default App;
