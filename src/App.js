import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

export function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'></Route>
        </Switch>
      </Router>
    </>
  );
}

import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App; // Ensure you have this line
