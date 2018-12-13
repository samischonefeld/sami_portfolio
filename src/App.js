import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home.jsx';
import Art from './components/art.jsx';
import About from './components/about.jsx';
import WebDev from './components/webdev.jsx';

class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/art' component = {Art} />
        <Route exact path = '/about' component = {About} />
        <Route exact path = '/webdev' component = {WebDev} />
      </Switch>
    </Router>
    );
  }
}

export default App;
