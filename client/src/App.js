import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={ Home } /> 
        </Switch>
      </div>
    );
  }
}

export default App;
