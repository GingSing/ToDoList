import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Logs } from './pages';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } /> 
          <Route path="/logs" component={ Logs } />
        </Switch>
      </div>
    );
  }
}

export default App;
